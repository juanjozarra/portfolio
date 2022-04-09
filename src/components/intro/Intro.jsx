import "./intro.scss"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/juanjopic.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi, I'm</h2>
                    <h1>Juan Zarragoicoechea</h1>
                    <h3>Jr.<span></span></h3>
                </div>
                <a href="#contact">
                    <ExpandMoreIcon className="imgarrow"/>
                </a>
            </div>            
        </div>
    )
}
