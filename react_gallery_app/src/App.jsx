import { useEffect, useState } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";

import './App.css'

// Import API
import apiKey from './config.js'

// Import App Components
import Search from "./components/Search.jsx";
import Nav from "./components/Nav.jsx";
import PhotoList from "./components/PhotoList.jsx";

function App() {
  // console.log(apiKey);

  const [photos, setPhotos] = useState([]);

  const fetchData = (query) => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => setPhotos(responseData))
    .catch(error => console.log("Error fetching and parsing date", error));
  }

  return (
    <div className="container">
      
        {/* Render Search and Nav components so they are visible on all routes. */}
        <Search />
        <Nav />

        {/* Set up your <Routes> and <Route> components. */}
        <Routes>
            {/* / - Home route: when visiting the home route, 
            the user should be redirected to the first static route. */}
            <Route path="/" element={<Navigate replace to="/cats" />} />

            {/* 3 static routes for default topics, 
            for example /cats, /dogs and /computers. 
            These will be used in the navigation component, 
            feel free to customize these topics. 
            These should render the PhotoList component. */}
            <Route path="/cats" element={<PhotoList />} />
            <Route path="/dogs" element={<PhotoList />} />
            <Route path="/computers" element={<PhotoList />} />

            {/* /search/:query - route to handle user search queries.
            This should render the PhotoList component. */}
            <Route path="/search/:query" element={<PhotoList />} />
        </Routes>
  </div>
  )
}

export default App
