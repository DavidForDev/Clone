import React from 'react';
import './videoCards.style.scss';

//Image

import img from '../images/chose-video-1.png'

const VideoCards = (props) => {
    const { info } = props;
    return ( 
        <article className='video-article-container' key={info._id}>
            <a href={info._id} alt='videoLink'>
                <div className='video-article-box'>
                    <div className='video-image'>
                        <img src={img} alt='video-img' />
                        <div className='time-box'>
                            <span className='white'>{info.time}</span>
                        </div>
                    </div>
                    <div className='video-title'>
                        <h3 className='white'>{info.name}</h3>
                    </div>
                </div>
                <div className='video-article-box'>
                    <div className='avatar-box display-f-start'>
                        <img src={img} className='avatar-min active' alt='avatar' />
                        <div className='channel-info'>
                            <h3 className='white'>Lofi Girl</h3>
                            <span className='silver'>{info.views} views. 2 Weeks Ago</span>
                        </div>
                    </div>
                </div>
            </a>
        </article>
    )
}
 
export default VideoCards;