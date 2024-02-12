import { useEffect, useState } from 'react'
import { Route, Routes, Navigate, useNavigate, useLocation } from "react-router-dom";

import './App.css'

// Import API
import apiKey from './config.js'

// Import App Components
import Search from "./components/Search.jsx";
import Nav from "./components/Nav.jsx";
import PhotoList from "./components/PhotoList.jsx";

function App() {

  // Set state variable for photos and queries
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("")

  // useNavigate hook
  const navigate = useNavigate();

  // useLocation hook
  const location = useLocation();

  // Create a fetchData function that will handle the fetch requests.
  const fetchData = (query) => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => setPhotos(responseData.photos.photo))
    .catch(error => console.log("Error fetching and parsing date", error));
  }

  // useEffect Hook
  useEffect(() => {
    // Get the path location to display the appropriate photos
    let path = location.pathname.substring(1);
    if (path === "cats") {
      fetchData("cats");
    } else if (path === "dogs") {
      fetchData("dogs");
    } else if (path === "computers") {
      fetchData("computers");
    } 
  }, [location]);

  // Create a handler that is triggered when the form is being submitted.
  const handleQueryChange = (searchText) => {
    setQuery(searchText);
    // Call the fetchData function and pass it the query entered by the user.
    fetchData(searchText);
    // Redirect the user to the /search/:query route. In the Nav component, set up your links using the <NavLink> component.
    navigate(`/search/${searchText}`);
  }

  return (
    <div className="container">
      
        {/* Render Search and Nav components so they are visible on all routes. */}
        <Search changeQuery={handleQueryChange} />
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
            <Route path="/cats" element={<PhotoList data={photos} title={'cats'}/>} />
            <Route path="/dogs" element={<PhotoList data={photos} title={'dogs'}/>} />
            <Route path="/computers" element={<PhotoList data={photos} title={'computers'}/>} />

            {/* /search/:query - route to handle user search queries.
            This should render the PhotoList component. */}
            <Route path="/search/:query" element={<PhotoList data={photos} title={`query`}/>} />
        </Routes>
  </div>
  )
}

export default App