import "./Model.css";
import {useState} from "react"; 
export default function Popup({ children, visible, status }) {
    setTimeout(()=>visible(), 2000)
    if(!status)
    return null; 
  return (
    <div className="rounded-bottom p-1 position-fixed top-0 start-50 translate-middle-x d-flex modalWrapper bg-light justify-content-center align-items-center">
      {children}
    </div>
  );
}
