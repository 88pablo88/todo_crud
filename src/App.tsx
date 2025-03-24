import "./App.css";
import { Suspense } from "react";
import { Loader } from "./components";
import { BrowserRouter } from "react-router";
import Navigation from "./routes/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Navigation />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
