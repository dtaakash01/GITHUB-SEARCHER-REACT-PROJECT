import React, { Component } from 'react'; 
import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import axios from 'axios';
import './App.css';

class App extends Component{

  state = {
    users: [],
    loading: true
  }

  async componentDidMount() {
    const res = await axios.get('https://api.github.com/users');
    
    this.setState({
      users: res.data,
      loading: false
    });

  
  }


  render () {
  return (
    <div>
      <Navbar />
      <div className="container">
        <User loading={this.state.loading} users={this.state.users}/>
      </div>
     
    </div>
  );
  }
}

export default App;
