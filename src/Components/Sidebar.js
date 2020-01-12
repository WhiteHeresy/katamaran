import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function Sidebar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="wholeSidebar">
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

      <select class="selectSidebar">
        <option>Select an attribute to filter by</option>
        <option>Apples</option>
        <option>Bananas</option>
        <option>Grapes</option>
        <option>Oranges</option>
      </select>
      <select class="selectSidebar">
        <option>Select an attribute to filter by</option>
        <option>Apples</option>
        <option>Bananas</option>
        <option>Grapes</option>
        <option>Oranges</option>
      </select>
      <select class="selectSidebar">
        <option>Select an attribute to filter by</option>
        <option>Apples</option>
        <option>Bananas</option>
        <option>Grapes</option>
        <option>Oranges</option>
      </select>
      <select class="selectSidebar">
        <option>Select an attribute to filter by</option>
        <option>Apples</option>
        <option>Bananas</option>
        <option>Grapes</option>
        <option>Oranges</option>
      </select>
      <button className="btnSidebar" onClick="">
        Filter data
      </button>
      <button className="btnSidebar" onClick="">
        Fetch new data
      </button>
    </div>
  );
}

export default Sidebar;
