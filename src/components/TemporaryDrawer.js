import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import "./Drawer.css"
import {FiSettings} from "react-icons/fi"
import {BsQuestionCircle} from "react-icons/bs"

function TemporaryDrawer() {
 
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{width:"250px"}} role="presentation">
      <Divider/>
      <List>
        <ListItem>
            <ListItemText style={{fontSize:"48px",marginLeft:"5px"}}>
                <span style={{color:"blue",fontWeight:"700",fontSize:"22px",fontFamily:"'Product Sans',Arial,Sans-serif"}}>F</span>
                <span style={{color:"red",fontWeight:"500",fontSize:"22px",fontFamily:"'Product Sans',Arial,Sans-serif"}}>O</span>
                <span style={{color:"yellow",fontWeight:"500",fontSize:"22px",fontFamily:"'Product Sans',Arial,Sans-serif"}}>R</span>
                <span style={{color:"blue",fontWeight:"500",fontSize:"22px",fontFamily:"'Product Sans',Arial,Sans-serif"}}>M</span>
                <span style={{color:"green",fontWeight:"500",marginRight:"10px" ,fontSize:"22px",fontFamily:"'Product Sans',Arial,Sans-serif"}}>S</span>
                <span style={{color:"#5f6368",fontWeight:"700",fontSize:"22px",fontFamily:"'Product Sans',Arial,Sans-serif"}}>Builder</span>
            </ListItemText>
        </ListItem>
      </List>
      <Divider/>
      <List style={{marginLeft:"08px",marginRight:"8px",marginTop:"15px"}}>
        <ListItem className="list_item">
            {/* <img src={} style={{height:"20px", width:"20px"}} alt="" /> */}
            <div style={{marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"grey"}}>Docs</div>
        </ListItem>

        <ListItem className="list_item">
            {/* <img src={} style={{height:"20px", width:"20px"}} alt="" /> */}
            <div style={{marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"grey"}}>Sheets</div>
        </ListItem>

        <ListItem className="list_item">
            {/* <img src={} style={{height:"20px", width:"20px"}} alt="" /> */}
            <div style={{marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"grey"}}>Slides</div>
        </ListItem>

        <ListItem className="list_item">
            {/* <img src={} style={{height:"20px", width:"20px"}} alt="" /> */}
            <div style={{marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"grey"}}>Forms</div>
        </ListItem>
      </List>
      <Divider/>
      <List style={{marginLeft:"08px", marginRight:"08px", marginTop:"15px"}}>
        <ListItem className="list_item">
            <FiSettings/>
            <div style={{marginLeft:"20px",fontSize:"14px"}}>Settings</div>
        </ListItem>
        <ListItem className="list_item">
            <BsQuestionCircle/>
            <div style={{marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"grey"}}>Help & Feedback</div>
        </ListItem>
        
      </List>
      <Divider/>
      <List style={{marginLeft:"08px", marginRight:"08px", marginTop:"15px"}}>
        <ListItem className="list_item">
            {/* <img src={driveImage} style={{height:"20px",width:"20px"}} alt="" /> */}
            <div style={{marginLeft:"20px",fontSize:"14px"}}>Drive</div>
        </ListItem>
      </List>
        
    </div>
  )

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          anchor={"left"}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default TemporaryDrawer;
