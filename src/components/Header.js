import React from "react";
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import formimage from "../images/form_icon.jpeg";
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import avatarimage from "../images/avatar_image.jpg"; 
import TemporaryDrawer from "./TemporaryDrawer";

function Header() {
  return (
    <div className="header">
      <div className="header_info">
        <TemporaryDrawer/>
        <img className="formImage" src={formimage} alt="form_image"/>
        <div className="info">
            Forms
        </div>

      </div>
      <div className="header_search">
        <IconButton><SearchIcon/></IconButton>
        <input type="text" name="search" placeholder="Search"/>
      </div>
      <div className="header_right">
        
        <IconButton>
        <AppsIcon/>
        </IconButton>

        <IconButton>
            <Avatar className="avatar_image" src={avatarimage}/>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
