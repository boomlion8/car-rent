import React from "react";
import "./details.css";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Prices from "../prices/Prices";
import Image from "../ImageCarousel/Image";
// import Carousel from "./Carousel/Carousel";
import audi from "./audi.jpg";
import ferrari from "./ferrari.jpg";
import mercedez from "./mercedez.jpg";
import landrover from "./landrover.jpg";
import tesla from "./tesla.jpg";
import service from "./services.jpg";
import lady from "./lady.jpg";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import car1 from "../carhire/car1.jpg";
import car2 from "../carhire/car2.jpg";
import car3 from "../carhire/car3.jpg";

function Details() {
  return (
    <div className="details">
      <div className="container">
        <div className="left_side">
          <div className="topheader">Car Rentals</div>

          <h2 className="heading">The Lowest Rent for Car Hire</h2>

          <div className="detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </div>

          <h4 className="item">
            <div>Know More</div>

            <div>
              <ArrowForwardIosIcon />
            </div>
          </h4>
        </div>

        <div className="right_side">
          <Image />
        </div>
      </div>

      <Prices />

      <div className="Services">
        <div className="services1">
          <img src={service} alt="" className="service" />
        </div>

        <div className="services2">
          <div className="ourservices">Our Services</div>
          <div className="hire_align">
            <div>
              <img src={car1} alt="" className="carhire" />
            </div>

            <div className="car_component">
              <div className="car_sale">Car Hire</div>
              <div>
                We pride ourselves in always going the extra mile for our
                customers
              </div>
            </div>
          </div>

          <div className="hire_align">
            <div>
              <img src={car2} alt="" className="carhire" />
            </div>

            <div className="car_component">
              <div className="car_sale">Car Sales</div>
              <div>
                We sale the best luxury cars across the world at a competitive
                price
              </div>
            </div>
          </div>

          <div className="hire_align">
            <div>
              <img src={car3} alt="" className="carhire" />
            </div>

            <div className="car_component">
              <div className="car_sale">Hire a driver</div>
              <div>
                you want to travel and fell comfortable our drivers are availabe
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="need">We Have Everying You Need</h2>
      </div>

      <div>
        <div className="car_img">
          <div className="car_item">
            <div>Audi</div>
            <img src={audi} alt="" className="carimage" />

            <div>
              <div>2016</div>
              <div className="car_item_detail">
                <div className="car_item_detail">
                  <div>
                    <AttachMoneyIcon />
                  </div>
                  <div>15k</div>
                </div>

                <div className="car_item_detail">
                  <div>
                    <DirectionsCarIcon />
                  </div>
                  <div>Auto</div>
                </div>

                <div className="car_item_detail">
                  <div>
                    <LocalGasStationIcon />
                  </div>
                  <div>Fuel</div>
                </div>
              </div>
            </div>

            <div className="rent">Rent</div>
          </div>

          <div className="car_item">
            <div>Mercedez</div>
            <img src={mercedez} alt="" className="carimage" />

            <div>
              <div>2016</div>
              <div className="car_item_detail">
                <div className="car_item_detail">
                  <div>
                    <AttachMoneyIcon />
                  </div>
                  <div>15k</div>
                </div>

                <div className="car_item_detail">
                  <div>
                    <DirectionsCarIcon />
                  </div>
                  <div>Auto</div>
                </div>

                <div className="car_item_detail">
                  <div>
                    <LocalGasStationIcon />
                  </div>
                  <div>Fuel</div>
                </div>
              </div>
            </div>

            <div className="rent">Rent</div>
          </div>

          <div className="car_item">
            <div>Land Rover</div>
            <img src={landrover} alt="" className="carimage" />

            <div>
              <div>2016</div>
              <div className="car_item_detail">
                <div className="car_item_detail">
                  <div>
                    <AttachMoneyIcon />
                  </div>
                  <div>15k</div>
                </div>

                <div className="car_item_detail">
                  <div>
                    <DirectionsCarIcon />
                  </div>
                  <div>Auto</div>
                </div>

                <div className="car_item_detail">
                  <div>
                    <LocalGasStationIcon />
                  </div>
                  <div>Fuel</div>
                </div>
              </div>
            </div>

            <div className="rent">Rent</div>
          </div>

          <div className="car_item">
            <div>Ferrari</div>
            <img src={ferrari} alt="" className="carimage" />

            <div>
              <div>2016</div>
              <div className="car_item_detail">
                <div className="car_item_detail">
                  <div>
                    <AttachMoneyIcon />
                  </div>
                  <div>15k</div>
                </div>

                <div className="car_item_detail">
                  <div>
                    <DirectionsCarIcon />
                  </div>
                  <div>Auto</div>
                </div>

                <div className="car_item_detail">
                  <div>
                    <LocalGasStationIcon />
                  </div>
                  <div>Fuel</div>
                </div>
              </div>
            </div>

            <div className="rent">Rent</div>
          </div>

          <div className="car_item">
            <div>Tesla</div>
            <img src={tesla} alt="" className="carimage" />

            <div>
              <div>2016</div>
              <div className="car_item_detail">
                <div className="car_item_detail">
                  <div>
                    <AttachMoneyIcon />
                  </div>
                  <div>15k</div>
                </div>

                <div className="car_item_detail">
                  <div>
                    <DirectionsCarIcon />
                  </div>
                  <div>Auto</div>
                </div>

                <div className="car_item_detail">
                  <div>
                    <LocalGasStationIcon />
                  </div>
                  <div>Fuel</div>
                </div>
              </div>
            </div>

            <div className="rent">Rent</div>
          </div>
        </div>

        <h3 className="need">See The Store</h3>
      </div>

      <div>
        <h2 className="need">
        What do people say about us?
        </h2>

        {/* <div>
          They are very soft and don't leave any pain. He liks to take care of
          his famiily
        </div> */}

        <div className="about">
          <div className="about_left">
            <img src={lady} alt="" className="lady" />
          </div>
          <div className="about_right">
            <div className="about_detail">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem
            </div>
            <hr className="horizontal" />
            <div className="about_bottom">Amma De CFO at SpacZ</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
