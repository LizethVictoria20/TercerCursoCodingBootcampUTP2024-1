import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search ')
    .then((response) => response.json())
    .then((data) => {
      setData(data)
      console.log(data[0].url)
    } );
  }, []);

  return (
    <div className="App">
      <h1>Little cats</h1>
      <p>{ data?.map((gatitos) => (<img src={data[0].url} key={data.id} />)) }</p>
    </div>
  );
}

export default App;
