import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { IconButton } from "@mui/material";
import "./Mainbody.css";
import MoreVertIcon from '@mui/icons-material/MoreVert'
// import doc_image

function Mainbody() {
  return (
    <div className="main_body">
      <div className="mainbody_top">
        <div
          className="mainbody_top_left"
          style={{ fontSize: "16px", fontWeight: "500" }}
        >
          Recent Forms
        </div>
        <div className="mainbody_top_right">
          <div
            className="mainbody_top_center"
            style={{ fontSize: "14px", marginRight: "125px" }}
          >
            Owned by anyone <ArrowDropDownIcon />
          </div>
          <IconButton>
            <StorageIcon style={{ fontSize: "16px", color: "black" }} />
          </IconButton>
          <IconButton>
            <FolderOpenIcon style={{ fontSize: "16px", color: "black" }} />
          </IconButton>
        </div>
      </div>
      <div className="mainbody_docs">
        <div className="doc_card">
            {/* <img src={doc_image} alt="" className="doc_image" /> */}
            <div className="doc_card_content">
                <h5></h5>
                <div className="doc_content" style={{fontSize:"12px",color:"grey"}}>
                    <div className="content_left">
                        <StorageIcon style={{color:"white",fontSize:"12px",backgroundColor:"#6E2594", padding:"3px",marginRight:"3px",borderRadius:"2px"}}/>
                    </div>
                    <MoreVertIcon style={{fontSize:"16px",color:"grey"}}/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
