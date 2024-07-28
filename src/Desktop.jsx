import React, { useState } from 'react';
import PDF from './assets/pdficon.png'
import Folder from './assets/folder.png'
import Notepad from './assets/notepadlogo.png'
import LinkedIn from './assets/linkedinlogo.png'
import GitHub from './assets/githublogo.png'
import AboutMe from './AboutMe'
import Projects from "./Projects"
import './Desktop.css'

function Desktop() {
    const [ShowAboutMe, SetShowAboutMe] = React.useState(false);
    const [ShowProjects, SetShowProjects] = React.useState(false);
    function OnAboutMeClick() {
        SetShowAboutMe(true);
        SetShowProjects(false);
    }
    function OnProjectsClick() {
        SetShowProjects(true);
        SetShowAboutMe(false);
    }
    return (
        <div className="container">
            <ul>
                <li>
                    <a href="#" onClick={OnAboutMeClick}>
                        <img src={Notepad} alt="" /><br />
                        <span>About Me</span>
                    </a>
                    <br /><br /><br />
                </li>
                <li>
                    <a href="#" onClick={OnProjectsClick}>
                        <img src={Folder} alt="" /><br />
                        <span>Projects</span>
                    </a>
                    <br /><br /><br />
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/103hDUzbgcmOc0E26InaC4-cHxRu0REop/view?usp=sharing" target='_blank'>
                        <img src={PDF} alt="" /><br />
                        <span>Resume</span>
                    </a>
                    <br /><br /><br />
                </li>
                <li>
                    <a href="https://github.com/vasishta8" target='_blank'>
                        <img src={GitHub} alt="" /><br />
                        <span>GitHub</span>
                    </a>
                    <br /><br /><br />
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/vasishtas/" target='_blank'>
                        <img src={LinkedIn} alt="" /><br />
                        <span>LinkedIn</span>
                    </a>
                    <br /><br /><br />
                </li>
            </ul>
            {ShowAboutMe? <AboutMe/>:null}
            {ShowProjects? <Projects/>:null}
        </div>
    );
}

export default Desktop;