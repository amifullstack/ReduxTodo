import React, { Component } from 'react';

// Components
import Home from './Components/Home/Home'
import ListContainerExp from './Components/List/ListContainer';
import ArticleForm from './Components/ArticleForm/ArticleForm';



// css
import './App.css'

// tmp redux
// import Store from './store/index';
// import {addArticle, addCounter} from './actions/index';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    // window.store = Store;
    // window.addArticle = addArticle;
    // window.addCounter = addCounter;    
    
    const articles = this.props.state.articles.map(el => el);
    // console.log(articles);

    
    return(
      <div className="App">        
        <p>App. </p>
        
        <ListContainerExp/>        
        <ArticleForm/>
        <Home/>
      </div>
    )
  }
}

export default App;