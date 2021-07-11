import React from 'react';
import Navbar from '../Navbar';
import Information from './Information';
import Carousel from '../headerBody/Carousel';
import Notice from '../headerBody/Notice';
import Footer from '../../footer/Footer';
import Event from '../headerBody/Event';
import YoutubeVideo from '../../youtube/YoutubeVideo';
const HomeScreen = () => {
    return (
        <div>
            <Navbar />
            <Carousel />
            <Information />
            <Notice />
            <Event />
            <YoutubeVideo />
            <Footer />
        </div>
    );
};

export default HomeScreen;