import './CostItem.css';
import CostDate from './CostDate.js'
import Card from '../UI/Card';
import React, {useState} from "react"
import './CostDate.css';

const CostItem = (props) => {

const [description, setDescription] = useState(props.description) // переменная про холодос и тд

const setDescriptionHandler = () => {
setDescription()
}

return (  
    <li>
    <Card className ='cost-item'>
        <CostDate date={props.date}/>
        <div className='cost-item__description'>
            <h2>{props.description}</h2>
            <div className='cost-item__price'>${props.amount}</div>
            </div>
{/* <button className='cost-date' onClick={setDescriptionHandler}>Изменить описание товара</button>    */}
    </Card>   
    </li>
    );
}
 
export default CostItem;
