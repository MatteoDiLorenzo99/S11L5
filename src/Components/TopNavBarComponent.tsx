import React from "react";
import { FaPlay, FaStepBackward, FaStepForward, FaRandom, FaRedo } from "react-icons/fa";
import logo from "./../Assets/logos/music.svg";
import "./Css/TopNavBar.css";

// Il componente non accetta props e non ha uno stato, quindi non è necessario dichiarare tipi complessi
const TopNavBarComponent: React.FC = () => {
  return (
    <div className="topnav-container">
      <div className="topnav-content">
        {/* Left section - Shuffle, Previous, Play, Next, Repeat */}
        <div className="left-controls">
          <FaRandom className="control-icon" />
          <FaStepBackward className="control-icon" />
          <FaPlay className="control-icon play-icon" />
          <FaStepForward className="control-icon" />
          <FaRedo className="control-icon" />
        </div>

        {/* Middle section - Logo */}
        <div className="middle-section">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>

        {/* Right section - Volume and Login */}
        <div className="right-section">
          <div className="volume-control">
            <input type="range" min="0" max="100" className="volume-slider" />
          </div>
          <button className="login-button">Accedi</button>
        </div>
      </div>
    </div>
  );
};

export default TopNavBarComponent;
