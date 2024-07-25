import Likithali from "./likitha";
function Likitha(){
    const college="svecw";
    const branch="AIDS";
    const  year="4";
    const people=["LI","KI","TH","AI","LO","VE","UH"];
    return(
        <div className="container">
        <div className="row">
            {
                people.map((data,index)=>(<Likitha key={index}
                    col={college}
                    bra={branch}
                    yr={year}
                    pep={data}/>)
                )
            }
        </div>
        </div>
    );
}
export default Likitha;