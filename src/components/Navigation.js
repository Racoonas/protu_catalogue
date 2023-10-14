import { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {NavLink} from 'react-router-dom';
import DropdownLink from './DropdownLink';

function Navigation(){
    const darkBackground = {
        backgroundColor: 'var(--main-color)'
    }

    const [show, setShow] = useState(false);
    const target = useRef(null);

    const innerMenu =()=>{
            return (
            <>
                <div className='navigation-item'>
                    <NavLink to="/holds">Holds</NavLink>
                </div>
                <div className='navigation-item'>                        
                    <DropdownLink className='navigation-dropdown'
                        style = {darkBackground}
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
                        style = {darkBackground}
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
            </>            
        )
    }

    return (
        <div className='navigation_wrapper'>            
            <div className='mobile_navigation'>
                <button ref={target} onClick={() => setShow(!show)} />                                           
                    <Overlay target={target.current} show={show} placement="bottom" rootClose>
                        {({                        
                        placement: _placement,
                        arrowProps: _arrowProps,
                        show: _show,
                        popper: _popper,
                        hasDoneInitialMeasure: _hasDoneInitialMeasure,
                        ...props
                        }) => (
                        <div
                            {...props}
                            style={{
                            position: 'absolute',
                            backgroundColor: '#2B3036',
                            padding: '2px 10px',
                            color: 'white',
                            borderRadius: 3,
                            ...props.style,
                            }}
                        >
                            {innerMenu()}
                        </div>
                        )}
                    </Overlay>                
            </div>
            <div className='navigation'>
                <Navbar className='navbar-dark' bg = "navigation" collapseOnSelect>     
                    <Container>                    
                        <Navbar.Toggle aria-controls="responsiveNavbar"/>
                        <Navbar.Collapse id="responsiveNavbar" >
                            <Nav style={{ maxHeight: '180px'}}>
                                {innerMenu()}
                            </Nav>              
                        </Navbar.Collapse>  
                    </Container>                 
                </Navbar>
            </div>
        </div>
      );
    }
export default Navigation;