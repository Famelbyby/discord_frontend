import Image from 'next/image';
import React from 'react';

type SearchProps = {
	title: string;
	placeholder: string;
	value: string;
	changeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
					onChange={changeValue}
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
}
