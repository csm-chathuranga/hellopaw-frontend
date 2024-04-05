import React, { useEffect } from 'react';

const JitsiComponent = () => {
  const loadJitsiScript = () => {
    const script = document.createElement('script');
    script.src = 'https://meet.jit.si/external_api.js';
    script.async = true;
    script.onload = () => initJitsi();
    document.body.appendChild(script);
  };

  useEffect(() => {
    if (!window.JitsiMeetExternalAPI) {
      loadJitsiScript();
    } else {
      initJitsi();
    }
  }, []);

  const initJitsi = () => {
    const domain = 'meet.jit.si';
    const options = {
      roomName: 'YourRoomName',
      width: '100%',
      height: 700,
      parentNode: document.querySelector('#jitsi-container'),
      interfaceConfigOverwrite: {
        // Add any interface configuration overrides here
      },
      configOverwrite: {
        // Add any config overrides here
      },
    };

    new window.JitsiMeetExternalAPI(domain, options);
  };

  return <div id="jitsi-container" style={{ width: '100%', height: '700px' }}></div>;
};

export default JitsiComponent;
