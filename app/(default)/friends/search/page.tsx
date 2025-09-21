'use client';

import SearchInput from '@/src/core/shared/SearchInput';
import { useEffect, useState } from 'react';
import SearchList from '@/src/core/friends/search.list';
import { Friend } from '@/src/utils/types/friends/friends';
import { GetSearchByName } from '@/src/api/friends/search';
import '@/src/styles/friends/friends.search.style.scss';

export default function FriendsSearch() {
	const [input, setInput] = useState('');
	const [searchResult, setSearchResult] = useState<Friend[]>([]);

	useEffect(() => {
		GetSearchByName('', (result: Friend[] | undefined) => {
			if (result !== undefined) {
				setSearchResult(result);
			}
		});
	}, []);

	function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
		const nextInput = e.target.value;

		setInput(nextInput);
		GetSearchByName(nextInput, (result: Friend[] | undefined) => {
			if (result !== undefined) {
				setSearchResult(result);
			}
		});
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
