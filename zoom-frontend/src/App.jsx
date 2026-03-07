import axios from "axios";
import "./App.css";
import meetingImage from "./assets/meeting.png";

function App() {

  const uploadExcel = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://localhost:5555/upload-students",
        formData
      );
      alert(res.data.message);
    } catch {
      alert("Upload failed");
    }
  };

  const startMeeting = async () => {
    try {
      const res = await axios.post("http://localhost:5555/start-meeting");
      window.open(res.data.start_url, "_blank");
    } catch {
      alert("Failed to start meeting");
    }
  };

  return (
    <div className="page">

      {/* 🔝 HEADER */}
      <header className="header">
        <h1>Automated Group Discussion Scoring System</h1>
        <p>AI-powered Zoom meeting evaluation & participant analysis</p>
      </header>

      {/* 🔽 MAIN SECTION */}
      <div className="content">

        {/* LEFT SIDE */}
        <div className="left-panel">
          <p className="upload-text">Upload Student Excel / CSV</p>

          <label className="file-box">
            📁 Choose File
            <input
              type="file"
              accept=".xlsx,.csv"
              onChange={uploadExcel}
            />
          </label>

          <button className="start-btn" onClick={startMeeting}>
             Start Meeting Here -&gt;  
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="right-panel">
          <img src={meetingImage} alt="Meeting" />
        </div>

      </div>
    </div>
  );
}

export default App;
