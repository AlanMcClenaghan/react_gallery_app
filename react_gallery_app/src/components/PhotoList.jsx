import Photo from "./Photo.jsx";

const PhotoList = (props) => {

    const results = props.data;

    // Map over the data to render a Photo component for each image.
    // Make sure each Photo component gets a unique "key" prop and a prop containing the photo object.
    let photos = results.map(photo => <Photo 
        key={photo.id} 
        id={photo.id} 
        server={photo.server} 
        secret={photo.secret}
        title={photo.title}/>);

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {photos}
                {/* Not Found */}
                {/* <li className="not-found">
                    <h3>No Results Found</h3>
                    <p>You search did not return any results. Please try again.</p>
                </li> */}
            </ul>
        </div>
    );
}

export default PhotoList;