import React, { useState } from "react";
import YouTube from "react-youtube";
import youtubeDl from "youtube-dl";

const Soundboard: React.FC = () => {
  const [videoId, setVideoId] = useState("");
  const [startTime, setStartTime] = useState(0);

  const handleVideoSelect = (event: any) => {
    setVideoId(event.target.value);
  };

  const handleStartTimeSelect = (event: any) => {
    setStartTime(parseInt(event.target.value));
  };

  const handleDownload = () => {
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    const options = {
      extractAudio: true,
      audioFormat: "mp3",
      startTime: startTime,
      duration: 5,
    };

    youtubeDl.exec(videoUrl, options, (err: any, output: any) => {
      if (err) {
        console.error(err);
      } else {
        const mp3Url = output[0].filename;
        // Implement the logic to provide the mp3 file download link to the user
      }
    });
  };

  return (
    <div>
      <h1>Soundboard App</h1>
      <label htmlFor="videoId">YouTube Video ID:</label>
      <input type="text" id="videoId" onChange={handleVideoSelect} />
      <br />
      <label htmlFor="startTime">Start Time (in seconds):</label>
      <input type="number" id="startTime" onChange={handleStartTimeSelect} />
      <br />
      <button onClick={handleDownload}>Download</button>
      <br />
      {videoId && (
        <YouTube videoId={videoId} opts={{ width: "640", height: "360" }} />
      )}
    </div>
  );
};

export default Soundboard;
