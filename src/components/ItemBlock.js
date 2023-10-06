function ItemBlock({item}){
    return(
        <div className = "item_block">
            <div className="item_image">
                <a href={`set/${item.key}`}>
                    <img  src = {item.images[0]} alt = ""/>            
                </a>
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