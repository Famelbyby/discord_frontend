export type FriendsHeaderTitle =
    | 'Поиск'
    | 'Друзья'
    | 'Входящие заявки'
    | 'Исходящие заявки';

export type Friend = {
    id: string;
    avatar: string;
    name: string;
    isFriend: boolean;
    isIncoming: boolean;
    isOutcoming: boolean;
    isBlocked: boolean;
};
