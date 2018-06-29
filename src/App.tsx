import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {

    public state = {
        response: ""
    };

    public componentDidMount() {
        this.callApi()
        .then(res => this.setState({ response: res.content }))
        .catch(err => console.log(err));
    }

    public callApi = async () => {
        const response = await fetch("/hello");
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    }


  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.response}
        </p>
      </div>
    );
  }
}

export default App;
