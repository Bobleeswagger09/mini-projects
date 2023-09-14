import { useState } from "react";
import Menu from './Menu';
import Video from './Video';

const videos = {
  deer:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
};


const videoValues = Object.keys(videos);

const App = () => {
  const [videoSrc, setVideoSrc] = useState(videos.snail);

  function onSelectVideo(video){
    const videoSrc = videos[video]
    setVideoSrc(videoSrc);
  }

  return (
    <>
      <Menu onSelectVideo={onSelectVideo} videoValues={videoValues}/>
      <Video videoSrc={videoSrc} />
    </>
  );
}
 
export default App;