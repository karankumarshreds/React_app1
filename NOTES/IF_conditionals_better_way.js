import React, { Component } from 'react';
import './App.css';


//components
import Person from './Person/Person';

class App extends Component{

  state = {
    persons: [
      {name: 'Karan', age: 26},
      {name: 'Kajol', age: 27}
    ],
    showPersons: true
  }; 

  switchNameHandler = () => {
    // DONT DO THIS: this.state.persons[0].name = 'Missisipi';
    //It will merge original and not touch anything else
    this.setState({
      persons:[
        {name: 'Narak', age: 62},
        {name: 'Lojak', age: 72}
      ]
    });
  };

  onChangeHandler = (input) => {
    this.setState({
      persons:[
        {name: input.target.value, age: 62},
        {name: 'Lojak', age: 62}
      ]
    });
  }; 

  togglePersonHandler = () => {
    this.setState({
      showPersons: this.state.showPersons ? false : true
    });
  };

  render() {

    //inline CSS
    const style = {
      backgroundColor: 'teal',
      font: 'inherit',
      border: '1px solid aquamarine',
      padding: '8px',
      color: 'white',
      borderRadius: '3px',
      cursor: 'pointer'
    }

    let persons = null;
    //Since render function always runs
    if(this.state.showPersons){
      persons = (
        <div>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          func={this.switchNameHandler}
          func2={this.onChangeHandler}>
          CLick to change names. </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}> 
          CLick to change names. </Person>
        </div>
      );
    } 

    return (
      <div className="App">
        
        <h1>You're seeing me from Root Component!</h1>
        <button 
          onClick={this.togglePersonHandler}
          style={style}>
          Switch Names
        </button>

        {persons}

    </div>     
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi there, you miss me?</h1>
//       <Person age="28"> My age is </Person>
//       <Person age="35"> My age is </Person>
//       <Person age="19"> My age is </Person>
//     </div>
//   );
// }

export default App;
