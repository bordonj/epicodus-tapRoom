import React from "react";
import NewTeaForm from "./NewTeaForm";
import TeaList from "./TeaList";

class TeaControl extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTeaList: [],
    };
  }
  render(){
    let empty = null;
    if (this.state.masterTeaList.length === 0) {
      empty = <h3>No Teas Yet</h3>
    }

    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTeaForm />
      buttonText = "Return to Tea List";
    } else {
      currentlyVisibleState = 
      <TeaList
        teaList = {this.state.masterTeaList}
        onTeaSelection = {this.handleChangingSelectedTea}
      />;
      buttonText = "Add Tea";
    }

    return (
      <>
        {empty}
        {currentlyVisibleState}
        <button className ="btn btn-primary" onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}

export default TeaControl;