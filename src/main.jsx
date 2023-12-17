import '@/assets/globals.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { getMessageList } from '@/apis/post/postAPI';
import HomePage from '@/pages/home/HomePage';
import ListPage from '@/pages/list/ListPage';
import PostIdPage from '@/pages/post/PostIdPage';

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
		path: '/post/:recipientId',
		element: <PostIdPage />,
		loader: ({ params }) =>
			getMessageList({
				recipientId: params.recipientId,
				limit: 15,
			}),
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
