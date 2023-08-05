import React from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { IconButton } from '@mui/material';
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore"
import './Template.css';
import uuid from 'react-uuid';
import {useNavigate} from 'react-router-dom';

function Template() {
  const history = useNavigate();
  const createForm = ()=>{
    const id_ = uuid();
    
    history("/form/"+id_);
  }

  return (
    <div className='template_section'>
      <div className="template_top">
        <div className="template_left">
            <span style={{fontSize:"17px",color:"#202124"}}>Start new Form</span>
        </div>
        <div className="template_right">
            <div className="gallery_button">
                Template Gallery
                <UnfoldMoreIcon fontSize='small'/>
            </div>
            <IconButton>
                <MoreVertIcon fontSize='small'/>
            </IconButton>
        </div>
      </div>
      <div className="template_body">
        <div className="card" onClick={createForm}>
            {/* <img src={blank} alt="" className="card_image"/> */}
            <p className='card_title'>Blank</p>
        </div>
        <div className="card">
            {/* <img src={party} alt="" className="card_image"/> */}
            <p className='card_title'>Education</p>
        </div>
        <div className="card">
            {/* <img src={contact} alt="" className="card_image"/> */}
            <p className='card_title'>Contact Information</p>
        </div>
      </div>
    </div>
  )
}

export default Template
