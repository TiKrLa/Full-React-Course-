import React from 'react';
import ReactDom from 'react-dom';


// CSS
import './index.css';
// setup vars
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81GqtNbs%2BPL._AC_UL200_SR200,200_.jpg',
  title: 'Billy Summerssss',
  author: 'Stephen King, Paul Sparks',
};
const secondBook = {
  img: 'https://m.media-amazon.com/images/I/81BC-VqUZfL._AC_UY327_FMwebp_QL65_.jpg',
  title: 'The Housekeeper',
  author: 'Natalie Barelli',
};

function BookList() {
 return (
  <section className='booklist'>
    <Book 
      img={firstBook.img} 
      title={firstBook.title} 
      author={firstBook.author} 
    >
      <p>
        Lorem elit consectetur dolore qui elit duis dolore esse qui. 
        Eu ipsum ut sit non pariatur aute fugiat officia consequat duis. 
        Irure pariatur aliqua dolore id nisi fugiat eu proident amet ea. 
        Laboris dolor magna labore ea enim nostrud est. Quis nulla Lorem eiusmod ullamco sint eu quis dolore. Lorem pariatur aute Lorem do officia adipisicing est.
      </p>
    </Book>
    <Book 
      img={secondBook.img} 
      title={secondBook.title}
      author={secondBook.author} 
    />
  </section>
  );
}
const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className='book'>
     <img src={img} alt=''/>
     <h1>{title}</h1>
     <h4>{author}</h4>
    </article>
    );
 };
 
ReactDom.render(<BookList/>, document.getElementById('root')
);
