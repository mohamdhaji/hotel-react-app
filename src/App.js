import "./App.css";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter basename="/hotel-react-app/">
      <Routes />
    </BrowserRouter>
  );
}

export default App;
