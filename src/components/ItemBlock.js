import {NavLink} from 'react-router-dom';

function ItemBlock({item}){
    return(
        <div className = "item_block">
            <div className="item_image">
                <NavLink to ={`set/${item.key}`}>
                    <img  src = {item.images[0]} alt = ""/>            
                </NavLink>                
            </div>                            
            <div className="item_details">                
                <div className="item_name">
                    {item.quantity>1? "Set: " + item.set : "Hold: " + item.set} 
                </div>
                <div className="item_price">
                    {"Price: €" + item.price}
                </div>                
            </div>            
        </div>
    )
}

export default ItemBlock