import nopage_image from '../img/404Page.png'
import {NavLink} from 'react-router-dom';

function NoPage(){
        
    return (
        <>
            <div className='nopage_outer'>
                <div className='nopage_inner'>
                    <img src={nopage_image} alt = "404"/>
                    <span>Yikes! We couldn't find this page.</span><br/>
                    <span>But we can take you </span> 
                    <NavLink to="/">home</NavLink>                    
                </div>
            </div>            
        </>
    )
};
  
export default NoPage;