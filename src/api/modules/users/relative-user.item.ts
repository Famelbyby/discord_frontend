import AxiosClient from '@/src/utils/clients/axios.client';
import {
	BLOCKS_URL,
	FRIENDS_URL,
	INCOMING_URL,
	OUTCOMING_URL,
} from '@/src/utils/constants/shared/URLs/api.urls';
import {
	IBlockRequest,
	IFriendRequest,
} from '@/src/utils/types/users/relative-user.item';

export async function ConfirmIncoming(id: string, friendId: string) {
	const response = await AxiosClient.post<boolean, IFriendRequest>(
		`${INCOMING_URL}/${id}/accept`,
		{
			friendId,
		}
	);

	return response.error === undefined;
}

export async function RejectIncoming(id: string, friendId: string) {
	const response = await AxiosClient.post<boolean, IFriendRequest>(
		`${INCOMING_URL}/${id}/decline`,
		{
			friendId,
		}
	);

	return response.error === undefined;
}

export async function AddFriend(id: string, friendId: string) {
	const response = await AxiosClient.post<boolean, IFriendRequest>(
		`${FRIENDS_URL}/${id}`,
		{
			friendId,
		}
	);

	return response.error === undefined;
}

export async function DeleteFriend(id: string, friendId: string) {
	const response = await AxiosClient.delete<boolean>(
		`${FRIENDS_URL}/${id}?friendId=${friendId}`
	);

	return response.error === undefined;
}

export async function CancelOutcoming(id: string, friendId: string) {
	const response = await AxiosClient.delete<boolean>(
		`${OUTCOMING_URL}/${id}?friendId=${friendId}`
	);

	return response.error === undefined;
}

export async function BlockProfile(id: string, profileId: string) {
	const response = await AxiosClient.post<boolean, IBlockRequest>(
		`${BLOCKS_URL}/${id}`,
		{
			profileId,
		}
	);

	return response.error === undefined;
}

export async function UnblockProfile(id: string, profileId: string) {
	const response = await AxiosClient.delete<boolean>(
		`${BLOCKS_URL}/${id}?profileId=${profileId}`
	);

	return response.error === undefined;
}
