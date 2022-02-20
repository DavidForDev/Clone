import React from 'react';
import './aboutVideo.style.scss';
import base from '../base.json';

import avatar from '../images/own-video.jpg';
import SortSvg from '../images/icon-svg/sort';
import UserComm from '../userCommentar/userComment';

// const exBase = [];
// const allReplyes = []

// base.map(e => {
//     if(e._id === appId) {
//        return exBase.push(e);
//     }
// }) 

// exBase[0].Comments.map(e => {
//     return allReplyes.push(e.replyes);
// })

const AboutVideo = (props) => {
    const { info } = props;

    const comments = [];
    const replyes = [];

    info.Comments.map(s => {
        return comments.push(s);
    })

    comments.map(c => {
        return replyes.push(c.replyes[0]);
    })

    return ( 
    <div className='video-description' key={info._id}>
        <div className='description-box'>
            <div className='avatar-box display-f-space-between'>
                <div className='display-f-start'>
                    <img src={avatar} className='avatar-max active' alt='avatar' />
                    <div className='channel-info'>
                        <h2 className='white'>Lofi Girl</h2>
                        <span className='silver'>9.71M Subscribers</span>
                    </div> 
                </div>
                <button className='primary-btn'>Subscribe</button>
            </div>
            <div className='video-text-description'>
                <div>
                    <p>{info.description}</p>
                </div>
                <span className='silver'>Show more</span>
            </div>
        </div>
        <div className='comment-boxes'>
            <div className='comment-head display-f-start'>
                <div>
                    <h3 className='white'>{info.Comments.length} Comments</h3>
                </div>
                <div>
                    <SortSvg />
                    <span className='white'>Sort By</span>
                </div>
            </div>
            <div className='users-comment'>
                <div className='your-comment-input'>
                    <div className='avatar-box display-f-start'>
                        <img src={avatar} className='avatar-medium active' alt='avatar' />
                        <input type='text' className='primary-input' placeholder='Add a comment' />
                    </div>
                </div>
                {info.Comments.map(c => {
                    return <UserComm comm={c} />
                })}
            </div>
        </div>
    </div>
    );
}
 
export default AboutVideo;