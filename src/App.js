import Header from "./components/header/header/Header";
import Navbar from "./components/navbar/Navbar";
import Content from "./components/content/Content";

import "./app.css";

function App() {
  return (
    <>
      <main>
        <Header />
        <div className="main__content">
          <Navbar />
          <Content />
        </div>
      </main>
    </>
  );
}

export default App;
