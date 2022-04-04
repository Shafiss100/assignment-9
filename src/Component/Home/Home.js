import React from 'react';
import './Home.css'
import img from '../image/watch.jpg'
import { Link } from 'react-router-dom';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <div className='first-container'>
            <div className='details'>
                <h1>Samsung Galaxy Watch4 44mm </h1>
                <p>The Samsung Galaxy Watch4 has been designed to help you learn more so you can achieve more. It goes beyond tracking steps and calories to offer actionable insights on everything from your running style to your heart rate. Galaxy Watch4 tracks your movements so you can just slip it on and get working out.The running coach function gives you actionable advice in real-time. It comes with a thin, light design. The Super AMOLED display is all screen from edge to edge. The touch bezel allows you to easily navigate with a quick turn, touch, or tap. Galaxy Watch4 goes where you go with an IP68 and 5ATM water and dust rating plus military-grade durability to handle a range of conditions, so you can keep it on to go farther and experience more. It has no warranty.</p>
            </div>
            <div><img src={img} alt="" /></div>
        </div>
        <div>
            <h1 className='r'>Review</h1>
        </div>
        <div className='comments-container'>
            <Review></Review>

        
        </div>
        <Link className='btn link' to={'/review'}>See all review</Link>
        </div>
    );
};

export default Home;