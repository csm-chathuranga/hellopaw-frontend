export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJiNTgzMGE0Mi1kZWJkLTQyMmMtYTEzYS1hZmI4ZGY4MzM2OTciLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxMjMwMTM4NiwiZXhwIjoxNzI3ODUzMzg2fQ.UPzYvp5fQEtOEWONiucZh_1vuasqW0z-0ddZfPyUcxk";

// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};

export const captureHLSThumbnail = async ({ roomId }) => {
  const res = await fetch(`https://api.videosdk.live/v2/hls/capture`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ roomId: roomId }),
  });

  const data = await res.json();
  return data;
};
