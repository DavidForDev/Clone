import React from 'react';
import './storyCards.style.scss'
import img from '../images/story.jpg'

const StoryCards = (props) => {
    const { info } = props;
    return ( 
        <article className='avatar-box' key={info._id} id='story-card'>
            <img src={img} className={`avatar-max ${info.activeIndicator}`} alt='story-avatar' />
            <h2 className='white-weight-normal'>{info.firstName}</h2>
        </article>
    );
}
 
export default StoryCards;