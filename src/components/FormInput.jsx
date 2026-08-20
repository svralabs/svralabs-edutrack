import React from 'react';

export default function FormInput({ label, type = 'text', name, value, onChange, placeholder, error, required = false }) {
  return (
    <div className="mb-md">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-text mb-xs">
          {label} {required && <span className="text-error">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-md py-sm border rounded-md text-text placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${error ? 'border-error' : 'border-border'}`}
      />
      {error && <p className="mt-xs text-sm text-error">{error}</p>}
    </div>
  );
}
