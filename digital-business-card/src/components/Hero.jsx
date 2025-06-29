import './Hero.css';
import ProfilePic from '../assets/profile.jpg';

function Hero() {
    return (
        <>
            <div className="hero">
                <img src={ProfilePic} className="profile-img"></img>
            </div>
        </>
    )
}

export default Hero