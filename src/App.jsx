import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Router";
import BaseLayout from "./BaseLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <BaseLayout>
          <Router />
        </BaseLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
