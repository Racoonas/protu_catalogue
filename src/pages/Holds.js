import allItems from "../data/AllItems.json"
import { useSearchParams } from "react-router-dom";
import { useState, useEffect} from "react";
import HoldsGrid from '../components/HoldsGrid';
import Filter from "../components/Filter";

function Holds() {  

  const [searchParams]  = useSearchParams();    

  const initialFilterState = {
    family: searchParams.get("family")||"All",
    size: searchParams.get("size")||"All",
    grip: searchParams.get("grip")||"All",
    complexity: searchParams.get("complexity")||"All"
  }
  
  const [filterState, setFilterState] = useState(initialFilterState);
  const [filteredItems, setFilteredItems] = useState(allItems);   
  
  
  useEffect(()=>{                  
      applyFilterToItems(filterState)
  },[filterState])

  return (
    <>      
      <Filter filterState={filterState} setFilterState={setFilterState}/>          
      <HoldsGrid items = {filteredItems}/>                
    </>      
  );

  function applyFilterToItems(filterParams){
      let newFilteredItems = allItems;        
      if (filterParams.family!=="All"){
        newFilteredItems = newFilteredItems.filter(pos => pos.family === filterParams.family)
      }
      if (filterParams.size!=="All"){
        newFilteredItems = newFilteredItems.filter(pos => pos.size.split(",").includes(filterParams.size))
      }
      if (filterParams.grip!=="All"){
        newFilteredItems = newFilteredItems.filter(pos => pos.grip.split(",").includes(filterParams.grip))
      }
      if (filterParams.complexity!=="All"){
        newFilteredItems = newFilteredItems.filter(pos => pos.complexity.split(",").includes(filterParams.complexity))
      }
      setFilteredItems(newFilteredItems)
  }

}

export default Holds;
