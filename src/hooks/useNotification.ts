import { toast } from 'react-toastify';

export function useNotification() {
  const notify = (msg: string, type: 'success' | 'error' = 'success') => {
    toast[type === 'success' ? 'success' : 'error'](msg);
  };
  return notify;
}