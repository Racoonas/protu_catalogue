import {Link} from "react-router-dom";

import FiveFingersLogo from '../img/Partners/5fingers.webp'
import HyperionLogo from '../img/Partners/Hyperion.webp'
import SpaceLogo from '../img/Partners/ClimbingSpace.webp'
import RockWellLogo from '../img/Partners/Rockwell.webp'
import OneTwoClimbLogo from '../img/Partners/12Climb.webp'

function Partners(){
    return (
        <>        
        <div className="breadcrumbs_wrapper">        
            <div className="breadcrumbs">
                <Link to= "/">Home </Link>/
                <Link to= "/partners"> Partners</Link>                     
            </div> 
        </div> 
        <div className='partners_title'>
            <h1>Partners and Friends</h1>
        </div>                    
        <div className="partners_wrapper">                    
             <div className='partners_item'>
                <a href = "https://www.5fingers.shop/">
                    <img src = {FiveFingersLogo} alt = ""/>
                </a>
                <span>
                    5Fingers Climbing holds is a manufacturer of high-quality climbing holds. <br/>
                    They offer a wide range of holds for all types of climbing, including bouldering and sport climbing.
                </span>
            </div>
            <div className='partners_item'>
                <a href = "https://www.climbingspace.com.ua/">
                    <img src = {SpaceLogo} alt = ""/>
                </a>
                <span>
                    Space Family consists of several modern Climbing Halls across Ukraine. <br/>
                    Space Family also offers full-cycle service for Climbing GYM owners, including holds, volumes, routesetting services and more. 
                </span>
            </div>
            <div className='partners_item'>
                <a href = "https://hyperion.kiev.ua/ua/">
                    <img src = {HyperionLogo} alt = ""/>
                </a>
                <span>
                    Hyperion is currently the largest Climbing Hall in Kyiv. <br/> 
                    Combining roped routes and modern bouldering gym, offering more than 1600 m&sup2; of climbing surfaces.
                </span>
            </div>           
            <div className='partners_item'>
                <a href = "https://www.rockwell.in.ua/">
                    <img src = {RockWellLogo} alt = ""/>
                </a>
                <span>
                    Rockwell engineers are the most talented Climbing Halls building company we know in Ukraine. <br/>
                    Not only building walls but also making top-quality mats, offering holds and providing routestting services.
                </span>
            </div>
            <div className='partners_item'>
                <a href = "https://www.12climb.com/">
                    <img src = {OneTwoClimbLogo} alt = ""/>
                </a>
                <span>
                    12Climb team was the first to build interactive walls in Ukraine. <br/>
                    They also provide climbers with 12Climb application for tracking the routes and personal progress. <br/>
                    12Climb app is widely used in the biggest climbing halls in Ukraine.
                </span>
            </div>            
        </div>          
        </>
    );
};
  
export default Partners;