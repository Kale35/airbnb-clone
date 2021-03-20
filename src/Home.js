import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
//ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner/>
            <div className="home__section">
                <Card src="https://media.scurto.net/1033/media/9412.jpg" title="Relaxing Costal Beach House" description="Enjoy the cool breeze overlooking the coast on your private balcony"/>
                <Card src="https://media.scurto.net/1033/media/9412.jpg" title="Relaxing Costal Beach House" description="Enjoy the cool breeze overlooking the coast on your private balcony"/>
                <Card src="https://media.scurto.net/1033/media/9412.jpg" title="Relaxing Costal Beach House" description="Enjoy the cool breeze overlooking the coast on your private balcony"/>

            </div>
            <div className="home__section">
                <Card src="https://media.scurto.net/1033/media/9412.jpg" title="Relaxing Costal Beach House" description="Enjoy the cool breeze overlooking the coast on your private balcony"/>
                <Card src="https://media.scurto.net/1033/media/9412.jpg" title="Relaxing Costal Beach House" description="Enjoy the cool breeze overlooking the coast on your private balcony"/>
                <Card src="https://media.scurto.net/1033/media/9412.jpg" title="Relaxing Costal Beach House" description="Enjoy the cool breeze overlooking the coast on your private balcony"/>

            </div>
        </div>
    )
}

export default Home
