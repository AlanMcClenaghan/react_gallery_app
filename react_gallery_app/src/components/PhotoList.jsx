import React from "react";

import Photo from "./Photo.jsx";

const PhotoList = () => {
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                <Photo />
                <Photo />
                <Photo />
                <Photo />
                {/* Not Found */}
                <li className="not-found">
                    <h3>No Results Found</h3>
                    <p>You search did not return any results. Please try again.</p>
                </li>
            </ul>
        </div>
    );
}

export default PhotoList;