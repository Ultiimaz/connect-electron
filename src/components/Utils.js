import * as PropTypes from "prop-types";
import React from 'react';


export const Textbox = props => {
 return (<>
   <label htmlFor="email" className="mx-5">{props.label}</label>
   <input type={props.type} id="email" placeholder={props.label} onChange={props.onChange} className="w-full mx-5 p-1 rounded mb-5 border outline-none focus:border-black border-black"/>
 </>)
}
Textbox.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string
};


export const Button = props => {
  if(props.checking)
    return <button onClick={props.onClick} disabled={props.checking}>Loading</button>

  return <button onClick={props.onClick} className="" disabled={props.checking}>{props.children}</button>
}
Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  checking: PropTypes.bool
};

