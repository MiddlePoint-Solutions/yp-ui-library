import { FC } from "react";
import { Id, ToastContainerProps, TypeOptions, toast } from "react-toastify";
import { Typography } from "../../Typography";
import { twMerge } from "tailwind-merge";

export interface ToastContentProps extends Partial<ToastContainerProps> {
  title: string;
  desc: string;
  type: TypeOptions;
}

export const ToastContent: FC<ToastContentProps> = ({ title, desc, type }) => {
  return (
    <div className="flex flex-col">
      <Typography
        variant={4}
        className={twMerge(
          "text-white",
          type === "success" && "text-green-500",
          type === "error" && "text-red-500",
          type === "warning" && "text-yellow-500",
          type === "info" && "text-blue-500",
        )}
        weight="bold"
      >
        {title}
      </Typography>
      <Typography variant={3} className="text-white">
        {desc}
      </Typography>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const toaster = ({ title, desc, ...rest }: ToastContentProps): Id =>
  toast(<ToastContent type={rest.type} title={title} desc={desc} />, {
    ...rest,
  });

toaster.success = ({ title, desc, ...rest }: ToastContentProps): Id =>
  toast(<ToastContent type="success" title={title} desc={desc} />, {
    ...rest,
  });

toaster.error = ({ title, desc, ...rest }: ToastContentProps): Id =>
  toast(<ToastContent type="error" title={title} desc={desc} />, {
    ...rest,
  });

toaster.info = ({ title, desc, ...rest }: ToastContentProps): Id =>
  toast(<ToastContent type="info" title={title} desc={desc} />, {
    ...rest,
  });

toaster.warning = ({ title, desc, ...rest }: ToastContentProps): Id =>
  toast(<ToastContent type="warning" title={title} desc={desc} />, {
    ...rest,
  });
