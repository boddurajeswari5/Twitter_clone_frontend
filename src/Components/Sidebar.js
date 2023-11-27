import React from "react";
import './Home.css';
import {
  FaTwitter,
  FaHome,
  FaUserAlt,
  FaMehBlank,
} from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="">
            <FaTwitter className="icons logo" />
          </a>
        </li>
        <li>
          <a href="">
            <FaHome className="icons logo" />
            Home
          </a>
        </li>
        
        <li>
          <a href="">
            <FaUserAlt className="icons" /> Profile
          </a>
        </li>
        <li>
          <a href="">
            <FaMehBlank className="icons" /> More
          </a>
        </li>
        <div className="sidebar__Btn">
          <a href="">Logout</a>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;