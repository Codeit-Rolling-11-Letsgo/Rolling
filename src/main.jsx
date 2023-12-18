import '@/assets/globals.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { getMessageList } from '@/apis/post/postAPI';
import { getRecipientList } from '@/apis/recipients/recipientsAPI';
import { ModalProvider } from '@/contexts/ModalContext';
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
		loader: async ({ params }) => {
			const [{ messageListInfo }] = await Promise.all([
				getMessageList({
					recipientId: params.recipientId,
					limit: 15,
				}),
			]);

			return {
				recipientId: params.recipientId,
				messageListInfo,
			};
		},
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ModalProvider>
			<RouterProvider router={router} />
		</ModalProvider>
	</React.StrictMode>,
);
