import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import Courses from "./components/Courses";
import SingleCourse from "./components/SingleCourse";
import HookMain from "./components/Hook/HookMain";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contact />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/courses/:slug" element={<SingleCourse />} />
                    <Route path="/hook" element={<HookMain />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
