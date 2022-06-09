import { useState, useEffect } from "react";
import Modal from "../helper/Modal";
import AdminLogin from "./AdminLogin";
import Structure from "./dashboard/Structure";

export default function Admin() {
  const [loggedIn, setloggedIn] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (localStorage["admin"]) {
      setData(JSON.parse(localStorage.getItem("admin")));
      setloggedIn(true);
    }
  }, []);

  const dataHandler = (details, log) => {
    setData(details);
    setloggedIn(log);
  };
  console.log("user is logged in: " + loggedIn);

  return (
    <>
      {loggedIn ? (
        <Structure/>
      ) : (
        <Modal show={true}>
          <AdminLogin data={dataHandler} />
        </Modal>
      )}
    </>
  );
}
