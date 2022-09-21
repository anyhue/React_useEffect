import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("running");
  useEffect(() => {
    console.log("Call the API");
  }, []);
  useEffect(() => {
    if (keyword !== "") {
      console.log("Searching", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Seach"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click ME!</button>
    </div>
  );
}

export default App;
