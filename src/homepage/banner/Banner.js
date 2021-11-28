import React from 'react';
import './banner.css';
import un from '../../assets/img/un.png';
import banner from '../../assets/img/banner.png';
import videoBanner from '../../assets/img/b.mp4'


function Banner (){
    return(
        // <div className="main_content">
    <div className="banner">
        <div className="banner_top">
            <img src={un} alt="top" />
        </div>
        <video className="video" width="100%" height="100%" src={videoBanner}
               poster={banner}>
        </video>
        <button className="play_button" onClick={()=> {playVideo()}}>►</button>
    </div>
//    </div> 

    )
}

const playVideo = () => {

    const videoPlayer = document.querySelector('.banner');
    const video = videoPlayer.querySelector('.video');
    const playButton = videoPlayer.querySelector('.play_button');

    playButton.addEventListener('click', (e) => {
        if (video.paused) {
            video.play();
            e.target.textContent = '❚ ❚';
            e.target.style = "font-size:28px";
            e.target.style = "color:#fff";

        } else {
            video.pause();
            e.target.textContent = '►';
            e.target.style = "font-size:28px";
            e.target.style = "color:#fff";
        }
    })
}

// playVideo();

export default Banner;