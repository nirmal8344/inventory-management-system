
import React, { useEffect, useState } from 'react';
import { CheckCircleIcon, XCircleIcon, InfoIcon, AlertCircleIcon, XIcon } from '../icons/IconPack';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

const toastConfig = {
  success: {
    icon: CheckCircleIcon,
    bgClass: 'bg-green-500',
    iconClass: 'text-green-500'
  },
  error: {
    icon: XCircleIcon,
    bgClass: 'bg-red-500',
    iconClass: 'text-red-500'
  },
  info: {
    icon: InfoIcon,
    bgClass: 'bg-blue-500',
    iconClass: 'text-blue-500'
  },
  warning: {
    icon: AlertCircleIcon,
    bgClass: 'bg-yellow-500',
    iconClass: 'text-yellow-500'
  },
};

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      handleClose();
    }, 4500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300); // Wait for fade-out animation
  };

  const { icon: Icon, bgClass, iconClass } = toastConfig[type];

  return (
    <div
      className={`relative flex items-center p-4 min-w-[300px] text-white bg-slate-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
    >
      <div className={`absolute left-0 top-0 bottom-0 w-2 ${bgClass}`}></div>
      <div className="pl-3 pr-8 flex items-center">
        <Icon className={`h-6 w-6 mr-3 ${iconClass}`} />
        <p className="font-medium">{message}</p>
      </div>
      <button onClick={handleClose} className="absolute top-1/2 right-2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:bg-slate-700">
        <XIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Toast;
