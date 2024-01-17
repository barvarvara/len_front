import { toast } from 'react-toastify';

export const showToast = (msg: string, type: "success" | "error") => {
  toast(msg, {type});
}