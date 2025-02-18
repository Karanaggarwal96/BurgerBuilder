import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Burger</h1>
        </header>
       <Layout>
         <BurgerBuilder/>
       </Layout>
      </div>
    );
  }
}

export default App;
