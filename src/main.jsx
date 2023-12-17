import '@/assets/globals.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { getMessageList } from '@/apis/post/postAPI';
import { getRecipientList } from '@/apis/recipients/recipientsAPI';
import HomePage from '@/pages/home/HomePage';
import ListPage from '@/pages/list/ListPage';
import Post from '@/pages/post/Post';
import PostIdPage from '@/pages/post/PostIdPage';
import PostMessage from '@/pages/PostIdMessage/PostMessage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: '/list',
		element: <ListPage />,
		loader: async () => {
			const [
				{ results: popularRecipientList },
				{ results: recentRecipientList },
			] = await Promise.all([
				getRecipientList({ limit: 12, sort: 'like' }),
				getRecipientList({ limit: 12 }),
			]);

			return { popularRecipientList, recentRecipientList };
		},
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
