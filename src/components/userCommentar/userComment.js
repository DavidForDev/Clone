import React from 'react';
import '../userCommentar/userComm.style.scss';

import avatar from '../images/own-video.jpg';

// Svg

import LikeSvg from '../images/icon-svg/like';
import DeslikeSvg from '../images/icon-svg/deslike';

const UserComm = (props) => {
    const { comm } = props;
    const reply = comm.replyes;
    return ( 
        <React.Fragment>
            <div className='comment-box' key={comm.userName}>
                <div className='comm-box'>
                    <div className='avatar-box display-f-start'>
                        <img src={avatar} className='avatar-medium active' alt='avatar' />
                    </div>
                    <div className='user-info'>
                        <div className='user-detail'>
                            <h3 className='white'>{comm.userName}</h3>
                            <p className='silver'>{comm.comm}</p>
                        </div>
                        <div className='tools display-f-start'>
                            <div className='display-f-start'>
                                <LikeSvg />
                                <span className='silver'>30</span>
                            </div>
                            <div className='display-f-start'>
                                <DeslikeSvg />
                            </div>
                            <div className='display-f-start'>
                                <span className='silver'>Reply</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='reply-boxes'>
                    {reply.length > 0 ? reply.map(e => {
                        return (
                        <div className='comm-box comm-reply' key={e.reply}>
                            <div className='avatar-box display-f-start'>
                                <img src={avatar} className='avatar-medium active' alt='avatar' />
                            </div>
                            <div className='user-info'>
                                <div className='user-detail'>
                                    <h3 className='white'>Jack Brown</h3>
                                    <p className='silver'>{e.reply}</p>
                                </div>
                                <div className='tools display-f-start'>
                                    <div className='display-f-start'>
                                        <LikeSvg />
                                        <span className='silver'>30</span>
                                    </div>
                                    <div className='display-f-start'>
                                        <DeslikeSvg />
                                    </div>
                                    <div className='display-f-start'>
                                        <span className='silver'>Reply</span>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        )
                    }): console.log('no replyes')}
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default UserComm;