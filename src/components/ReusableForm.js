import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const startingName = props.tea ? props.tea.name : '';
  const startingBrand = props.tea ? props.tea.brand : '';
  const startingPrice = props.tea? props.tea.price : '';
  const startingFlavor = props.tea? props.tea.flavor : '';
  const startingPints = props.tea? props.tea.pints : '';

  return (
    <>
      <div className='tea-form'>
        <form onSubmit={props.formSubmissionHandler}>
          <input
            className="form-control"
            type='text'
            name='name'
            placeholder='name' 
            required
            defaultValue={startingName}
          />
          <input
            className="form-control"
            type='text'
            name='brand'
            placeholder='brand' 
            required
            defaultValue={startingBrand}
          />
          <input
            className="form-control"
            type='text'
            name='price'
            placeholder='price' 
            required
            defaultValue={startingPrice}
          />
          <input
            className="form-control"
            type='string'
            name='flavor'
            placeholder='flavor' 
            required
            defaultValue={startingFlavor}
          />
          <input
            className="form-control"
            type='string'
            name='pints'
            placeholder='pints' 
            required
            defaultValue={startingPints}
          />
            <button className="btn btn-warning" type='submit'>{props.buttonText}</button>
        </form>
      </div>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  tea: PropTypes.object
};

export default ReusableForm;