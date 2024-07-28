import Notepad from './assets/notepadlogo.png'
import './AboutMe.css'

function AboutMe() {
    function onMaximiseClick(e) {
        e.preventDefault();
        let maximiseButton = document.getElementsByClassName('notepad-window');
        if (maximiseButton[0].style.width == "100vw") {
            document.getElementById('maximiseButton').innerHTML = "☐";
            maximiseButton[0].style.width = "35vw";
            maximiseButton[0].style.height = "50vh";
            maximiseButton[0].style.left = "35%";
            maximiseButton[0].style.top = "20%";
        }
        else {
            document.getElementById('maximiseButton').innerHTML = "⧉";
            maximiseButton[0].style.width = "100vw";
            maximiseButton[0].style.height = "100vh";
            maximiseButton[0].style.left = "0%";
            maximiseButton[0].style.top = "0%";
        }
        return false;
    } 
    return (
        <div className="notepad-window">
            <div className="top-bar">
                <img src={Notepad} alt=""/>
                <p>About Me</p>
                <a href="">-</a>
                <a href="" onClick={onMaximiseClick} id='maximiseButton'>☐</a>
                <a href="">X</a>
            </div>
            <div className="tool-bar">
                <p>File</p>
                <p>Edit</p>
                <p>Format</p>
                <p>View</p>
                <p>Help</p>
            </div>
            <div className="main-window">
                <p>Hi, I'm Vasishta! I'm currently pursuing my undergraduate degree in Computer Science Engineering at Vellore Institute of Technology. I enjoy competitive coding, reading about data structures and graphic design. You'll probably find me playing games or watching football in my off time. Enjoy clicking around and have a good day!</p>
            </div>
        </div>
    );
}

export default AboutMe;