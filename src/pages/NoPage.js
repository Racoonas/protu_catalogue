import { useNavigate } from 'react-router-dom';
import nopage_image from '../img/404Page.png'

function NoPage(){

    const navigate = useNavigate();
    
    return (
        <>
            <div className='nopage_outer'>
                <div className='nopage_inner'>
                    <img src={nopage_image} alt = "404"/>
                    <span>Yikes! We couldn't find this page.</span><br/>
                    <span>But we can take you </span> 
                    <button onClick={()=>navigate(-1)}>back</button>
                </div>
            </div>            
        </>
    )
};
  
export default NoPage;