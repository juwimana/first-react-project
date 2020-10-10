import React from 'react'

const Book = (props) => {
  //attribute, eventHandler
  //onClick, onMouse
  
  const clickHandler = () => {
    alert("Hello World")
  };

  const {img, title, author} = props;
  return <article className="Book" onMouseOver = {() => {
    console.log(title)
  }}>  
    <img src= {img} alt=""/>
    <h4>{title}</h4>
    <h5>{author}</h5>
    <button type="button" onClick={clickHandler}>Click Me</button>
  </article>
};

export default Book
