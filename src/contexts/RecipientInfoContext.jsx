import { createContext } from 'react';

export const RecipientInfoContext = createContext();

export function RecipientInfoProvider({ recipientInfo, children }) {
	return (
		<RecipientInfoContext.Provider value={recipientInfo}>
			{children}
		</RecipientInfoContext.Provider>
	);
}
