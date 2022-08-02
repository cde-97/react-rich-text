import Editor from "./component/Editor";
import data from "./test/compress.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Editor data={data}></Editor>
    </div>
  );
}

export default App;
