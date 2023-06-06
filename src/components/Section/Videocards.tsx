import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type VideoItem = {
    kind: string;
    etag: string;
    id: string;
    snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
            default: {
                url: string;
                width: number;
                height: number;
            };
            medium: {
                url: string;
                width: number;
                height: number;
            };
            high: {
                url: string;
                width: number;
                height: number;
            };
            standard: {
                url: string;
                width: number;
                height: number;
            };
            maxres: {
                url: string;
                width: number;
                height: number;
            };
        };
        channelTitle: string;
        categoryId: string;
        liveBroadcastContent: string;
        localized: {
            title: string;
            description: string;
        };
        defaultAudioLanguage: string;
    };
};

const Videocards = (): JSX.Element => {
    const [data, setData] = useState<VideoItem[]>([]);
    useEffect(() => {
        fetch(`videos/popular.json`)
            .then((res) => res.json())
            .then((data) => {
                const dataItem = data.items;
                setData(dataItem);
            })
            .catch((error) => {
                console.log('에러가 발생했어요', error);
            });
    }, []);

    return (
        <div>
            {data.map((item) => (
                <div>
                    <img
                        src='https://images.unsplash.com/photo-1686007579079-550a74a0decb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
                        alt=''
                    />
                    <h3>{item.snippet.title}</h3>
                    <p>{item.snippet.channelTitle}</p>
                </div>
            ))}
        </div>
    );
};

export default Videocards;
