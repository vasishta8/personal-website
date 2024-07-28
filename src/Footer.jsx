import './Footer.css';
import StartLogo from './assets/startlogo.png'
import BatteryIcon from './assets/battery.png'

function Footer () {
    const date = new Date();
    let hours = date.getHours();
    if (hours<10) hours = "0"+hours;
    let minutes = date.getMinutes();
    if (minutes<10) minutes = "0"+minutes;
    const CurrentTime = hours + ":" + minutes;
    return (
        <div className='main-div'>
            <div className="start-button">
                <a href="#"><img src={StartLogo} alt="" width={"20.9vw"} height={"18vw"} style={{marginTop: "0.3vw", marginLeft: "50%"}}/></a>
                <a href="#" style={{textDecoration: "none", color: "white", fontWeight: "bold", fontStyle: "italic", textAlign: "center", textShadow: "0px 0px 3px black, 0px 0px 3px black", margin: "0", marginLeft: "17.5%"}}>start</a>
            </div>
            <div className="task-bar">
                <a href="#"><img src={BatteryIcon} alt="" width={"20.9vw"} height={"18vw"} style={{marginTop: "0.3vw", marginLeft: "80%"}}/></a>
                <a href="#" style={{textDecoration: "none", color: "white", textAlign: "center", margin: "0", marginLeft: "30%"}}>{CurrentTime}</a>
            </div>
        </div>
    );
}

export default Footer;