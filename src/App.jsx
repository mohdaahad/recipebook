import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";

function App() {
  return (
    <>
      <BrowserRouter basename="/recipebook">
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
