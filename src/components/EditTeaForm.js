import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditTeaForm (props) {
  const { tea } = props;

  function handleEditTeaFormSubmission(e) {
    e.preventDefault();
    props.onEditTea({
      name: e.target.name.value,
      brand: e.target.brand.value,
      price: e.target.price.value,
      flavor: e.target.flavor.value,
      pints: e.target.pints.value
    })
  }

  return (
    <>
      <ReusableForm 
        formSubmissionHandler = {handleEditTeaFormSubmission}
        tea = {tea}
        buttonText = "Update Tea"
      />
    </>
  )
}

EditTeaForm.propTypes = {
  tea: PropTypes.object,
  onEditTea: PropTypes.func
};

export default EditTeaForm;