import * as React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Mail } from "../types/Mail";
import { Mails } from "../types/Mails";
import axios from "axios";
import { Button } from "@mui/material";
import { useState } from "react";

export default function MailAccordion(props:{data:Mails}){
    const [disable,setDisable]=useState(false);
    const url = "http://localhost:3000";
    console.log(props.data);
    const formatString=(s:string)=>{
        //const str=s.replace(/\r?\n/g, '<br>')
        const str = s;
        //console.log(str)
        return str 
    }
    return(
        <div>
            {props.data.mails.map((data:Mail)=>(
                <Accordion disabled={disable}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls = "panel1a-content"
                        id= {data.id.toString()}
                    >
                        <Typography>{data.subject}</Typography>
                        <div style={{ flexGrow: 1 }}></div>
                        <Button type="button" 
                        onClick={()=>{
                            console.log(data.id)
                            axios.post(url+"/delete",null,{params:{id:data.id}})
                            setDisable(true);
                            }
                        }>delete</Button>
                    </AccordionSummary>
                    <AccordionDetails>
                        <pre>{formatString(data.body)}</pre>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}