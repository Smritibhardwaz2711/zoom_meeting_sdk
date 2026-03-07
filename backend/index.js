// import express from "express";
// import cors from "cors";
// import base64 from "base-64";
// // import fetch from "node-fetch"; // Uncomment if Node < 18

// const app = express();
// app.use(cors());
// app.use(express.json());

// // 🔐 ZOOM CREDENTIALS (move to .env in real apps)
// const zoomAccountId = "B1O_3eV_RuaBHfKsAmtlfg";
// const zoomClientId = "Xo53E8RRCKneLvrHEDTNQ";
// const zoomClientSecret = "M1YN8Je1UEP8XC0QXnXd28XRg6zfR0Lj";

// // 🔑 AUTH HEADER
// const getAuthHeaders = () => ({
//   Authorization: `Basic ${base64.encode(
//     `${zoomClientId}:${zoomClientSecret}`
//   )}`,
//   "Content-Type": "application/json",
// });

// // 🔐 ACCESS TOKEN
// const generateZoomAccessToken = async () => {
//   const res = await fetch(
//     `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${zoomAccountId}`,
//     { method: "POST", headers: getAuthHeaders() }
//   );

//   const data = await res.json();
//   return data.access_token;
// };

// // 🎥 CREATE MEETING
// const generateZoomMeeting = async () => {
//   const token = await generateZoomAccessToken();

//   const res = await fetch("https://api.zoom.us/v2/users/me/meetings", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       topic: "React Start Meeting",
//       type: 2,
//       duration: 60,
//       timezone: "Asia/Kolkata",
//       password: "12345",
//       settings: {
//         join_before_host: true,
//         waiting_room: false,
//         host_video: true,
//         participant_video: true,
//       },
//     }),
//   });

//   return await res.json();
// };

// // 🚀 API ENDPOINT
// app.post("/start-meeting", async (req, res) => {
//   try {
//     const meeting = await generateZoomMeeting();
//     res.json(meeting);
//   } catch (err) {
//     res.status(500).json({ error: "Zoom meeting failed" });
//   }
// });

// // ▶️ START SERVER
// app.listen(5555, () =>
//   console.log("Backend running on http://localhost:5555")
// );




// import express from "express";
// import cors from "cors";
// import base64 from "base-64";
// import multer from "multer";
// import { uploadStudents } from "./uploadStudents.js";

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ==========================
// // 🔐 ZOOM CONFIG
// // ==========================
// const zoomAccountId = "B1O_3eV_RuaBHfKsAmtlfg";
// const zoomClientId = "Xo53E8RRCKneLvrHEDTNQ";
// const zoomClientSecret = "M1YN8Je1UEP8XC0QXnXd28XRg6zfR0Lj";

// const getAuthHeaders = () => ({
//   Authorization: `Basic ${base64.encode(
//     `${zoomClientId}:${zoomClientSecret}`
//   )}`,
//   "Content-Type": "application/json",
// });

// const generateZoomAccessToken = async () => {
//   const res = await fetch(
//     `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${zoomAccountId}`,
//     { method: "POST", headers: getAuthHeaders() }
//   );
//   const data = await res.json();
//   return data.access_token;
// };

// const generateZoomMeeting = async () => {
//   const token = await generateZoomAccessToken();

//   const res = await fetch("https://api.zoom.us/v2/users/me/meetings", {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       topic: "Automated Group Discussion",
//       type: 2,
//       duration: 60,
//       timezone: "Asia/Kolkata",
//       password: "12345",
//       settings: {
//         join_before_host: true,
//         waiting_room: false,
//         host_video: true,
//         participant_video: true,
//       },
//     }),
//   });

//   return await res.json();
// };

// // ==========================
// // 🎥 START MEETING API
// // ==========================
// app.post("/start-meeting", async (req, res) => {
//   try {
//     const meeting = await generateZoomMeeting();
//     res.json(meeting);
//   } catch (error) {
//     res.status(500).json({ message: "Zoom meeting failed" });
//   }
// });

// // ==========================
// // 📤 UPLOAD STUDENTS API
// // ==========================
// const upload = multer({ dest: "uploads/" });

// app.post(
//   "/upload-students",
//   upload.single("file"),
//   uploadStudents
// );

// // ==========================
// app.get("/", (req, res) => {
//   res.send("Backend running successfully");
// });

// app.listen(5555, () => {
//   console.log("Backend running on http://localhost:5555");
// });





























import express from "express";
import cors from "cors";
import base64 from "base-64";
import multer from "multer";
import { uploadStudents } from "./uploadStudents.js";

const app = express();
app.use(cors());
app.use(express.json());

// ==========================
// 🔐 ZOOM CONFIG
// ==========================
const zoomAccountId = "B1O_3eV_RuaBHfKsAmtlfg";
const zoomClientId = "Xo53E8RRCKneLvrHEDTNQ";
const zoomClientSecret = "M1YN8Je1UEP8XC0QXnXd28XRg6zfR0Lj";

const getAuthHeaders = () => ({
  Authorization: `Basic ${base64.encode(
    `${zoomClientId}:${zoomClientSecret}`
  )}`,
  "Content-Type": "application/json",
});

const generateZoomAccessToken = async () => {
  const res = await fetch(
    `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${zoomAccountId}`,
    { method: "POST", headers: getAuthHeaders() }
  );
  const data = await res.json();
  return data.access_token;
};

const generateZoomMeeting = async () => {
  const token = await generateZoomAccessToken();

  const res = await fetch("https://api.zoom.us/v2/users/me/meetings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      topic: "Automated Group Discussion",
      type: 2,
      duration: 60,
      timezone: "Asia/Kolkata",
      password: "12345",
      settings: {
        join_before_host: true,
        waiting_room: false,
        host_video: true,
        participant_video: true,
      },
    }),
  });

  return await res.json();
};

// ==========================
// 🎥 START MEETING API
// ==========================
app.post("/start-meeting", async (req, res) => {
  try {
    const meeting = await generateZoomMeeting();
    res.json(meeting); // contains start_url
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Zoom meeting failed" });
  }
});

// ==========================
// 📤 UPLOAD STUDENTS API
// ==========================
const upload = multer({ dest: "uploads/" });

app.post(
  "/upload-students",
  upload.single("file"),
  uploadStudents
);

// ==========================
app.get("/", (req, res) => {
  res.send("Backend running successfully");
});

app.listen(5555, () => {
  console.log("Backend running on http://localhost:5555");
});
