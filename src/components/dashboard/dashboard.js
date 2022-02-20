import React, { useEffect, useState } from 'react';
import './dashboard.style.scss';
import base from '../base.json';


// SVG
import SearchSvg from '../images/icon-svg/search';
import MicroSvg from '../images/icon-svg/micro';
import GroupSvg from '../images/icon-svg/group';

import LikeSvg from '../images/icon-svg/like';
import ShareSvg from '../images/icon-svg/share';
import AddListSvg from '../images/icon-svg/addList';
import MoreSvg from '../images/icon-svg/more';

// Image-video
import avatar from '../images/own-video.jpg';
import video from '../images/1.mp4';

// Import 
import StoryCards from '../storyCards/storyCards';
import VideoCards from '../videoCards/videoCards';
import AboutVideo from '../aboutVideo/aboutVideo';

// =============== Slider ===============
import slider from '../slider';

// =============== Slider Function ===============
const DashboardJs = () => {
    slider('slider-boxes');
}

const RandomNumberForVideoRedirect = () => {   
    // ========= Random Videos every refresh ===============

    // videos length from base
    const ids = [];

    // push video length in ids
    base.videos.map(e => {
        return ids.push(e.length)
    })

    // Small math operation
    let max = ids.length + 1 - ids.length;
    let min = ids.length;

    // Random Numbers
    let randomNumber_videos = Math.floor(Math.random() * (max - min + 1) + min);

    // ========= if/else statement for check redirect address  ===============

    // When pathName is zero 
    let path_name0 = window.location.pathname

    if(path_name0 === '/') {
        window.location.pathname = `/${randomNumber_videos}`;
    } 
}

RandomNumberForVideoRedirect();


const Dashboard = () => {
    useEffect(() => {
        DashboardJs();
    })

    let exactlyBase = []

    // When we want to check pathName but not as string
    let pathname = window.location.pathname;
    let appId = JSON.parse(pathname.split('/')[1]);

    base.videos.map((e) => {
        if(e._id === appId) {
            return exactlyBase.push(e);
        }
    })    


    // increase / decrease
    const [counter, setCounter] = useState(0);
    const [taggle, setTaggle] = useState(false);
        
    const incrementer = () => {
        setCounter((co) => co + 1)
    }

    const decrementer = () => {
        setCounter((co) => co - 1)
    }

    const counterFunct = () => { 
        if(taggle === false) {
            setTaggle((e) => e = true)
            incrementer();
        } else if(taggle === true) {
            setTaggle((e) => e = false)
            decrementer();
        }
    }

    return ( 
        <React.Fragment>
            <div id='dashboard-container'>
                <section className='dashboard-section'>
                    <article className='dashboard-article'>
                        <div className='container-max'>
                            <div className='searchBox'>
                                <SearchSvg />
                                <MicroSvg />
                                <input type='text' placeholder='Lofi music' className='search-primary' />
                            </div>
                        </div>
                        <div className='container-min'>
                            <div className='display-f-space-between' id='nav-end'>
                                <button className='primary-btn'>Create</button>
                                <GroupSvg />
                                <div className='avatar-box'>
                                    <img src={avatar} className='avatar-max active' alt="avatar" />
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className='dashboard-article'>
                        <div className='slider-box'>
                            <div className='title-box'>
                                <h3 className='silver'>Frequently Watched</h3>
                            </div>
                            <section className='slider-boxes display-f-start'>
                                {base.story.map(s => {
                                    return <StoryCards info={s}/>
                                })}                            
                            </section>
                        </div>
                    </article>
                    <article className='dashboard-article'>
                        <div className='main-dashboard display-f-start'>
                            <div className='display-f-column-start container-max'>
                                <div className='dashboard-container'>
                                  
                                    <div className='own-video display-f-column-start'>
                                        <video src={video} controls />
                                        <div className='video-tools display-f-space-between'>
                                            <div className='display-f-start'>
                                                <h3 className='silver'>{exactlyBase[0].views} views. {exactlyBase[0].date}</h3>
                                            </div>
                                            <div className='display-f-start tool'>
                                                <div className='display-f-start' onClick={counterFunct}>
                                                    <LikeSvg />
                                                    <span className='silver'>{counter}</span>
                                                </div>
                                                <div className='display-f-start'>
                                                    <ShareSvg />
                                                    <span className='silver'>Share</span>
                                                </div>
                                                <div className='display-f-start'>
                                                    <AddListSvg />
                                                    <span className='silver'>Save</span>
                                                </div>
                                                <div className='display-f-start'>
                                                    <MoreSvg />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='dashboard-container'>
                                    <div className='title-box'>
                                        <h3 className='silver'>Recommendations</h3>
                                    </div>
                                    <div className="slider-box">
                                        <section className='slider-boxes display-f-start'>
                                            {base.videos.map(v => {
                                                return <VideoCards info={v} />
                                            })}
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div className='display-f-column-start container-min'>
                                <AboutVideo info={exactlyBase[0]}/>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </React.Fragment>
    );
}
 
export default Dashboard;