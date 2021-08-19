import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';
const books = [
{ id:1,
  img: 'https://images-na.ssl-images-amazon.com/images/I/81GqtNbs%2BPL._AC_UL200_SR200,200_.jpg',
  title: 'Billy Summers',
  author: 'Stephen King, Paul Sparks',
},
{
  id:2,
  img: 'https://m.media-amazon.com/images/I/81BC-VqUZfL._AC_UY327_FMwebp_QL65_.jpg',
  title: 'The Housekeeper',
  author: 'Natalie Barelli',
 },
{
  id:3,
  img: 'https://m.media-amazon.com/images/I/61-fpk2vo8L._AC_UL480_FMwebp_QL65_.jpg',
  title: 'The Perfect Wife',
  author: 'Blake Pierce',
 },
];

function BookList() {
 return (
 <section className='booklist'>
   {books.map((book,index) => {
     return <Book key={book.id} {...book}></Book>;
 })}
 </section>
 );
}

const Book = ({img,title,author}) => {
  // attribute, eventHandler 
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className='book' onMouseOver={()=>{
    console.log();
    }}>
     <img src={img} alt=''/>
     <h1 onClick={()=> console.log(title)}>{title}</h1>
     <h4>{author}</h4>
     <button type="button" onClick={clickHandler}>
       reference example
     </button>
     <button type="button" onClick={() => complexExample(author)}>more 
     complex example</button>
    </article>
    );
 };
 
ReactDom.render(<BookList/>, document.getElementById('root')
);
