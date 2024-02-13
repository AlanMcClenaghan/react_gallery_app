import Photo from "./Photo.jsx";
import NotFound from "./NotFound.jsx";

const PhotoList = (props) => {

    const results = props.data;
    let photos;
    if (results.length > 0) {
        // Map over the data to render a Photo component for each image.
        // Make sure each Photo component gets a unique "key" prop and a prop containing the photo object.
        photos = results.map(photo => <Photo 
            key={photo.id} 
            id={photo.id} 
            server={photo.server} 
            secret={photo.secret}
            title={photo.title}/>);
    } else {
        {/* Not Found */}
        {/* No Matches Message - If no matches are found by the search, 
        display a friendly user message to tell the user there are no matches.
        */}
        photos = <NotFound />
    }

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {photos}
            </ul>
        </div>
    );
}

export default PhotoList;