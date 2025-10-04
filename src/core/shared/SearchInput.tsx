import Image from 'next/image';
import React from 'react';
import '@/src/styles/shared/search.input.style.scss';

type SearchProps = {
	title: string;
	placeholder: string;
	value: string;
	changeValue: (newValue: string) => void;
};

export default function SearchInput({
	title,
	placeholder,
	value,
	changeValue,
}: SearchProps) {
	return (
		<div className="search-wrapper">
			{title}
			<div className="search-input">
				<Image
					width={16}
					height={16}
					className="search-input__magnifier"
					src="/shared/magnifier.png"
					alt=""
				/>
				<input
					className="search-input__input"
					type="text"
					value={value}
					onChange={(e) => changeValue(e.target.value)}
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
}
