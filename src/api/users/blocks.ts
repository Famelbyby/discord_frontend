import { RelativeUsersListMock } from '@/src/mocks/users/relative-users.list';
import AxiosClient from '@/src/utils/clients/axios.client';
import { BLOCKS_URL } from '@/src/utils/constants/shared/URLs/api.urls';
import { IGetBlocksResponse } from '@/src/utils/types/users/blocks/api';

export async function GetBlocks(id: string) {
	const response = await AxiosClient.get<IGetBlocksResponse>(
		`${BLOCKS_URL}/${id}`
	);

	if (response.error !== undefined) {
		return RelativeUsersListMock.filter((user) => user.isBlocked);
	}

	return response.data.blocks;
}
