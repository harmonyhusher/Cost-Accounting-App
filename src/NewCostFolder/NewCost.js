import CostForm from './CostForm';
import './NewCost.css';
import React,{useState} from 'react';

const NewCost = (props) => {
    
    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        props.onAddCost(costData)
        console.log(costData)
    }

    const [isFormVisible, setFormVisible] = useState(false)

    const formHiderHandler = (e) => {
        setFormVisible(true)
    }

    
    const formHiderFalseHandler = (e) => {
        setFormVisible(false)
    }

    return (  
<div className="new-cost">
    {!isFormVisible && <button onClick={formHiderHandler}> Добавить новый расход </button>}
    {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onCancel={formHiderFalseHandler}/>}
</div> );
}
 
export default NewCost;