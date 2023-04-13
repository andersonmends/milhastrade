import { Button } from "react-bootstrap";
import { useState } from "react";

 export default function ButtonCia(props){
    
    return(
        
        <Button
            style={{backgroundColor: props.selectedCia === 'Gol' ? '#EFEFEF  ' : 'white', width: "120px", height: "34px", padding: "0px", alignItems: 'center', margin:"0 5px" }}
            variant="outline-secondary" 
            onClick={props.handle}
            // className={props.selectedCia === 'Gol' ? '#ddd' : 'white'}
            >
            <img src={props.logo} align="left" style={{
                width: "25px",
                height: "25px",
                padding: "0px",
                margin: "-3px 1px",
                borderRadius: "10%"
                
            }} />
            <span style={{ verticalAlign: "middle", padding: "5px" }} >{props.cia}</span>
        </Button>
    );
 }

