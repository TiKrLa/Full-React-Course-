import React from 'react';
import ReactDom from 'react-dom';

// Nested Components, React Tools 

function BookList() {
 return (
  <section>
    <Book />
  </section>
  );
 }

 const Book = () => {
  return (
    <article>
      <Image></Image>
    </article>
    );
 };
 const Image = () => (
  <img 
    src='https://images-na.ssl-images-amazon.com/images/I/81GqtNbs%2BPL._AC_UL200_SR200,200_.jpg'
    alt=''
  />
 );

ReactDom.render(<BookList/>, document.getElementById('root')
);
