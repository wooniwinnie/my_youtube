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
        <div className='w-screen mt-20'>
            {data.map((item) => (
                <div>
                    <button>
                        <img
                            style={{
                                width: item.snippet.thumbnails.medium.width,
                            }}
                            src={item.snippet.thumbnails.default.url}
                            alt=''
                        />
                        <h3>{item.snippet.title}</h3>
                        <p>{item.snippet.channelTitle}</p>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Videocards;
