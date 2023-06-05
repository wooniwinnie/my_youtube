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

const Videocards = () => {
    const [videos, setVideos] = useState<VideoItem[]>([]);
    useEffect(() => {
        fetch(`videos/popular.json`)
            .then((res) => res.json())
            .then((data) => {
                const videoItem: VideoItem[] = data.items.map(
                    (item: any) => item.snippet
                );
                setVideos(videoItem);
                console.log(videoItem);
                // const videoSnippets = videoItem.map((item) => item.snippet);
                // setVideos(videoSnippets);
            });
    }, []);
    return (
        <div>
            {videos.map((video) => (
                <div key={uuidv4()}>
                    <img src='' alt='' />
                    <h2></h2>
                    <p></p>
                </div>
            ))}
        </div>
    );
};

export default Videocards;
