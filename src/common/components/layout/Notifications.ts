import { toast } from 'react-toastify';

const defaultOptions = {
  autoClose: 5000, // 5 segundos
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  position: "top-right" as "top-right",
};

export const notifySuccess = (message: string) => toast.success(message, defaultOptions);
export const notifyError = (message: string) => toast.error(message, defaultOptions);
