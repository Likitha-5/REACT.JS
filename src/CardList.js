import Card from "./Card"
function CardListUI() {
    const name="REACTJS";
    const college = "SVECW";
    const userObject = { branch: "AIDS", year: "4" };
    const users = ["LIKITHA", "HARSHI", "PRANATHI", "DIVYA", "DEEPU","LALLI"]
    return (
        <div className="container">
            <div className="row">
                    {
                        users.map(
                            (user, index) => (<Card key={index}
                                program={name}
                                col={college}
                                user={userObject}
                                userFromArray={user} />)
                        )


                    }
                </div>
            </div>
    );
}
export default CardListUI;