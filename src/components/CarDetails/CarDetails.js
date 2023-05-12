import React from "react";
import { vehicles } from "../Vehicles/Vehicle";
import "./cardetails.css";
import tesla_model_3 from "../assests/images/vehicles/tesla-model-3.jpg";
import porsche_911 from "../assests/images/vehicles/porsche-911.jpg";
import toyota_highlander_hybrid_le from "../assests/images/vehicles/toyota-highlander-hybrid-le.jpg";
import bmw_3_series from "../assests/images/vehicles/bmw-3-series.jpg";
import volkswagen_clementine_t2 from "../assests/images/vehicles/volkswagen-clementine-t2.jpg";
import hyundai_i30n from "../assests/images/vehicles/hyundai-i30n.jpg";
import jeep_wrangler_rubicon from "../assests/images/vehicles/jeep-wrangler-rubicon.jpg";
import bmw_m4_gts from "../assests/images/vehicles/bmw-m4-gts.jpg";
import ford_mustang_shelby_gt350r from "../assests/images/vehicles/ford-mustang-shelby-gt350r.jpg";
import turboant_x7_max_folding from "../assests/images/vehicles/turboant-x7-max-folding.jpg";
import bianchi_specialissima from "../assests/images/vehicles/bianchi-specialissima.jpg";
import vz_flybridge from "../assests/images/vehicles/vz-flybridge.jpg";

function CarDetails() {
  const vehicle = [
    tesla_model_3,
    porsche_911,
    toyota_highlander_hybrid_le,
    bmw_3_series,
    volkswagen_clementine_t2,
    hyundai_i30n,
    jeep_wrangler_rubicon,
    bmw_m4_gts,
    ford_mustang_shelby_gt350r,
    turboant_x7_max_folding,
    bianchi_specialissima,
    vz_flybridge,
  ];
  return (
    <>
      {vehicles.map((v) => (
        <div className="vehicle">
          <div className="slug">{v.slug}</div>
          <div className="vehicle_component">
            <div>
              <img src={vehicle[v.id]} alt="" className="vehicle_image" />
            </div>

            <div className="vehicle_desc">{v.description}</div>
          </div>
          <table className="table">
            <tr>
              <th>brand</th>
              <th>Color</th>
              <th>Details</th>
              <th>Features</th>
            </tr>
            <tr>
              <td>{v.brand.name}</td>
              <td>{v.color.name}</td>
              <td>{v.details.bags}</td>
              <td>{v.features[0]}</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td>{v.details.capacity}</td>
              <td>{v.features[1]}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>{v.details.transmission}</td>
              <td>{v.features[2]}</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>{v.features[3]}</td>
            </tr>
          </table>
        </div>
      ))}
    </>
  );
}

export default CarDetails;
