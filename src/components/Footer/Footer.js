import zuri from "../../images/zuri.png"
import ingressive from "../../images/ingressive.png"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                <img src={zuri}/>
                <span>HNG Internship 9 Frontend Task</span>
                <img src={ingressive}/>
            </div>
        </div>
    )
}
export default Footer