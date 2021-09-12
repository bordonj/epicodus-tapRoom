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
      editing: false,
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

  handleChangingSelectedTea = (id) => {
    const selectedTea = this.state.masterTeaList.filter(tea => tea.id === id)[0];
    this.setState({
      selectedTea: selectedTea
    });
  }

  handleDeletingTea = (id) => {
    const newMasterTeaList = this.state.masterTeaList
      .filter(tea => tea.id !== id);
    this.setState({
      masterTeaList: newMasterTeaList,
      selectedTea: null
    });
  }

  handleSellingTea = (tea) => {
    if (tea.pints > 0) {
      tea.pints--;
    }
    this.setState({
      selectedTea: tea
    });
  }

  handleEditClick = () => {
    this.setState({
      editing: true
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

    if (this.state.selectedTea != null) {
      currentlyVisibleState = 
      <TeaDetail
        tea = {this.state.selectedTea}
        onClickingDelete = {this.handleDeletingTea}
        onClickingEdit = {this.handleEditClick}
        onClickingSell = {this.handleSellingTea}
      />
      buttonText = "Return to Tea List";
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