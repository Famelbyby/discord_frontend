import { create } from 'zustand';
import { UserAction, UserState } from '../utils/types/stores/user';
import { INITIAL_USER_STORE } from '../utils/constants/stores/user';

export const useUserStore = create<UserState & UserAction>()(
	(set, get, store) => ({
		...INITIAL_USER_STORE,
		updateUser: (newUser) => {
			set(() => ({ ...newUser }));
		},
		resetUser: () => {
			set(store.getInitialState());
		},
	})
);
