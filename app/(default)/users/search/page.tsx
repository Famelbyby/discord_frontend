'use client';

import SearchInput from '@/src/core/shared/SearchInput';
import { useEffect, useState } from 'react';
import SearchList from '@/src/core/users/search/search.list';
import '@/src/styles/users/search/search.style.scss';
import { RelativeUser } from '@/src/utils/types/users/users';
import { GetSearchByName } from '@/src/api/users/search';

export default function UsersSearch() {
	const [input, setInput] = useState('');
	const [searchResult, setSearchResult] = useState<RelativeUser[]>([]);

	useEffect(() => {
		updateSearchResult('');
	}, []);

	async function updateSearchResult(queue: string) {
		setSearchResult(await GetSearchByName(queue));
	}

	function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
		const nextInput = e.target.value;

		setInput(nextInput);
		updateSearchResult(nextInput);
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
