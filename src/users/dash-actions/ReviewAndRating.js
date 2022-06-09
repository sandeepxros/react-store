import useFetch from "../../helper/useFetch";

export default function ReviewAndRating() {
  
  const[res, loading, err]= useFetch('http://localhost:5000/user');

  console.log(res); 
  console.log("loading: "+loading); 
  console.log("errr: "+ err); 

  return <>Reviews & Rating</>; 
}
