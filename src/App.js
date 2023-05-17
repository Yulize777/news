import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import './style.scss'
const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/news/:id'} element={<News/>}/>
        </Routes>
    );
};

export default App;