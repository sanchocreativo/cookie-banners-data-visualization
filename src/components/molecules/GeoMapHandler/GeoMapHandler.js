import React, { useState } from "react";
import GeoChart from "../GeoMap/GeoMap";
import data from "../../../assets/json/geoMapWorld.json";
import styles from './GeoMapHandler.module.scss';

const GeoMapHandler = ({parsedCountries}) => {
  const [property, setProperty] = useState("pop_est");

  return (
    <div className={styles.container}>
      <GeoChart data={data} property={property} parsedCountries={parsedCountries} />
    </div>
  );
};

export default GeoMapHandler;