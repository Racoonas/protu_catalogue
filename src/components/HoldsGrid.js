import ItemBlock from "../components/ItemBlock";
import { useState } from "react";

function HoldsGrid({items}){                

  const [numOfDisplayed, setNumOfDisplayed] = useState(8);

  const loadMore = ()=>{
    setNumOfDisplayed(numOfDisplayed+8)
  }

  const slicedItems = items.slice(0,numOfDisplayed);

    return (      
      <>        
        <div id='totalItemsCounter' className='items_counter'>
            <span> Found: {items.length} sets</span>            
        </div>
        <div className='divider'>            
        </div>
        <div className="holds_grid">
          {slicedItems.map((pos)=>{
              return <ItemBlock item = {pos} key={pos.key}/>
          })}
        </div>        
        <div id='displayedItemsCounter' className='items_counter'>
            <span> Showing: {slicedItems.length}/{items.length} sets</span>            
        </div>
        {slicedItems.length<items.length && <button onClick={loadMore} id='showMoreButton' className="load_more_button">SHOW MORE</button>}                
      </>
    )    
}

export default HoldsGrid;