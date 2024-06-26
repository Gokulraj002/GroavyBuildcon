import React from "react";
import Flight from "./ElegantImages/flight.png";
import Train from "./ElegantImages/tour.png";
import College from "./ElegantImages/College.png";
import Mall from "./ElegantImages/mall.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const NearByLocation = () => {
  const images = [College, Flight, Mall, Train];
  const info = [
    {
      category: "Colleges / Schools",
      time: "within 20 minutes",
      places: [
        "Nandi Medical College",
        "Shantha Group of Institutions",
        "Shantha Vidyaniketan School",
        // "Nandhi Hill View International School",
      ],
    },
    {
      category: "Airport",
      time: "within 50 minutes",
      places: [
        "Kempegowda International Airport",
        "Located just 7.3 km from NH7, the project offers easy access to these attractions",
      ],
    },
    {
      category: "Hospitals",
      time: "within 15 minutes",
      places: [
        "SS Hospital 11min",
        "Akshaya Hospital 11min",
        "Govt Hospital",
        "CSI Hospital",
      ],
    },
    {
      category: "Tourism Spots",
      time: "within 40 minutes",
      places: [
        "Isha Foundation",
        "Lepakshi Temple",
        "Nandi Hills",
        "Gudibanda Fort",
        "Avala Betta",
      ],
    },
  ];

  return (
    <>
      <div className="bg pt-4">
        <div className="container nearby-location-container">
          <div className="row">
            <h2 className="text-center font11 color">Nearby Locations</h2>
            {info.map((item, index) => (
              <div
                className="col-12 col-md-4 col-lg-3 mx-auto text-white py-md-5"
                key={index}
              >
                <div className="nearby-location-item">
                  <img
                    src={images[index]}
                    alt={item.category}
                    className="nearby-location-icon  d-block mx-auto"
                    width={"30%"}
                  />
                  <h5 className="mt-3 nearby-location-title green-clr text-center">
                    {item.category}
                  </h5>
                  <p className="nearby-location-time text-center ">
                    {item.time}
                  </p>
                  <div className="nearby-location-list para-color1 ms-md-5 ps-md-3">
                    {item.places.map((place, index) => (
                      <p key={index}>
                        <FontAwesomeIcon
                          icon={faCircle}
                          style={{ color: "#F9AB24", fontSize: "0.6em" }}
                          className="me-2"
                        />
                        {place}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NearByLocation;
