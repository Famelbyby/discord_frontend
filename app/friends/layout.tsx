'use client';

import { useState } from "react";
import FriendsHeader from "./ui/header"
import { HeaderTitle } from "../utils/friends/types";

export default function FriendsLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const [selectedItem, chooseItem] = useState<HeaderTitle>('Поиск');

    return (
        <div className="friends-layout">
            <FriendsHeader selectedItem={selectedItem} chooseItem={chooseItem} />
            {children}
        </div>
    )
}