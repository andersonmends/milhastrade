import { Button } from "react-bootstrap";

 export default function ButtonCia(props){
    return(
        <Button
            style={{ width: "120px", height: "34px", padding: "0px", alignItems: 'center' }}
            variant="outline-secondary" >
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

