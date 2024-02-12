const Photo = ({id, server, secret, title}) => {

    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={`${title}`} />
                </li>
            </ul>
        </nav>
    );
}

export default Photo;