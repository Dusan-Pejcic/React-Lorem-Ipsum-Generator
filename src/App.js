import { useState, useEffect } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input type="number" name='amount' id='amount' value={count} onChange={(e)=> setCount(e.target.value)}/>
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className="lorem-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, maiores distinctio. A illum, neque voluptatem non quia tempora expedita rem provident maxime accusantium excepturi at veniam beatae voluptatum totam dignissimos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, maiores distinctio. A illum, neque voluptatem non quia tempora expedita rem provident maxime accusantium excepturi at veniam beatae voluptatum totam dignissimos.</p>
      </article>
    </section>
  );
}

export default App;
