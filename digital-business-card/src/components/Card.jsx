import './Card.css';
import Hero from './Hero.jsx';
import AboutMe from './AboutMe.jsx';
import Interests from './Interests.jsx';
import Footer from './CardFooter.jsx';
import LinkedInQR from '../assets/Linkedin-QR.png';


function Card() {
    return (
        <>
            <div className="card-elem">
                <Hero></Hero>
                <div className="mid-section">
                    <AboutMe></AboutMe>
                    <Interests></Interests>
                    <div className="linkedin">
                        <h3>LinkedIn QR Code</h3>
                        <img src={LinkedInQR}></img>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Card