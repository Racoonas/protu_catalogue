import logoBig from '../img/logoBig.png'
import {NavLink} from 'react-router-dom';
import Navigation from "./Navigation"

function Header(){          
    return (
        <>
            <div className="header">
                <div className = "inner_header">                
                    <Navigation/>
                    <div className = "logo_container">
                        <NavLink to ="/">
                            <img alt = "" src={logoBig}/>                            
                        </NavLink>
                    </div>
                </div>
            </div>       
      </>
    )
}

export default Header;
