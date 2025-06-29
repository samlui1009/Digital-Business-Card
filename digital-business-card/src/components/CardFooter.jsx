import './CardFooter.css';
import { FaGithub } from "react-icons/fa"
import { SiDevpost } from "react-icons/si"
import { MdComputer } from "react-icons/md"

function CardFooter() {
    return (
        <>
            <div className = "footer-nav">
                <h3>Check out my work below!</h3>
                <div className = "button-links">
                    <button className = "buttons"><SiDevpost></SiDevpost></button>
                    <button className = "buttons"><FaGithub></FaGithub></button>
                    <button className = "buttons"><MdComputer></MdComputer></button>
                </div>
            </div>
        </>
    )
}

export default CardFooter