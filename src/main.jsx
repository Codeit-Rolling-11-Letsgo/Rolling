import '@/assets/globals.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { getMessages } from '@/apis/post/postAPI';
import HomePage from '@/pages/home/HomePage';
import ListPage from '@/pages/list/ListPage';
import PostForm from '@/pages/post/postForm/postForm';
import PostPage from '@/pages/post/PostPage';

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
				limit: 5,
			}),
	},
	{
		path: '/postForm',
		element: <PostForm />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
