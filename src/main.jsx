import '@/assets/globals.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { getMessages } from '@/apis/post/postAPI';
import HomePage from '@/pages/home/HomePage';
import ListPage from '@/pages/list/ListPage';
import PostPage from '@/pages/post/PostPage';
import { getLimitByResolution } from '@/utils/commonUtils';

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
		element: <PostPage />,
		loader: ({ params }) =>
			getMessages({
				recipientId: params.recipientId,
				limit: getLimitByResolution(),
			}),
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
