import Card from "./Card"
function CardList() {
    //const name="DETAILS";
    const college = "SVECW";
    const userObject = { branch: "AIDS", year: "4" };
    const users = ["LIKITHA", "HARSHI", "PRANATHI", "DIVYA", "DEEPU","LALLI"]
    return (
        <div className="container">
            <div className="row">

                    {
                        users.map(
                            (data, index) => (<Card key={index}
                                //program={name}
                                col={college}
                                user={userObject}
                                userFromArray={data} />)
                        )


                    }
                    </div>
                </div>
    );
}
export default CardList;
