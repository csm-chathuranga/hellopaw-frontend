import { useState, useEffect } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';

export const useClient = () => {
    const [client, setClient] = useState(null);

    useEffect(() => {
        const initClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
        setClient(initClient);
    }, []);

    return client;
};
