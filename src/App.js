import Navbar from "./Components/Navbar";
import "./App.css";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar text="TextUtils" about="About" />
      <div className="container">
        <Textform />
      </div>
    </>
  );
}

export default App;
