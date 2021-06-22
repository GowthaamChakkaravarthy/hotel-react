import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom';


const mainMenuList = [
	{id : 1, type : 'veg', img : require('../images/menu_veg.jpg').default, title : 'Veg', description : 'Some quick example text to build on the card title and make up the bulk of content.' },
	{id : 2, type : 'non-veg', img : require('../images/menu_veg.jpg').default, title : 'Non Veg', description : 'Some quick example text to build on the card title and make up the bulk of  content.' }
]; 
const MainList = (props) => {
	let history = useHistory();
	return (
		<div className='container center'>
			{
				mainMenuList.map((item) => {
					return (
					<Card key = {item.id} style={{ width: '20rem', float: 'left', marginRight : "20px"  }}>
						<Card.Img variant="top" src={item.img} />
						<Card.Body>
							<Card.Title>{item.title}</Card.Title>
							<Card.Text>
								{item.description}
							</Card.Text>
							<Button variant="primary" onClick = {() => {history.push({pathname : '/sublist', state : { 'type' : item.type }, key : item.id})}}>Go somewhere</Button>
						</Card.Body>
					</Card>
					)
				})
			}
		</div>
	);
}

export default MainList;
