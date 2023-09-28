    import { BrowserRouter, Routes, Route } from "react-router-dom";
    
    import Home from "./pages/home/home";
    import About from "./pages/about/About";
    import Contact from "./pages/contact/Contact";
    import Gallery from "./pages/gallery/Gallery";
    import Plans from "./pages/plans/Plans";
    import Trainers from "./pages/trainners/Trainners";
    import NotFound from "./pages/notFound/NotFound";
import Navbar from "./components/Navbar";



    const App = () => {
    return (
    <div>
        <BrowserRouter>
        <Navbar>
        <Home />
        <About />
        <Contact />
        <Gallery />
        <Plans />
        <Trainers />
        <NotFound />
        </Navbar>
        </BrowserRouter>
    </div>
    )
    }

    export default App;
