import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import './style.scss'
import Fetch from "./pages/fetch";
const App = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/news/:hostname'} element={<News/>}/>
            <Route path={'/fetch'} element={<Fetch/>}/>
        </Routes>
    );
};

export default App;