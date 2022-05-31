import img from "../assets/loading.gif";
export default function Loading(){
    return(
        <div className="container-fluid bg-light">
            <div className="container text-center p-5">
                <img src={img} alt="loading" className="img-fluid"/>
                </div>
        </div>
    )
}