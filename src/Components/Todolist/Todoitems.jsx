import React, {useState} from "react";
import {Form,Card,Col,Row,Button} from "react-bootstrap";

 export const TodoItems = ({item,handleDelete}) => {
     const [checkbox, setcheckBox] = useState(false);
      return(
         <div>
            <Card>
                <Row>
                    <Col> 
                    <Form.Check onClick={()=>setcheckBox(checkbox)}></Form.Check>
                    </Col>
                    <Col>
                    <Col>
                    <Form.Label>{checkbox?<del>{item}</del>:item}</Form.Label>
                    </Col>
                    <Button onClick={()=>handleDelete(item)}>delete</Button>
                    </Col>
                </Row>
            </Card>
        </div>
      );
    };
                