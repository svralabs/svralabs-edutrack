import React from 'react';
export default function MyOrders({ children }) {
  return <div className='p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700'>{children || 'MyOrders.module.css'}</div>;
}
