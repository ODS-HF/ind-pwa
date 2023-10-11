import { BrowserRouter } from "react-router-dom";
import "./App.css";
import InternalRoutes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <InternalRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
