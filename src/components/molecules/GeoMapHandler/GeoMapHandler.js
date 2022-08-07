import React from "react";
import GeoChart from "../GeoMap/GeoMap";
import data from "../../../assets/json/geoMapWorld.json";
import styles from './GeoMapHandler.module.scss';

const GeoMapHandler = ({parsedCountries}) => {

  return (
    <div className={styles.container}>
      <GeoChart data={data} parsedCountries={parsedCountries} />
    </div>
  );
};

export default GeoMapHandler;