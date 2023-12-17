import '@/assets/globals.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { getMessages } from '@/apis/post/postAPI';
import HomePage from '@/pages/home/HomePage';
import ListPage from '@/pages/list/ListPage';
import Post from '@/pages/post/Post';
import PostPage from '@/pages/post/PostPage';
import PostMessage from '@/pages/PostIdMessage/PostMessage';

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
		path: '/post',
		element: <Post />,
	},
	{
		path: '/postMessage',
		element: <PostMessage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
