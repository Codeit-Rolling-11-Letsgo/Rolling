import '@/assets/globals.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from '@/pages/home/HomePage';
import ListPage from '@/pages/list/ListPage';
import PostPage from '@/pages/post/PostPage';
import DropDown from '@/components/common/DropDown';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/list',
		element: <ListPage />,
	},
	{
		path: '/post',
		element: <PostPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <RouterProvider router={router} /> */}
		<DropDown />
	</React.StrictMode>,
);
