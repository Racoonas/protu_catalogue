//using https://react-bootstrap.netlify.app/docs/components/dropdowns/

import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';

function DropdownLink({title, options, style, onClick}) {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {        
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}      
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({
      children, 
      style, 
      className,
      'aria-labelledby': labeledBy 
    }, ref) => {
      const [value, setValue] = useState('');
  
      return (
        <div onClick={onClick}
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >         
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );

  return(
    <Dropdown >
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">{title}</Dropdown.Toggle>            
        <Dropdown.Menu as={CustomMenu}>
          {options.map((option, index)=>{
            return <Dropdown.Item 
                      style={style}
                      as = {NavLink}
                      key = {index} 
                      to={option.href}                    
                      eventKey={index}> {option.title} 
                  </Dropdown.Item>
          })
        }
        </Dropdown.Menu>            
    </Dropdown>
  );
}

export default DropdownLink;