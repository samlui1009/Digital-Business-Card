import './CardFooter.css';
import { FaGithub } from "react-icons/fa"
import { SiDevpost } from "react-icons/si"
import { MdComputer } from "react-icons/md"

function CardFooter() {
    return (
        <>
            <div className = "footer-nav">      
                <div className = "button-links">
                    <a href="https://devpost.com/sam_lui" target="_blank"><button className = "buttons"><SiDevpost></SiDevpost></button></a>
                    <a href="https://github.com/samlui1009" target="_blank"><button className = "buttons"><FaGithub></FaGithub></button></a>
                    <a href="https://samlui.netlify.app/" target="_blank"><button className = "buttons"><MdComputer></MdComputer></button></a>
                </div>
            </div>
        </>
    )
}

export default CardFooter