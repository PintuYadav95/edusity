import './VideoPlayer.css'
import videoplayer from '../../assets/videoplayer.mp4'
import { useRef } from 'react'

 
const VideoPlayer = ({playState, setPlayState}) => {

       const player = useRef(null);

       const closePlayer = (e)=>{
        if(e.target === player.current){
        setPlayState(false);
       }
   
    }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
        <video src={videoplayer} autoPlay muted controls></video>
         
    </div>
  )
}

export default VideoPlayer