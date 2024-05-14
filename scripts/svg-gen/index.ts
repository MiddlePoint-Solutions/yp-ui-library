import { PATH_TO_SVGS } from './consts';
import { createConfigFile, generateSvgComponent, getFilesInDirectory } from './utils';

async function main() {
  console.info(`Icons are read from directory ${PATH_TO_SVGS}`);

  const files = await getFilesInDirectory(PATH_TO_SVGS);

  if (files.length < 0) {
    console.log('No svg file to process....');
  }

  const generatedIcons = await files.reduce<Promise<string[]>>(
    async (acc, { fullPath, componentName }) => {
      const accum = await acc;
      try {
        await generateSvgComponent(fullPath, componentName);
        console.log(`${componentName} -> ✅`);
        accum.push(componentName);
      } catch (err) {
        console.log(err);
        console.log(`${componentName} -> ❌`);
        return accum;
      }

      return accum;
    },
    Promise.resolve([]),
  );

  createConfigFile(generatedIcons);
}

main();
