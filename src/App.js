import AllCosts from "./components/AllCosts";
import NewCost from "./NewCostFolder/NewCost";
import React,{useState} from "react";

const INITIAL_COSTS = [

]

function App() {

  const [costs, setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  }

  return (

    <div>
        <NewCost onAddCost={addCostHandler}/>
        <AllCosts costs={costs}/>
      
   {/* <CostItem date={costs[0].date} description={costs[0].description} amount={costs[0].amount}/>
   <CostItem date={costs[1].date} description={costs[1].description} amount={costs[1].amount}/>
   <CostItem date={costs[2].date} description={costs[2].description} amount={costs[2].amount}/> */}
   

    </div>
  );
}

export default App;
