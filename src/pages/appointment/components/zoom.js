import React, { useEffect } from 'react';
// import { ZoomMtg } from '@zoomus/websdk';

const ZoomMeeting = () => {
//   useEffect(() => {
//     async function fetch() {
//         ZoomMtg.setZoomJSLib('http://source.zoom.us/1.9.0/lib', '/av');
//         ZoomMtg.preLoadWasm();
//         ZoomMtg.prepareJssdk();
//         ZoomMtg.generateSDKSignature({
//             meetingNumber:87607934234,
//             role:0,
//             sdkKey:'pAgLYDLaTLmedWeasTZKw',
//             sdkSecret:'v9IR4ahqffZQHHM54k9h1jSOvKiEQbXD',
//             success:function(signature) {
//                 console.log(signature);
//                 // ZoomMtg.init({
//                 //           leaveUrl: 'http://localhost:3000',
//                 //           success: function() {
//                 //             ZoomMtg.join({
//                 //               meetingNumber:87607934234,
//                 //               signature: signature.result,
//                 //               userName:'test',
//                 //               userEmail:'dev.chathurangs@gmail.com',
//                 //               passWord:'3ZqT13',
//                 //               tk:'',
//                 //               success: (success) => {
//                 //                 console.log('joined',success);
//                 //               },
//                 //               error: (error) => {
//                 //                 console.error('heee',error);
//                 //               }
//                 //             });
//                 //           },
//                 //           error: function(res) {
//                 //             console.error(res);
//                 //           }
//                 // })
//             }

//         })
//     }
//     // fetch();
//     // ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.0/lib', '/av');
//     // ZoomMtg.preLoadWasm();
//     // ZoomMtg.prepareJssdk();

//     // const meetConfig = {
//     //   apiKey: 'YOUR_API_KEY',
//     //   meetingNumber: 'MEETING_NUMBER',
//     //   userName: 'YOUR_NAME',
//     //   passWord: 'MEETING_PASSWORD',
//     //   // Add more configurations as needed
//     // };

//     // ZoomMtg.init({
//     //   leaveUrl: 'http://localhost:3000',
//     //   isSupportAV: true,
//     //   success: function() {
//     //     ZoomMtg.join({
//     //       ...meetConfig,
//     //       signature: 'GENERATED_SIGNATURE',
//     //       apiKey: meetConfig.apiKey,
//     //       success: (success) => {
//     //         console.log(success);
//     //       },
//     //       error: (error) => {
//     //         console.error(error);
//     //       }
//     //     });
//     //   },
//     //   error: function(res) {
//     //     console.error(res);
//     //   }
//     // });
//   }, []);

  return (
    <></>
    // <div id="zmmtg-root" ></div>
  );
};

export default ZoomMeeting;
