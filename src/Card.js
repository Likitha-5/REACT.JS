function Card(props){
    return(
        <div className="col-md-4">
        <div className="card" >
        <img  src="/women.jpg"/>
            <h3>Name:{props.userFromArray}</h3>
            <h3>Id:{props.user.branch}</h3>
            <h3>Place:{props.user.year}</h3>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button" class="btn btn-primary">Connect</button>
        </div>
        </div>
    );
}
export default Card;