import Image from "next/image";
import React from "react";

type SearchProps = {
    title: string;
    placeholder: string;
    value: string;
    changeValue: (value: string) => void;
}

export default function SearchInput({title, placeholder, value, changeValue}: SearchProps) {
    function onChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
        changeValue(event.target.value);
    }

    function heh(){

    }

    const a = '2';

    return (
        <div className="search-wrapper">
            {title}
            <div className="search-input">
                <Image className="search-input__magnifier" src="/shared/magnifier.png" alt="" />
                <input className="search-input__input" type="text" value={value} onChange={onChangeInput} placeholder={placeholder} />
            </div>
        </div>
    )
}