import React from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-md z-50">
      <div className="bg-surface rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-md border-b border-border">
          <h3 className="text-lg font-semibold text-text">{title}</h3>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text focus:outline-none"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-md">
          {children}
        </div>
      </div>
    </div>
  );
}
