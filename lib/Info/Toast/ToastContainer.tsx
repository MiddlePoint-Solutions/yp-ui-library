import { FC } from "react";
import { ToastContainerProps, ToastContainer as Toast } from "react-toastify";

interface Props extends ToastContainerProps {}

export const ToastContainer: FC<Props> = ({ ...props }) => {
  return (
    <Toast
      position="top-right"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      progressClassName="bg-white"
      {...props}
    />
  );
};
