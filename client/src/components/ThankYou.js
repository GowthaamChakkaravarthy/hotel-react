import React from 'react';
import Alert from 'react-bootstrap/Alert'
import {Table} from "react-bootstrap";
import  { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ThankYou = () => {
    const location = useLocation();
    const [item , setItem] = useState(location.state.item);
    console.log(location.state.item);
    return (
        <div className='container center'>
            <Alert variant="success">
            <Alert.Heading>Amazing Food Court</Alert.Heading>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Recipie</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.count}</td>
                        <td>{item.price}</td>
                    </tr> 
                    <tr>
                        <td colSpan='3'>Amount: </td>
                        <td>{item.price * item.count}</td>
                    </tr>  
                </tbody>
                </Table>
            <hr />
            <p className="mb-0">
                Your order will delivered in 30 mins. Thank You, Hope see you again your visit
            </p>
            </Alert>
        </div>
    );
}

export default ThankYou;
