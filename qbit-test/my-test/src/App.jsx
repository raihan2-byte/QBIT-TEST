import "./App.css";

import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import NotFound from "./Pages/Notfound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <section>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
