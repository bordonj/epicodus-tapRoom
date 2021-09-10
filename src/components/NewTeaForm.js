import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function NewTeaForm(props){
  function handleNewTeaFormSubmission(e) {
    e.preventDefault();
    props.onNewTeaCreation({
      name: e.target.name.value,
      brand: e.target.brand.value,
      price: e.target.price.value,
      flavor: e.target.flavor.value,
      pints: e.target.pints.value,
      id: v4()
    });
  }

  return (
    <>
      <ReusableForm 
        formSubmissionHandler = {handleNewTeaFormSubmission}
        buttonText="Add New Tea"
      />
    </>
  )
}

NewTeaForm.propTypes = {
  onNewTeaCreation: PropTypes.func,
};

export default NewTeaForm;