import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  MeetingConsumer,
  useMeeting,
  useParticipant,
  Constants,
  usePubSub,
} from "@videosdk.live/react-sdk";
import Hls from "hls.js";

import { authToken, createMeeting } from "./hooks/API";
import ReactPlayer from "react-player";
import FlyingEmojisOverlay from "../FlyingEmojisOverlay";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import EmergencyRecordingIcon from '@mui/icons-material/EmergencyRecording';

// JoinScreen component for joining a meeting
function JoinScreen({ getMeetingAndToken, setMode }) {
  useEffect(() => {
    const generateId = async (mode = "CONFERENCE") => {
      setMode(mode);
      await getMeetingAndToken(null);
    };
    generateId();
  }, [getMeetingAndToken, setMode]);

  return <div className="container">Generating Meeting ID</div>;
}

// ParticipantView component for displaying participant's view
function ParticipantView({ participantId }) {
  const micRef = useRef(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(participantId);

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("micRef.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <div key={participantId}>
      <Grid display={"flex"} direction={"row"} gap={2}>
        <Typography> Participant: {displayName} </Typography>
        <Typography>| </Typography>
        <Typography> Webcam: {webcamOn ? "ON" : "OFF"} </Typography>
        <Typography>| </Typography>
        <Typography> Mic: {micOn ? "ON" : "OFF"}</Typography>
      </Grid>
      <audio ref={micRef} autoPlay muted={isLocal} />
      {webcamOn && (
        <ReactPlayer
          playsinline // very very important prop
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          url={videoStream}
          height={"300px"}
          width={"450px"}
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      )}
    </div>
  );
}

// Controls component for handling meeting controls
function Controls() {
  const { leave, toggleMic, toggleWebcam } = useMeeting();
  const navigate = useNavigate();

  const leaveMeeting = async () => {
    leave();
    navigate("/myAppointment");
  };

  // useEffect(() => {
  //   return {
      
  //   }
  // }, []);

  return (
    <Grid display={"flex"} direction={"row"} gap={1} sx={{ p: 1, pl: 0 }}>
      <Button
        variant="contained"
        size="medium"
        onClick={leaveMeeting}
        color="error"
      >
        Leave
      </Button>
      <Button
        variant="contained"
        size="medium"
        onClick={toggleMic}
        color="success"
      >
        Toggle Mic
      </Button>
      <Button
        variant="contained"
        size="medium"
        onClick={toggleWebcam}
        color="primary"
      >
        Toggle Webcam
      </Button>
    </Grid>
  );
}

// SpeakerView component for speaker's view
function SpeakerView({ meetingId }) {
  const { participants } = useMeeting();
  const speakers = [...participants.values()].filter(
    (participant) => participant.mode === Constants.modes.CONFERENCE
  );

  return (
    <div>
      <Controls />
      {speakers.map((participant) => (
        <ParticipantView participantId={participant.id} key={participant.id} />
      ))}
      <ViewerList />
    </div>
  );
}

// ViewerList component for listing viewers
function ViewerList() {
  const { participants } = useMeeting();

  const viewers = [...participants.values()].filter(
    (participant) => participant.mode === Constants.modes.VIEWER
  );

  return (
    <div>
      {viewers.map((participant) => (
        <ViewerListItem participantId={participant.id} key={participant.id} />
      ))}
    </div>
  );
}

// ViewerListItem component for individual viewer item
function ViewerListItem({ participantId }) {
  const { displayName } = useParticipant(participantId);
  const { publish } = usePubSub(`CHANGE_MODE_${participantId}`);

  const onClickRequestJoinLiveStream = () => {
    publish("CONFERENCE");
  };

  return (
    <div>
      {displayName}{" "}
      <button onClick={onClickRequestJoinLiveStream}>
        Request to join Livestream
      </button>
    </div>
  );
}

// ViewerView component for viewer's view
function ViewerView() {
  const playerRef = useRef(null);
  const { hlsUrls, hlsState } = useMeeting();
  const { publish } = usePubSub("REACTION");

  function sendEmoji(emoji) {
    publish(emoji);
    window.dispatchEvent(
      new CustomEvent("reaction_added", { detail: { emoji } })
    );
  }

  useEffect(() => {
    if (hlsUrls.playbackHlsUrl && hlsState === "HLS_PLAYABLE") {
      if (Hls.isSupported()) {
        const hls = new Hls({
          maxLoadingDelay: 1,
          defaultAudioCodec: "mp4a.40.2",
          maxBufferLength: 0,
          maxMaxBufferLength: 1,
          startLevel: 0,
          startPosition: -1,
          maxBufferHole: 0.001,
          highBufferWatchdogPeriod: 0,
          nudgeOffset: 0.05,
          nudgeMaxRetry: 1,
          maxFragLookUpTolerance: 0.1,
          liveSyncDurationCount: 1,
          abrEwmaFastLive: 1,
          abrEwmaSlowLive: 3,
          abrEwmaFastVoD: 1,
          abrEwmaSlowVoD: 3,
          maxStarvationDelay: 1,
        });

        let player = document.querySelector("#hlsPlayer");

        hls.loadSource(hlsUrls.playbackHlsUrl);
        hls.attachMedia(player);
      } else if (typeof playerRef.current?.play === "function") {
        playerRef.current.src = hlsUrls.playbackHlsUrl;
        playerRef.current.play();
      }
    }
  }, [hlsUrls, hlsState]);

  return (
    <div>
      <div>
        <button onClick={() => sendEmoji("confetti")}>Send 🎉 Reaction</button>

        <button onClick={() => sendEmoji("clap")}>Send 👏 Reaction</button>
      </div>
      {hlsState !== "HLS_PLAYABLE" ? (
        <div>
          <p>HLS has not started yet or is stopped</p>
        </div>
      ) : (
        <div>
          <video
            ref={playerRef}
            id="hlsPlayer"
            autoPlay
            controls
            style={{ width: "100%", height: "100%" }}
            muted
            onError={(err) => {
              console.log(err, "hls video error");
            }}
          ></video>
        </div>
      )}
    </div>
  );
}

// Container component for managing meeting state
function Container({ meetingId, onMeetingLeave }) {
  const [joined, setJoined] = useState(null);
  const { join, changeMode, localParticipant } = useMeeting({
    onMeetingJoined: () => setJoined("JOINED"),
    onMeetingLeft: onMeetingLeave,
    onParticipantModeChanged: (data) =>
      console.log("participantModeChanged", data),
    onError: (error) => alert(error.message),
    onHlsStateChanged: (data) => console.log("HLS State Changed", data),
  });

  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };

  const [joinLivestreamRequest, setJoinLivestreamRequest] = useState();

  usePubSub(`CHANGE_MODE_${localParticipant?.id}`, {
    onMessageReceived: (pubSubMessage) =>
      setJoinLivestreamRequest(pubSubMessage),
  });

  return (
    <div className="container" style={{ width: "100%" }}>
      <FlyingEmojisOverlay />
      <Typography>Meeting Id: {meetingId}</Typography>
      {joined === "JOINED" ? (
        localParticipant.mode === Constants.modes.CONFERENCE ? (
          <SpeakerView meetingId={meetingId} />
        ) : (
          localParticipant.mode === Constants.modes.VIEWER && (
            <>
              {joinLivestreamRequest && (
                <div>
                  {joinLivestreamRequest.senderName} requested you to join
                  Livestream
                  <button
                    onClick={() => {
                      changeMode(joinLivestreamRequest.message);
                      setJoinLivestreamRequest(null);
                    }}
                  >
                    Accept
                  </button>
                  <button onClick={() => setJoinLivestreamRequest(null)}>
                    Reject
                  </button>
                </div>
              )}
              <ViewerView />
            </>
          )
        )
      ) : joined === "JOINING" ? (
        <Grid
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            m: 2,
            height: { xs: "300px", md: "400px" },
            width: { xs: "360px", md: "450px" },
            backgroundColor: "black",
          }}
        >
          <Typography>Joining to the meeting...</Typography>
        </Grid>
      ) : (
        <Grid
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            m: 2,
            height: { xs: "300px", md: "400px" },
            width: { xs: "360px", md: "450px" },
            backgroundColor: "black",
          }}
        >
          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            direction={"column"}
            gap={2}
          >
            <Typography>Now You can join the meeting,</Typography>
            <Button
              onClick={joinMeeting}
              variant="contained"
              size="medium"
              color="warning"
            >
             <EmergencyRecordingIcon sx={{mr:2}}/> Start the Session
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

