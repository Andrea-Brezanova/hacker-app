import "./App.css";
import React, { useState, useEffect} from "react";
import axios from 'axios'
// Components //
import DataFetching from "./posts/DataFetching";
import Search from "./Components/Search";


function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${search}`)
      .then((res) => {
        setPosts(res.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);

  return (
    <div className="App">
      <Search search={setSearch} />
      <DataFetching dataObj={posts} />
    </div>
  );
}

export default App;
