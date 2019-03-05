import React, { Component, Fragment } from 'react';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button'

const famille = {
  membre1: {
    nom: 'Maksym',
    age: 6
  },
  membre2: {
    nom: 'Luba',
    age: 42
  },
  membre3: {
    nom: 'Andriy',
    age: 45
  },
}

class App extends Component {
  state = {
    famille,
    isShow: false
  }

  handleClick = (num) => {
    const famille = { ...this.state.famille }
    famille.membre1.age += num
    this.setState({ famille })
  }
  handleChange = (event) => {
    const famille = { ...this.state.famille }
    const nom = event.target.value
    famille.membre1.nom = nom
    this.setState({ famille })
  }
  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({isShow})
  }

  render() {
    const { famille, isShow } = this.state
    return (
      <Fragment>
        <div className="App">
          <h1>React App</h1>
          <input value={famille.membre1.nom} onChange=
          {this.handleChange} type='text'/>
          <p>Bounjours Monsieur</p>
          <Membre 
            age={famille.membre1.age}
            nom = {famille.membre1.nom}/>
          <Membre
            age={famille.membre2.age} 
            nom = {famille.membre2.nom}/>
          <Membre 
            age={famille.membre3.age}
            nom = {famille.membre3.nom}>
            {
             isShow ? <strong>We are the best !</strong> : null
            }
            <button onClick={this.handleShowDescription}>
            {
              isShow ? "Cacher" : 'Montrer'
             }
             </button>
          </Membre>
          <Button
          vieillir={() => this.handleClick(2)}/>
          
        </div>
      </Fragment>
    );
  }
}

export default App;