// Main App component
function App({ meetingIdProps ,meetingId ,setMeetingId}) {
  // const [meetingId, setMeetingId] = useState(null);
  const [mode, setMode] = useState("CONFERENCE");
  // const { leave} = useMeeting();

  const getMeetingAndToken = async (id) => {
    const meetingId =
      id == null ? await createMeeting({ token: authToken }) : id;
    setMeetingId(meetingId);
  };

  useEffect(() => {
    if (meetingIdProps?.vet?.meeting_id) {
      setMeetingId(meetingIdProps?.vet?.meeting_id);
    } else {
      setMeetingId(null);
    }
    return () =>{
      // alert();
       setMeetingId(null);
      //  leave();
    }
  }, [meetingIdProps]);

  const onMeetingLeave = () => {
    setMeetingId(null);
  };

  return authToken && meetingId ? (
    <MeetingProvider
      config={{
        meetingId,
        micEnabled: true,
        webcamEnabled: true,
        name: meetingIdProps?.vet?.has_pet?.name || "N/A",
        mode,
      }}
      token={authToken}
    >
      <MeetingConsumer>
        {() => (
          <Container meetingId={meetingId} onMeetingLeave={onMeetingLeave} />
        )}
      </MeetingConsumer>
    </MeetingProvider>
  ) : (
    <JoinScreen getMeetingAndToken={getMeetingAndToken} setMode={setMode} />
  );
}

export default App;
