import toast from "react-hot-toast";

export const error = (message: string): void => {
  toast.error(`Error: ${message}`);
};

export const success = (message: string): void => {
  toast.success(`Success: ${message}`);
};
