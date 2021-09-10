import React from "react";
import PropTypes from 'prop-types';

function Tea(props){
  return (
    <>
      <div onClick = {() => props.whenTeaClicked(props.id)}>
        <h2>Name: {props.name}</h2>
        <h3>Brand: {props.brand}</h3>
        <h3>Price: {props.price}</h3>
        <h3>Flavor: {props.flavor}</h3>
        <h3>Pints Left: {props.pints}</h3>
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