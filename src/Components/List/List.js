import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const articles = this.props.articles;
    // console.log(articles.map(el => el.title))
    return(
      <div>
       <ul>         
         {articles.map(el => (
           <li key={el.id}>{el.title}</li>
         ))}
      </ul>
      </div>
    );
  }
};

export default List;
