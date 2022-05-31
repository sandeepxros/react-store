import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import Selector from "./Selector";
export default function InputDetails() {
  const [countries, setCountry] = useState(null);
  const [city, setCity] = useState(null); 
  useEffect(() => {
    fetch(`https://countriesnow.space/api/v0.1/countries/positions`)
      .then((res) => res.json())
      .then((data) => setCountry(data.data))
      .catch((error) => alert("error buddy: " + error));
  }, []);
   useEffect(() => {
    fetch(`https://countriesnow.space/api/v0.1/countries/population/cities`)
      .then((res) => res.json())
      .then((data) => setCity(data.data))
      .catch((error) => alert("error buddy: " + error));
  }, countries);
  return (
    <>
      <form>
        <div className="row g-3">
          <InputField
            css="col-sm-6"
            type="text-field"
            label="firstName"
            name="First name"
          />
          <InputField
            css="col-sm-6"
            type="text-field"
            label="lastName"
            name="Last name"
          />
          <InputField
            css="col-12"
            type="text-field"
            label="address"
            name="Address"
          />
          <InputField
            css="col-12"
            type="text-field"
            label="address"
            name="Address Line 2"
          />
          <Selector countries={countries}/>
        </div>
      </form>
    </>
  );
}
