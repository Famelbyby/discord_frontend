'use client';

import SearchInput from "@/src/core/shared/SearchInput";
import { useState } from "react";

export default function FriendsSearch() {
    const [input, setInput] = useState('');

    return (
        <div className="search-page">
            <SearchInput title="Поиск пользователей" value={input} changeValue={(value: string) => setInput(value)} placeholder="Никнейм пользователя" />
                
        </div>
    );
}