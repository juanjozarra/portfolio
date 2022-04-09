import "./topbar.scss"
import {Person, Mail} from '@material-ui/icons'

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wraper">
                <div className="left">
                    <a href="#intro" className="logo">Juanjo</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+54 9 2344-50-6141</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>juanjozarra4896@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
