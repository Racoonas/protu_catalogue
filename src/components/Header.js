import logoBig from '../img/logoBig.png'
import {NavLink} from 'react-router-dom';
import DropdownLink from './DropdownLink';

function Header(){         
    return (
        <>
            <div className="header">
                <div className = "inner_header">                
                    <div className = "logo_container">
                        <NavLink to ="/">
                            <img alt = "" src={logoBig}/>                            
                        </NavLink>
                    </div>                
                    <div className='navigation'>                                                
                        <div className='navigation-item'>
                            <NavLink to="/holds">Holds</NavLink>
                        </div>
                        <div className='navigation-item'>                        
                        <DropdownLink className='navigation-dropdown'
                            title = "Projects"
                            options = {[
                                {title:"Plastic", href:"/plastic"},
                                {title:"Walls", href:"/walls"},
                                {title:"Trophies", href:"/trophies"}
                            ]}                            
                            />
                        </div>
                        <div className='navigation-item'>
                        <DropdownLink className='navigation-dropdown'
                            title = "About"
                            options = {[
                                {title:"Evolution", href:"/evolution"},
                                {title:"People", href:"/people"},
                                {title:"Technology", href:"/technology"}
                            ]}/>                        
                        </div>
                        <div className='navigation-item'>
                            <NavLink to="/partners">Partners</NavLink>
                        </div>                        
                    </div>                
                </div>
            </div>       
      </>
    )
}

export default Header;
