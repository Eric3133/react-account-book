import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import sum from '@/test';
import { RouterProvider } from 'react-router-dom';
import router from './router';

sum(1, 2); // 3
console.log(sum(1, 2));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router= {router}></RouterProvider>
);
