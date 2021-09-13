import React from "react";
import PropTypes from 'prop-types';

function Tea(props){
  return (
    <>
      <div className="tea" onClick = {() => props.whenTeaClicked(props.id)}>
        <h2><b>Name:</b> {props.name}</h2>
        <h3><b>Brand:</b> {props.brand}</h3>
        <h3><b>Price:</b> {props.price}</h3>
        <h3><b>Flavor:</b> {props.flavor}</h3>
        <h3><b>Pints Left:</b> {props.pints}</h3>
        <hr />
      </div>
    </>
  )
} 

Tea.propTypes = {
  whenTeaClicked: PropTypes.func,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  flavor: PropTypes.string.isRequired,
  pints: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Tea;