import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './css/Amenities.css';

const amenitiesData = [
  { icon: "fa-door-open", title: "Entrance Portal", text: "Grand entrance with security and design." },
  { icon: "fa-home", title: "Club House", text: "A place for gatherings and activities." },
  { icon: "fa-swimming-pool", title: "Swimming Pool", text: "Relaxing pool area for all ages." },
  { icon: "fa-theater-masks", title: "Amphitheater in Park", text: "Open-air venue for events and performances." },
  { icon: "fa-utensils", title: "Cafeteria", text: "Cozy cafeteria for casual dining." },
  { icon: "fa-road", title: "30 Feet Wide Road", text: "Sturdy hard road inside the project." },
  { icon: "fa-water", title: "Water Fountain & Fall", text: "Beautiful water features." },
  { icon: "fa-bolt", title: "Continuous Electricity Supply", text: "Continuous electricity supply for comfort." },
  { icon: "fa-tint", title: "Ample Water Supply", text: "Ample water supply from 5 borewells." },
  { icon: "fa-tree", title: "Verdant Landscape", text: "Verdant landscape with 25 trees per plot." },
  { icon: "fa-tree", title: "Red Sandalwood Trees", text: "Red sandalwood trees and fruits." },
  { icon: "fa-hand-holding-usd", title: "Lucrative Returns", text: "Lucrative returns from red sandalwood trees." },
  { icon: "fa-bed", title: "Guest Rooms", text: "Four guest rooms in clubhouse." },
  { icon: "fa-fire", title: "Campfire Pit", text: "Campfire pit for gatherings." },
  { icon: "fa-dumbbell", title: "Gym", text: "Fully equipped gym." },
  { icon: "fa-tree", title: "1.25 Acre Park", text: "1.25 acre park inside the project." },
  { icon: "fa-ruler", title: "Plot Sizes", text: "Plot sizes ranging from 5700 to 15000 sqft." },
];

const Amenities = () => {
  return (
    <div className="container-fluid py-5 bg-light ">
      <div className="container">
        <h2 className="text-center mb-4 font1" style={{color:'#255946'}}>Amenities</h2>
        <Row>
          {amenitiesData.map((amenity, index) => (
            <Col key={index} className="col-6 col-md-4 col-lg-2 mb-4">
              <Card className="h-100 amenity-card">
                <Card.Body className="d-flex flex-column align-items-center">
                  <i className={`fas ${amenity.icon} fa-2x mb-3 icon-color`}></i>
                  <Card.Title className="text-center para-color">{amenity.title}</Card.Title>
                  {/* <Card.Text className="text-center">{amenity.text}</Card.Text> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Amenities;
