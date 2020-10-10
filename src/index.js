import React from 'react'
import ReactDom from 'react-dom'

//Import CSS
import './index.css'

import {books} from './books'
import Book from './Book'

//JSX Rules
//return single elements
//div/ section/ article or Fragment
//use camelCase for html attributes
//className for class
//close every element
//formating

function BookList(){
  return (
    <section className="booklist">
      {books.map((book, index)=> {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList/>, document.getElementById('root'));
