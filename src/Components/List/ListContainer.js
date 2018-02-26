import React from 'react';
import { connect } from 'react-redux';
import List from './List';

const mapStateToProps = state => {
  return { articles: state.article.articles }  
};

const ListContainer = ({ articles }) => {
  return(
    <List articles={articles}/>
  );
}
export default connect(mapStateToProps)(ListContainer);



