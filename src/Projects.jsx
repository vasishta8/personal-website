import GitImage from './assets/githublogo.png';
import Folder from './assets/folder.png'
import './Projects.css';

function Projects() {
    function onMaximiseClick(e) {
        e.preventDefault();
        let maximiseButton = document.getElementsByClassName('notepad-window');
        if (maximiseButton[0].style.width === "100vw") {
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
                <img src={Folder} alt="Notepad Logo"/>
                <p>Projects</p>
                <a href="">-</a>
                <a href="" onClick={onMaximiseClick} id='maximiseButton'>☐</a>
                <a href="">X</a>
            </div>
            <div className="tool-bar">
                <p>File</p>
                <p>Edit</p>
                <p>View</p>
                <p>Favourites</p>
                <p>Tools</p>
                <p>Help</p>
            </div>
            <div className="main-window">
                <a href="https://github.com/vasishta8/recharge" target='_blank' className="image-link"><img src={GitImage} alt="Git Image"/>Recharge: A Mobile Shop</a>
                <a href="https://github.com/vasishta8/football-analyser" target='_blank' className="image-link"><img src={GitImage} alt="Git Image"/>Football Analyser</a>
                <a href="https://github.com/vasishta8/project-euler" target='_blank' className="image-link"><img src={GitImage} alt="Git Image"/>Project Euler Solutions</a>    
                <a href="https://github.com/vasishta8/personal-website" target='_blank' className="image-link"><img src={GitImage} alt="Git Image"/>Personal Website</a>
                <a href="https://github.com/vasishta8/blackjack-cli" target='_blank' className="image-link"><img src={GitImage} alt="Git Image"/>Blackjack Simulator</a>
                <a href="https://github.com/vasishta8/object-detection" target='_blank' className="image-link"><img src={GitImage} alt="Git Image"/>Object Detection</a>
            </div>
        </div>
    );
}

export default Projects;
