import React from 'react'
import {FiStar,FiSettings} from "react-icons/fi";
import { AiOutlineEye } from 'react-icons/ai';
import { IconButton } from '@mui/material';
import {IoMdFolderOpen} from "react-icons/io";
import ColorLensIcon from '@mui/icons-material/ColorLens'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import avatarimage from "../images/avatar_image.jpg"; 
import formimage from "../images/form_icon.jpeg";
import "./FormHeader.css";

function FormHeader() {
  return (
    <div>
      <div className="form_header">
        <div className="form_header_left">
            <img src={formimage} style={{height:"45px",width:"40px"}} />
            <input type="text" placeholder='Untitled Form' className='form_name'/>
            <IoMdFolderOpen className="form_header_icon" style={{marginRight:"10px"}}></IoMdFolderOpen>
            <FiStar className="form_header_icon" style={{marginRight:"10px"}}></FiStar>
            <span style={{fontSize:"12px",fontWeight:"600"}}>All changes saved in drive</span>
        </div>
        <div className="form_header_right">
            <IconButton>
                <ColorLensIcon size="small" className="form_header_icon"/>
            </IconButton>
            <IconButton>
                <AiOutlineEye  className="form_header_icon"/>
            </IconButton>
            <IconButton>
                <FiSettings className="form_header_icon"/>
            </IconButton>
            
            <Button variant="contained" color="primary" href="#contained-buttons">Send</Button>

            <IconButton>
                <MoreVertIcon className="form_header_icon"/>
            </IconButton>
            <IconButton>
                <Avatar style={{height:"30px",width:"30px"}} src={avatarimage}/>
            </IconButton>
        </div>
      </div>
    </div>
  )
}

export default FormHeader
