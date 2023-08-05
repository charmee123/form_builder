import React, { useState, useEffect } from "react";
import CropOriginalOutlineIcon from "@mui/icons-material/CropOriginalOutlined";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ShortTextIcon from "@mui/icons-material/ShortText";
import SubjectIcon from "@mui/icons-material/Subject";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { BsTrash } from "react-icons/bs";
import { IconButton, MenuItem } from "@mui/material";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import AddCircledOutlineIcon from "@mui/icons-material/AddCircleOutline";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { BsFileText } from "react-icons/bs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionActions";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import { FcRightUp } from "react-icons/fc";
import CloseIcon from "@mui/icons-material/Close";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./Question_form.css";
import { Typography } from "@mui/material";

function Question_form() {
    const [questions, setQuestions] = useState([
        {
            questionText: "Which is the capital of Gujarat ?",
            questionType: "radio",
            options: [
                { optionText: "Bengaluru" },
                { optionText: "Gandhinagar" },
                { optionText: "Ahnedabad" },
                { optionText: "Mumbai" },
            ],
            open: true,
            required: false,
        },
    ]);

    function questionsUI() {
        return questions.map((ques, i) => (
            <Accordion
                expanded={questions[i].open}
                className={questions[i].open ? "add border" : ""}
            >
                <AccordionSummary
                    aria-controls="panella-content"
                    id="panella-header"
                    elevation={1}
                    style={{ width: "100%" }}
                >
                    {questions[i].open ? (
                        <div className=".saved_questions ">
                            <Typography
                                style={{
                                    fontSize: "15px",
                                    fontWeight: "400",
                                    letterSpacig: ".1px",
                                    lineHeight: "24px",
                                    paddingBottom: "8px",
                                }}
                            >
                                {i + 1}.{questions[i].questionText}
                            </Typography>

                            {ques.options.map((op, j) => (
                                <div key={j}>
                                    <div style={{ display: "flex" }}>
                                        <FormControlLabel
                                            style={{ marginLeft: "5px", marginBottom: "5px" }}
                                            disabled
                                            control={
                                                <input
                                                    type={ques.questionType}
                                                    color="primary"
                                                    style={{ marginRight: "3px" }}
                                                    required={ques.type}
                                                />
                                            }
                                            label={
                                                <Typography
                                                    style={{
                                                        fontFamily: "Roboto,Arial,sans-serif",
                                                        fontSize: "13px",
                                                        fontWeight: "400",
                                                        letterSpacing: ".2px",
                                                        lineHeight: "20px",
                                                        color: "#202124",
                                                    }}
                                                >
                                                    {ques.options[j].optionText}
                                                </Typography>
                                            }
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        ""
                    )}
                </AccordionSummary>
                <div className="question_boxes">
                    <AccordionDetails className="add_question">
                        <div className="add_question_top">
                            <input type="text" className="question" placeholder="Question" value={ques.questionText} />
                            <CropOriginalIcon style={{ color: "#5f6368" }}/>
                                <Select className="select" style={{ color: "#5f6368", fontSize: "13px" }}>
                                    <MenuItem id="text" value="Text"><SubjectIcon style={{ marginRight: "10px" }} />Paragraph</MenuItem>
                                    <MenuItem id="checkbox" value="Checkbox"><CheckBoxIcon style={{ marginRight: "10px", color: '#70757a' }} checked />Checkboxes</MenuItem>
                                    <MenuItem id="radio" value="Radio"><Radio style={{ marginRight: "10px", color: '#70757a' }} checked />Multiple Choice</MenuItem>
                                </Select>
                        </div>
                        {ques.options.map((op, j) => (
                            <div className="add_question_body" key={j}>
                                {
                                    (ques.questionType !== "text") ?
                                        <input type={ques.questionType} style={{ marginRight: "10px" }} /> :
                                        <ShortTextIcon style={{ marginRight: "10px" }} />

                                }
                                <div>
                                    <input type="text" className="text_input" placeholder="option" value={ques.options[j].optionText}></input>
                                </div>
                                <CropOriginalIcon style={{ color: "#5f6368" }} />

                                <IconButton aria-label="delete" >
                                    <CloseIcon />
                                </IconButton>
                            </div>
                        ))}
                            
                            
                        <div className="add_footer">
                            <div className="add_question_bottom_left">
                            <Button size="small" style={{textTransform: 'none' ,color:"#4285f4" ,fontsize:"13px", fontweight:"600"}}>
                                <FcRightUp style={{border:"2px solid #4285f4", padding:"2px",marginRight:"8px"}} /> Answer Key</Button>
                          </div>
                            <div className="add_question_bottom">
                                <IconButton aria-label="Copy" >
                                    <FilterNoneIcon/>
                                </IconButton>

                                <IconButton aria-label="delete" >
                                    <BsTrash />
                                </IconButton>
                                    <span style={{color:"#5f6368", fontSize:"13px"}} >Required</span> <Switch name="checkedA" color="primary" checked></Switch>
                                <IconButton>
                                    <MoreVertIcon />
                                </IconButton>

                            </div>
                          </div>
                            


                    </AccordionDetails>
                </div>
            </Accordion>
        ));
    }

    return (
        <div>
            <div className="question_form">
                <br />
                <div className="section">
                    <div className="questionn_title_section">
                        <div className="question_form_top">
                            <input
                                type="text"
                                className="question_form_top_name"
                                style={{ color: "black" }}
                                placeholder="untitled document"
                            />
                            <input
                                type="text"
                                className="question_form_top_desc"
                                style={{ color: "black" }}
                                placeholder="Form Description"
                            />
                        </div>
                    </div>
                    {questionsUI()}
                </div>
            </div>
        </div>
    );
}

export default Question_form;
