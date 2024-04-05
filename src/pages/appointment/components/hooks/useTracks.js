import { useState, useEffect } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';

export const useTracks = () => {
    const [ready, setReady] = useState(false);
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        let isCancelled = false;

        AgoraRTC.createMicrophoneAndCameraTracks({}, { encoderConfig: "720p" })
            .then((gotTracks) => {
                if (!isCancelled) {
                    setTracks(gotTracks);
                    setReady(true);
                }
            })
            .catch(e => console.error('Failed to get tracks', e));

        return () => {
            tracks.forEach(track => track.close());
            isCancelled = true;
        };
    }, []);

    return { ready, tracks };
};
