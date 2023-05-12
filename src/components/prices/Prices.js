import React, { useState } from "react";
import "./prices.css";
import TextField from "@mui/material/TextField";
import "react-calendar/dist/Calendar.css";
import { Calendar } from "react-calendar";
import MapContainer from "./MapContainer";
// import { GoogleMap, Marker } from "react-google-maps";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// import Calendar from "react-calendar";

function Prices() {
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);
  // const currentDate = new Date();

  const [value, setValue] = useState();

  // const MyMapComponent = (props) => (
  //   <GoogleMap>
  //     <Marker position={{ lat: -34.397, lng: 150.644 }} />
  //   </GoogleMap>
  // );

  console.log(value);

  // console.log(onChange);
  return (
    <div className="prices">
      <div className="title">
        <div className="title_item">Prices</div>
        <div className="title_item">Offer</div>
        <div className="title_item">Delivery</div>
      </div>

      <div className="component">
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="PICK UP LOCATION"
            defaultValue="EUR"
            helperText="Please select your location"
          >
            <MapContainer />
          </TextField>
        </div>

        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="PICK UP DATE"
            defaultValue="EUR"
            helperText="Please select your pick up date"
          >
            <Calendar onClick={(e) => setValue(e.target.value)} />
          </TextField>

       
        </div>

        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="RETURN DATE"
            defaultValue="EUR"
            helperText="Please select your return date"
          >
            <Calendar onClick={(e) => setValue(e.target.value)} />
          </TextField>
        </div>

        <div className="search">Search for  Cars</div>
      </div>
    </div>
  );
}

export default Prices;
