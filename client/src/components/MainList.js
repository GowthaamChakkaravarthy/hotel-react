import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useHistory } from 'react-router-dom';


const mainMenuList = [
	{id : 1, type : 'veg', img : require('../images/menu_veg.jpg').default, title : 'Veg', description : 'Some quick example text to build on the card title and make up the bulk of contentA food that becomes moistened by having a flavorful.' },
	{id : 2, type : 'non-veg', img : require('../images/briyani.jpg').default, title : 'Non Veg', description : 'A food that was scalded in boiling water and then moved to cold water to stop cooking. Results in a softened texture..' }
]; 
const MainList = (props) => {
	let history = useHistory();
	return (
		<>
		<div className ='header'> <h3> Amazing Food Court </h3> </div>
		<div className='container center'>
			{
				mainMenuList.map((item) => {
					return (
					<Card key = {item.id} style={{ width: '20rem', float: 'left', marginRight : "20px"  }}>
						<Card.Img variant="top" src={item.img} style = {{width : 'auto', height : '250px'}}/>
						<Card.Body>
							<Card.Title>{item.title}</Card.Title>
							<Card.Text>
								{item.description}
							</Card.Text>
							<Button variant="primary" onClick = {() => {history.push({pathname : '/sublist', state : { 'type' : item.type }, key : item.id})}}>Pick</Button>
						</Card.Body>
					</Card>
					)
				})
			}
		</div>
		</>
	);
}

export default MainList;
