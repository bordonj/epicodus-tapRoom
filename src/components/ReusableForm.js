import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  // const startingName = props.merch ? props.merch.name : '';
  // const startingDescription = props.merch ? props.merch.description : '';
  // const startingQuantity = props.merch? props.merch.quantity : '';

  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          className="form-control"
          type='text'
          name='name'
          placeholder='Name' 
          // defaultValue={startingName}
        />
        <input
          className="form-control"
          type='text'
          name='brand'
          placeholder='brand' 
          // defaultValue={startingDescription}
        />
        <input
          className="form-control"
          type='text'
          name='price'
          placeholder='price' 
          // defaultValue={startingQuantity}
        />
        <input
          className="form-control"
          type='string'
          name='flavor'
          placeholder='flavor' 
          // defaultValue={startingQuantity}
        />
        <input
          className="form-control"
          type='string'
          name='pints'
          placeholder='pints' 
          // defaultValue={startingQuantity}
        />
          <button className="btn btn-warning" type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  tea: PropTypes.object
};

export default ReusableForm;