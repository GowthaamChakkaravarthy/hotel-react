import React , { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import subListData from './jsonlist.js';


const SubList = (props) => {
    const location = useLocation();
    const history = useHistory();
    let type = location.state.type;
    useEffect(() => {
        console.log(location);        
    }, [location]);


    
    return (
		<div className='container'>
            <div className='header'>
                <h2 style = {{color:'#00FF00' }}>{type} - Recepies</h2>
            </div>
             <div className="container grid-container">
                <div className="row"> 
                {
                    subListData.filter((item, idx) => item.type === type).map((item) => {
                        return (
                            <div key = {item.id} className="col-12 col-md-6 col-lg-4">
                            <div className="card" style = {{width : '18rem', padding : '10px' }} 
                            onClick = {() => {history.push({pathname : '/fooddetail', state : { 'item' : item }, key : item.id})}}>
                                <img className="card-img-top" src={item.img} style = {{width : 'auto', height : '250px'}} alt="food" />
                                <span className = 'type' style = {{color:'#00FF00' }} > {item.type} </span>
                                <div className="card-body" style = {{padding : '5px' }}>
                                <div className="card-title"><h2>{item.title}</h2> <span> { item.price} </span></div>
                                <p className="card-text">{item.description}</p>
                                </div>
                            </div>
                            </div>
                        )
                    })
                }
            </div>                        
        </div>
		</div>
	);
}

export default SubList;
