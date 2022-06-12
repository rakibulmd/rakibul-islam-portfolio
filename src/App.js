import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
    return (
        <div className="font-roboto bg-gradient-to-l from-primary via-accent to-secondary text-white">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/Home" element={<Home></Home>}></Route>
            </Routes>
        </div>
    );
}

export default App;
