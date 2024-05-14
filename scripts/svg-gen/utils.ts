import { transform } from "@svgr/core";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { readdir, readFile } from "fs/promises";
import Handlebars from "handlebars";
import path from "path";
import { OUT_PATH_DIR } from "./consts";

const __dirname = path.resolve(path.dirname(""));

const capitalizeString = (str: string) => {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
};

const fileNameToComponentName = (fileName: string) => {
  return fileName
    .split("-")
    .filter((value) => value !== "icon")
    .map((value) => capitalizeString(value))
    .join("");
};

export const getFilesInDirectory = async (
  iconsPath: string,
): Promise<{ fullPath: string; name: string; componentName: string }[]> => {
  const pathToRead = path.join(__dirname, iconsPath);

  try {
    const files = await readdir(pathToRead);

    return files
      .filter((fileName) => fileName.includes(".svg"))
      .map((fileName) => {
        const [name] = fileName.split(".");

        return {
          fullPath: path.join(pathToRead, fileName),
          name: fileName,
          componentName: fileNameToComponentName(name),
        };
      });
  } catch (err) {
    console.log(err);
  }

  return [];
};

const ensureDirectoryExistence = (filePath: string) => {
  const dirname = path.dirname(filePath);
  if (existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  mkdirSync(dirname);
};

const createFile = (outputPath: string, content: string) => {
  const filePath = outputPath;
  ensureDirectoryExistence(filePath);
  writeFileSync(filePath, content);
};

export const createConfigFile = async (icons: string[]) => {
  const templateContent = await readFile(
    path.relative("/", "/scripts/svg-gen/templates/config.tsx.hbs"),
    "utf-8",
  );
  const template = Handlebars.compile(templateContent);

  const outputPath = path.join(OUT_PATH_DIR, "config.ts");
  createFile(outputPath, template({ icons }));
};

export const generateSvgComponent = async (
  filePath: string,
  componentName: string,
) => {
  const content = await readFile(filePath, "utf8");
  const outputPath = path.join(OUT_PATH_DIR, `${componentName}.tsx`);

  const iconContent = await transform(
    content,
    {
      plugins: [
        "@svgr/plugin-svgo",
        "@svgr/plugin-jsx",
        "@svgr/plugin-prettier",
      ],
      icon: true,
      typescript: true,
    },
    { componentName },
  );

  createFile(outputPath, iconContent);
};
