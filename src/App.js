import { useState } from 'react';
const url = 'https://hipsum.co/api/?type=hipster-centric&paras=20';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async ()=> {
    setLoading(true);
    const response = await fetch(url);
    const fetchedData = await response.json();
    let amount = parseInt(count);
    setText(fetchedData.slice(0, amount));
    setLoading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  }

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>

      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" name='amount' id='amount' min="1" max="20" value={count} onChange={(e)=> setCount(e.target.value)}/>
        <button type='submit' className='btn'>generate</button>
      </form>

      <article className="lorem-text">
        {loading && <p>loading...</p>}
        {text.map((paragraph, index)=> {
          return (<p key={index}>{paragraph}</p>)
        })}
      </article>
    </section>
  );
}

export default App;
