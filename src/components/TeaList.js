import React from "react";
import Tea from "./Tea";
import PropTypes from 'prop-types';

function TeaList(props){
  return(
    <>
      {props.teaList.map((tea) => 
        <Tea
          whenTeaClicked = {tea.onTeaSelection}
          name = {tea.name}
          brand = {tea.brand}
          price = {tea.price}
          flavor = {tea.flavor}
          id = {tea.id}
          key = {tea.id}
        
        />
      )}
    </>
  )
}

Tea.propTypes = {
  teaList: PropTypes.array,
  onTeaSelection: PropTypes.func
}

export default TeaList;