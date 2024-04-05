import React, { useState, useEffect, useRef } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';

const appId = '3290756f0fb24e77bf028d21482bb248';
const token = '007eJxTYAhN2n/O4ZuP2+zUPKMy2cyUW4917Rt4TbSDWy6vNzz+sUSBwdjI0sDc1CzNIC3JyCTV3DwpzcDIIsXI0MTCKAkoYvGxlD+tIZCRwS61mpWRAQJBfFaGxPT8okQGBgD/vx39';
const channel = 'agora';

const VideoCall = () => {
  const [client, setClient] = useState(null);
  const [localAudioTrack, setLocalAudioTrack] = useState(null);
  const [localVideoTrack, setLocalVideoTrack] = useState(null);
  const [remoteUsers, setRemoteUsers] = useState([]);
  
  const localVideoRef = useRef(null);
  const remoteVideoRefs = useRef({});

  useEffect(() => {
    let ignore = false;

    const initClient = async () => {
      const agoraClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
      setClient(agoraClient);
      agoraClient.on('user-published', async (user, mediaType) => {
        await agoraClient.subscribe(user, mediaType);
        if (mediaType === 'video') {
          if (!ignore) {
            setRemoteUsers(prevUsers => [...prevUsers, user]);
          }
        }
        if (mediaType === 'audio') {
          user.audioTrack.play();
        }
      });

      agoraClient.on('user-unpublished', user => {
        if (!ignore) {
          setRemoteUsers(prevUsers => prevUsers.filter(prevUser => prevUser.uid !== user.uid));
        }
      });

      agoraClient.on('user-left', user => {
        if (!ignore) {
          setRemoteUsers(prevUsers => prevUsers.filter(prevUser => prevUser.uid !== user.uid));
        }
      });

      await agoraClient.join(appId, channel, token, null);
      const audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
      const videoTrack = await AgoraRTC.createCameraVideoTrack();
      setLocalAudioTrack(audioTrack);
      setLocalVideoTrack(videoTrack);

      await agoraClient.publish([audioTrack, videoTrack]);
    };

    initClient().catch(console.error);

    const timer = setTimeout(() => {
      if (client) {
        ignore = true;
        client.leave().then(() => {
          localAudioTrack?.close();
          localVideoTrack?.close();
          setRemoteUsers([]);
          console.log('Session ended after 10 minutes');
        }).catch(console.error);
      }
    }, 600000); // End call after 10 minutes

    return () => {
      clearTimeout(timer);
      ignore = true;
      localAudioTrack?.close();
      localVideoTrack?.close();
      client?.leave().catch(console.error);
    };
  }, []);

  useEffect(() => {
    if (localVideoTrack && localVideoRef.current) {
      localVideoTrack.play(localVideoRef.current);
    }
  }, [localVideoTrack]);

  useEffect(() => {
    remoteUsers.forEach((user) => {
      if (user.videoTrack && remoteVideoRefs.current[user.uid]) {
        user.videoTrack.play(remoteVideoRefs.current[user.uid]);
      }
    });
  }, [remoteUsers]);

  return (
    <div className="video-call-container">
      <div ref={localVideoRef} style={{ width: '320px', height: '240px', margin: '0 auto' }}></div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {remoteUsers.map((user) => (
          <div key={user.uid} style={{ width: '320px', height: '240px', margin: '10px' }}
               ref={(el) => (remoteVideoRefs.current[user.uid] = el)}></div>
        ))}
      </div>
    </div>
  );
};

export default VideoCall;
