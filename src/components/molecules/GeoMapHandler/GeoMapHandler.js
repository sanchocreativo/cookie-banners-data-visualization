import React, { useState } from "react";
import GeoChart from "../GeoMap/GeoMap";
import data from "../../../assets/json/geoMapWorld.json";
import styles from './GeoMapHandler.module.scss';

const GeoMapHandler = ({filteredCountries}) => {
  const [property, setProperty] = useState("pop_est");

  return (
    <div className={styles.container}>
      <GeoChart data={data} property={property} filteredCountries={filteredCountries} />
      <select
        value={property}
        onChange={event => setProperty(event.target.value)}
      >
        <option value="pop_est">Population</option>
        <option value="name_len">Name length</option>
        <option value="gdp_md_est">GDP</option>
      </select>
    </div>
  );
};

export default GeoMapHandler;