import "./App.css";
import RowButton from "./components/RowButton";
import RowBuilder from "./components/RowBuilder";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <RowBuilder />
          <RowButton />
        </div>
        <div className="col-md-6">live view</div>
      </div>
    </div>
  );
}

export default App;
