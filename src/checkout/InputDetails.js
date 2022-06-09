import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import Selector from "./Selector";
import {States} from "./States"; 
export default function InputDetails() {
  return (
    <>
      <form>
        <div className="row g-3">
          <InputField
            css="col-sm-6"
            type="text-field"
            label="Name"
            name="Name"
          />
          <InputField
            css="col-sm-6"
            type="tel"
            label="Mobile No"
            name="Mobile No"
          />
          <InputField
            css="col-md-6"
            type="text-field"
            label="address"
            name="Address"
          />
          <InputField
            css="col-md-6"
            type="text-field"
            label="address"
            name="Address Line 2"
          />
          <Selector data={States}/>
          <InputField
            css="col-md-2"
            type="text"
            label="pincode"
            name="Pincode"
          />
          <InputField
            css="col-md-2"
            type="text"
            label="Landmark"
            name="Landmark"
          />
            <InputField
            css="col-md-2 mb-3"
            type="text"
            label="alternate"
            name="Alternate No"
          />
        </div>
        <button className="btn btn-dark">Save & Deliver</button> 
      </form>
    </>
  );
}
