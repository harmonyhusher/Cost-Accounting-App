import React, {useState} from 'react'
import './CostForm.css'

const CostForm = (props) => {

    const [inputName, setInputName] = useState('')// первоначальное состояние
    const [inputSum, setInputSum] = useState('')// первоначальное состояние
    const [inputDate, setInputDate] = useState('')// первоначальное состояние

    const nameChangeHandler = (event) => { //объхект события
        setInputName(event.target.value)
    }

    const sumChangeHandler = (event) => { //объхект события
        setInputSum(event.target.value)
    }

    const dateChangeHandler = (event) => { //объхект события
        setInputDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            description: inputName,
            amount: inputSum,
            date: new Date(inputDate),
        };
        props.onSaveCostData(costData);
        setInputDate('')
        setInputName('')
        setInputSum('')
    };

    return ( 
    <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control"> <label>Название</label> <input type='text' value={inputName} onChange={nameChangeHandler}/> </div>
            <div className="new-cost__control"> <label>Сумма</label> <input type='number' value={inputSum} min='0.01' step='0.01' onChange={sumChangeHandler} /> </div>
            <div className="new-cost__control"> <label>Дата</label> <input type='date' value={inputDate} min='2019-01-01' step='2022-12-31' onChange={dateChangeHandler}/> </div>
            <div className="new-cost__actions"><button type="submit">Добавить расход</button></div>
            <div className="new-cost__actions"><button type="button" onClick={props.onCancel}>Отмена</button></div>
        </div>
    </form>
     );
}
 
export default CostForm;