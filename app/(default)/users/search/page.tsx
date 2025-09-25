'use client';

import SearchInput from '@/src/core/shared/SearchInput';
import { useEffect, useState } from 'react';
import SearchList from '@/src/core/users/search/search.list';
import '@/src/styles/users/search/search.style.scss';
import { RelativeUser } from '@/src/utils/types/users/users';
import { GetSearchByName } from '@/src/api/users/search';
import { SEARCH_DEBOUNCE_TIMEOUT } from '@/src/utils/constants/users/search/general';
import { useDebounce } from '@/src/utils/hooks/shared/useDebounce';

export default function UsersSearch() {
	const [input, setInput] = useState('');
	const [searchResult, setSearchResult] = useState<RelativeUser[]>([]);

	const debouncedFunc = useDebounce(async (queue: string) => {
		setSearchResult(await GetSearchByName(queue));
	}, SEARCH_DEBOUNCE_TIMEOUT);

	useEffect(() => {
		debouncedFunc('');
	}, []);

	function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
		const nextInput = e.target.value;

		setInput(nextInput);
		debouncedFunc(nextInput);
	}

	return (
		<div className="search-page">
			<SearchInput
				title="Поиск пользователей"
				value={input}
				changeValue={onChangeInput}
				placeholder="Никнейм пользователя"
			/>
			<div className="search-title">
				По вашему запросу найдены следующие пользователи:
			</div>
			<SearchList searchResult={searchResult} />
		</div>
	);
}
