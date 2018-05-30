import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// import json from './a.json';

class App extends Component {
  constructor() {
    super();

    this.state = { data : [] };
  }

  componentDidMount() {
    fetch('http://localhost:3001/posts', {
      method: 'GET',
      headers:{
        'Accept': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json.data
        });
      })
      .catch((error) => {
        console.error(error);
      });
      // this.setState({data:json});
  }

  render() {
    return (
      /*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      */
      /*
      <div className="App">
        <ul>
          {this.state.posts.map(post => <li>
            <h2>{post.id}</h2>
            <p>{post.name}</p>
          </li>)}
        </ul>
      </div>
      */
      <div className="App">
        {
          this.state.data.map((dat, key) => 
            <div>
             {dat.name}
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
