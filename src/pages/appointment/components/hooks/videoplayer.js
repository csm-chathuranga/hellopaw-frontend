import React, { useEffect, useRef } from 'react';

const AgoraVideoPlayer = ({ videoTrack, uid }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current && videoTrack) {
            videoTrack.play(videoRef.current);
        }

        return () => {
            videoTrack && videoTrack.stop();
        };
    }, [videoTrack]);

    return <div ref={videoRef} id={`video-${uid}`} style={{ width: '320px', height: '240px' }}></div>;
};

export default AgoraVideoPlayer;
