import './navBar.style.scss';

// SVG
import LogoSvg from '../images/icon-svg/logoSvg';
import HomeSvg from '../images/icon-svg/homeSvg';
import TrendSvg from '../images/icon-svg/trendSvg';
import SubSvg from '../images/icon-svg/subscriptionSvg'
import LibarySvg from '../images/icon-svg/libarySvg';
import HistorySvg from '../images/icon-svg/historySvg';
import HeartSvg from '../images/icon-svg/heart';

import DownloandSvg from '../images/icon-svg/downloandSvg';
import Timer from '../images/icon-svg/timerSvg';
import GamingSvg from '../images/icon-svg/gamingSvg';
import LiveSvg from '../images/icon-svg/liveSvg';
import SettingsSvg from '../images/icon-svg/settingsSvg';
import HelpSvg from '../images/icon-svg/helpSvg';
import SubsSvg from '../images/icon-svg/subscriptionSvg';
import TimerSvg from '../images/icon-svg/timerSvg';

// Image

import avatar from '../images/story.jpg';
import { useEffect } from 'react';


const menuBar = () => {
    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.menu');
    let landFirst = document.querySelector('.container-right');
    let menuP = menu.querySelectorAll('p');
    let menuH2 = menu.querySelectorAll('h2');
    let landArticle = document.querySelector('.menu');
    let count = 0;


    burger.addEventListener('click', () => {
        if(count === 0) {
            menu.style.width = '5rem';
            landFirst.style.flexBasis = '125px'
            menuP.forEach(e => {
                e.style.display = 'none';
            });
            menuH2.forEach(e => {
                e.style.display = 'none';
            })
            landArticle.style.width = "5rem"
            count = 1;
        } else if(count === 1) {
            menu.style.width = "15rem"
            landFirst.style.flexBasis = '300px'
            setTimeout(() => {
                menuP.forEach(e => {
                    e.style.display = 'block';
                    e.style.animation = 'p-animation 0.5s'
                });
                menuH2.forEach(e => {
                    e.style.display = 'block';
                    e.style.animation = 'p-animation 0.8s'
                })
            }, 600)
            landArticle.style.width = "15rem"
            count = 0;
        }
        
    })
}


const Navbar = () => {
    useEffect(() => {
       return menuBar();
    })
    return ( 
        <div className='menu'>
            <nav className='navigation'>
                <div className='display-f-start'>
                    <div className='burger'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='logo'>
                        <LogoSvg />
                    </div>
                </div>
                <section className='nav-section'>
                    <article className='menu-article'>
                        <ul className='nav-ul'>
                            <li className='ul-li'>
                                <a href='###'>
                                    <HomeSvg />
                                    <p className='p-silver'>Home</p>
                                </a>
                            </li>
                            <li className='ul-li'>
                                <a href='###'>
                                    <TrendSvg />
                                    <p className='p-silver'>Trending</p>
                                </a>
                            </li>
                            <li className='ul-li'>
                                <a href='###'>
                                    <SubsSvg />
                                    <p className='p-silver'>Subscription</p>
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article className='menu-article'>
                        <ul className='nav-ul'>
                            <li className='ul-li'>
                                <a href='###'>
                                    <LibarySvg />
                                    <p className='p-silver'>Libary</p>
                                </a>
                            </li>
                            <li className='ul-li'>
                                <a href='###'>
                                    <HistorySvg />
                                    <p className='p-silver'>History</p>
                                </a>
                            </li>
                            <li className='ul-li'>
                                <a href='###'>
                                    <HeartSvg />
                                    <p className='p-silver'>Favorites</p>
                                </a>
                            </li>
                            <li className='ul-li'>
                                <a href='###'>
                                    <DownloandSvg />
                                    <p className='p-silver'>Downloands</p>
                                </a>
                            </li>
                            <li className='ul-li'>
                                <a href='###'>
                                    <TimerSvg />
                                    <p className='p-silver'>Watched Later</p>
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article className='menu-article'>
                        <div className='title-silver'>
                            <h2>Channels</h2>
                        </div>
                        <ul className='nav-ul'>
                            <li className='ul-li'>
                                <a href='###'>
                                    <div className='avatar-box'>
                                        <img src={avatar} className="avatar-min" alt="channel-avatar" />
                                    </div>
                                    <p className='p-silver'>Figma</p>
                                </a>
                            </li>
                            <li className='ul-li'>
                                <a href='###'>
                                    <div className='avatar-box'>
                                        <img src={avatar} className="avatar-min" alt="channel-avatar" />
                                    </div>                                    
                                    <p className='p-silver'>Tedtalks</p>
                                </a>
                            </li>
                            <li className='ul-li'>
                                <a href='###'>
                                    <div className='avatar-box'>
                                        <img src={avatar} className="avatar-min" alt="channel-avatar" />
                                    </div>                                    
                                    <p className='p-silver'>Plants</p>
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article className='menu-article'>
                        <div className='title-silver'>
                            <h2>More</h2>
                        </div>
                        <ul className='nav-ul'>
                        <li className='ul-li'>
                                <a href='###'>
                                    <GamingSvg />
                                    <p className='p-silver'>Gaming</p>
                                </a>
                            </li>
                            <li className='ul-li'>
                                <a href='###'>
                                    <LiveSvg />
                                    <p className='p-silver'>Live</p>
                                </a>
                            </li>
                            <li className='ul-li'>
                                <a href='###'>
                                    <SettingsSvg />
                                    <p className='p-silver'>Settings</p>
                                </a>
                            </li>
                            <li className='ul-li'>
                                <a href='###'>
                                    <HelpSvg />
                                    <p className='p-silver'>Help</p>
                                </a>
                            </li>
                        </ul>
                    </article>
                </section>
            </nav>
        </div>
    );
}
 
export default Navbar;