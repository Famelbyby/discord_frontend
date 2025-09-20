'use client';

import SearchInput from '@/src/core/shared/SearchInput';
import { useEffect, useState } from 'react';
import '../../../../src/styles/friends.style.scss';
import SearchList from '@/src/core/friends/search.list';
import { Friend } from '@/src/utils/types/friends';
import { GetSearchByName } from '@/src/api/friends/search';

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
