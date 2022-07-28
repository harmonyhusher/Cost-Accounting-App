import CostsDiagram from './CostsDiagram';
import './Costs.css'
import Card from '../UI/Card';
import CostsFilter from "./CostsFilter";
import React,{useState} from "react";
import CostList from "./CostList";

const AllCosts = (props) => {

    const[selectedYear, setSelectedYear] = useState('')

    const yearChangeHandler = (year) => {
        setSelectedYear(year)
    }

    const filteredYear = props.costs.filter(cost =>{
        return cost.date.getFullYear().toString() === selectedYear
    })



    return ( 
        <div>
        <Card className="costs">
        <CostsFilter year={selectedYear} onYearSet={yearChangeHandler}/>
        <CostsDiagram costs={filteredYear}/>
        <CostList costs={filteredYear}/>
        </Card>
        </div>
     );
}
 
export default AllCosts;