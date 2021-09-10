import React from "react";
import PropTypes from 'prop-types';

function TeaDetail(props){
  const {tea} = props;

  let pints = tea.pints === 0 ? "Out of Stock" : tea.pints;


  return (
    <>
      <h2><b>Name:</b> {tea.name}</h2>
      <h3><b>Brand:</b> {tea.brand}</h3>
      <h3><b>Price:</b> {tea.price}</h3>
      <h3><b>Flavor:</b> {tea.flavor}</h3>
      <h3><b>Pints Left:</b> {pints}</h3>

    </>
  )

}

TeaDetail.propTypes = {
  tea: PropTypes.object,
};

export default TeaDetail;