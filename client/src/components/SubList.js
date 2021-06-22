import React , { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SubList = (props) => {
    const location = useLocation();
    useEffect(() => {
        console.log(location)
        
    }, [location]);
    return (
        <div>
            subList 
        </div>
    );
}

export default SubList;
