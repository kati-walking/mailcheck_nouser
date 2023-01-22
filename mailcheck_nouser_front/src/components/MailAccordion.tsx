import * as React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Mail } from "../types/Mail";
import { Mails } from "../types/Mails";
import axios from "axios";

export default function MailAccordion(props:any){
    const url = "http://localhost:3000";
    console.log(props.data);
    return(
        <div>
            {props.data.Mails.map((data:Mail)=>(
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls = "panel1a-content"
                        id= {data.id.toString()}
                    >
                        <Typography>{data.subject}</Typography>
                        <button type="button" 
                        onClick={()=>{
                            axios.post(url+"/hide",{id:data.id})
                            }
                        }>delete</button>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{data.body}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}