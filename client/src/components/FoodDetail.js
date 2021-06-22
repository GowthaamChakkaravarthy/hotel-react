import React , { useEffect,useState } from 'react';
import { useLocation, useHistory} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const FoodDetail = () => {
    const location = useLocation();
    const history = useHistory();
    const [foodObj , setFoodObj ] = useState(location.state.item);
    const [count , setCount] = useState(0)
    useEffect(() => {
        console.log(foodObj)
    }, [foodObj]);

    const increament = () => {
        setCount(count + 1)
    } 
    const decreament = () => {
        if (count > 0) setCount(count - 1)
    } 
    return (
        <div className = 'container center'>
        <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={foodObj.img} style = {{width : 'auto', height : '300px'}}/>
            <Card.Body>
                <Card.Title>{foodObj.title}</Card.Title>
                <Card.Text>
                {foodObj.description}
                </Card.Text>
                <div>
                <button onClick = {() => {increament()}}>+1</button> &nbsp;
                <span style = {{width :"20px"}}>{count}</span> &nbsp;
                <button onClick = {() => {decreament()}}>-1</button> 
                </div>
<br></br>
    <Button variant="primary">Buy - {foodObj.price}</Button>
            </Card.Body>
        </Card>
        </div>
    );
}

export default FoodDetail;
