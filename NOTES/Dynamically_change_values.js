////////////////////////////////// COMPONENT ////////////////////////////////////////////
import React from 'react';
import './Person.css'

const Person = (props) => {
    return (
    <div className="Person">
        <h3>My name is {props.name} and I'm {props.age} years old.</h3>
        <a onClick ={props.delete}>DELETE</a>
        <input type="text" onChange={props.change} value={props.name}/>
    </div>
    );
};

export default Person;
//////////////////////////////////////////////////////////////////////////////////////////

import React, { Component } from 'react';
import './App.css';


//components
import Person from './Person/Person';

class App extends Component{

  state = {
    persons: [
      {name: 'Karan', age: 26, id: 1},
      {name: 'Kajol', age: 27, id: 2},
      {name: 'Peppy', age: 10, id: 3},
    ],
    showPersons: true
  }; 

  deletePersonHandler = (index) => {
    //slice simply makes a copy of the array
    // const modifiedPersons = this.state.persons.slice();
    //or use the spread operator
    const modifiedPersons = [...this.state.persons];
    modifiedPersons.splice(index, 1);
    this.setState({ persons: modifiedPersons });
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: this.state.showPersons ? false : true
    });
  };

/////////////////////////////////////////////////////////////////
  nameChangeHandler = (event, id) => {
    //getting the specific element
    const index = this.state.persons.findIndex((el) => {
      return el.id == id; //if the ID matched, it returns INDEX of the same
    });
    //making a copy of that person by
    //referencing index of element being changed 
    const changeThisPerson = {
      ...this.state.persons[index]
    };
    //assigning the value entered by the user
    changeThisPerson.name = event.target.value;
    //updated array:
    const updatedArray = [...this.state.persons];
    updatedArray[index] = changeThisPerson;

    this.setState({
      persons: updatedArray
    })
  };
/////////////////////////////////////////////////////////////////
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
      persons = ( //for loop
        <div> 
          {this.state.persons.map((person, index) => {
            return <Person 
              delete={() => this.deletePersonHandler(index)} 
              name={person.name}
              age={person.age}
              key={index}
              change={(event) => this.nameChangeHandler(event, person.id)}>
              </Person> 
              //need to specify a key for react to keep track
          })}
        </div>
      );
    } 

    return (
      <div className="App">
        
        <h1>You're seeing me from Root Component!</h1>
        <button
          onClick={this.togglePersonHandler}
          style={style}
          className="button">
          HIDE ALL!
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
