import './Hero.css';
import ProfilePic from '../assets/profile.jpg';

function Hero() {
    return (
        <>
            <div className="hero">
                <img src={ProfilePic} className="profile-img"></img>
                <div className="personal-info">
                    <h1 className="full-name">Sam Lui</h1>
                    <h3 className="tagline">UBC BCS | CSMLS Certified | SFU HealthSci Alumni</h3>
                </div>
            </div>
        </>
    )
}

export default Hero