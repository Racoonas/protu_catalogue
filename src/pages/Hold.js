import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import allPositions from "../data/AllItems.json"

function Hold(){

    const navigate = useNavigate();
    
    const defaultHold = {
        key:0,
        family:"Family",
        set:"Set",
        size:"Size",
        grip:"Grip",
        complexity:"Complexity",
        quantity:0,
        price:0,
        images:[],
        description:""
    }

    const {id} = useParams();
    const [holdDetails, setHoldDetails] = useState(defaultHold);
    const [mainImage, setMainImage] = useState(defaultHold.images[0]);

    useEffect(()=>{
        let selectedSet = allPositions.filter(pos => pos.key === Number(id))[0];
        if (!selectedSet){
            navigate("404");
        }
        setHoldDetails(selectedSet);        
        setMainImage(holdDetails.images[0]);        
    }, [id, holdDetails.images])

    return (
        <>
          <div className="holdset_overview">
                <div className="breadcrumbs">
                    <Link to= "/">Home </Link>/
                    <Link to="/holds"> Holds </Link>/
                    <Link to= {`/holds?family=${holdDetails.family}`}> {holdDetails.family} </Link>/ {holdDetails.set}
                </div>
                <div className="holdset_name">
                    <h1>{holdDetails.set}</h1>                    
                </div>
                
                <div className="holdset_wrapper">
                    <div>
                        <div className="holdset_gallery_image">
                            <img src={mainImage} alt=""/>                        
                        </div>                
                        <div className="holdset_gallery">
                            {holdDetails.images.map((imageSrc, index)=>{
                                return (
                                    <div className="holdset_gallery_item" key={index}>
                                        <button onClick={()=>setMainImage(imageSrc)}>
                                            <img src={imageSrc} alt=""/>
                                        </button>
                                    </div>
                                )
                            })}                        
                        </div>    
                    </div>                    
                    <div className="holdset_details">
                        <h2>Details:</h2>
                        <div className="holdset_general_details">
                            <h3>Price: <span className="holdset_price">${holdDetails.price} </span> </h3>
                            <span>Family:</span> {holdDetails.family} <br/>
                            <span>Size:</span> {holdDetails.size} <br/>
                            <span>Griptype:</span> {holdDetails.grip} <br/>
                            <span>Complexity:</span> {holdDetails.complexity} <br/>
                            <span>Quantity:</span> {holdDetails.quantity} <br/>
                            <span>Shaped by:</span> {holdDetails.shaper} <br/>
                            <h3 style={{marginTop: "15px"}}><span>Description:</span></h3> {holdDetails.description} <br/>
                        </div>
                        <div className="holdset_technical_details">
                            <h3 style={{marginTop: "15px"}}> Technical sheet:</h3>
                            <span>Material:</span> {'Poly-Urethane (PU)'} <br/>
                            <span>Order code:</span> {holdDetails.orderCode} <br/>
                            <span>{'Weight (gr.):'}</span> {holdDetails.weight} <br/>
                            {/* <span>Bolt hole:</span> {holdDetails.boltLength===0?"":holdDetails.boltLength} <br/>                            
                            <i style={{fontSize: "0.9rem"}}>*NOTE: Specified bolt length does not include any wall thickness. Measure thickness of your walls and add it to the bolt length when ordering bolts.</i><br/> */}
                        </div>
                    </div>
                                    
                </div>
            </div>
        </>
    )    
}

export default Hold