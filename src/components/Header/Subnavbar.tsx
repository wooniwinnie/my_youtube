import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// 배열 제네릭
type SubMenu = Array<{
    id: string;
    text: string;
}>;

const Subnavbar = () => {
    const [subMenu, setSubMenu] = useState<SubMenu>(initialValue);
    return (
        <ul className='flex px-24 mt-5'>
            {subMenu.map((m) => (
                <button className='px-6' key={m.id}>
                    {m.text}
                </button>
            ))}
        </ul>
    );
};

export const initialValue: SubMenu = [
    {
        id: '1',
        text: '전체',
    },
    {
        id: '2',
        text: '음악',
    },
    {
        id: '3',
        text: '실시간',
    },
    {
        id: '4',
        text: '게임',
    },
    {
        id: '5',
        text: '축구',
    },
    {
        id: '6',
        text: '요리',
    },
    {
        id: '7',
        text: '만화 영화',
    },
    {
        id: '8',
        text: '액션 어드벤처 게임',
    },
    {
        id: '9',
        text: '최근에 업로드된 동영상',
    },
];

export default Subnavbar;
