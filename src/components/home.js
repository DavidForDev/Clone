import React from 'react';
import './home.style.scss';

//imports
import Navbar from './navbar/navBar';
import Dashboard from './dashboard/dashboard';

const Home = () => {
    return (
        <section id='wrapper'>
            <article className='container-right'>
                <Navbar />
            </article>
            <article className='container-left'>
                <Dashboard />
            </article>
        </section>
    );
}

export default Home;