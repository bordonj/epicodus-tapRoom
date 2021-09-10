import React from "react";
import NewTeaForm from "./NewTeaForm";
import TeaList from "./TeaList";
import TeaDetail from "./TeaDetail";

class TeaControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTeaList: [],
      selectedTea: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedTea != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTea: null,
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewTea = (newTea) => {
    const newMasterTeaList = this.state.masterTeaList.concat(newTea);
    this.setState({
      masterTeaList: newMasterTeaList,
      formVisibleOnPage: false
    });
  }

  render(){
    let empty = null;
    let buttonText = null;
    let currentlyVisibleState = null;

    if (this.state.masterTeaList.length === 0) {
      empty = <h3>No Teas Yet</h3>
      buttonText = "Add new Tea";
    }

    if (this.state.selectedDetail != null) {
      currentlyVisibleState = 
      <TeaDetail
        tea = {this.state.selectedTea}
      />
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewTeaForm 
        onNewTeaCreation={this.handleAddingNewTea}
      />
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
      <React.Fragment>
        {empty}
        {currentlyVisibleState}
        <button className = "btn btn-primary" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default TeaControl;