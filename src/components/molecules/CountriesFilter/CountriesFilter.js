import React from "react";
import styles from './CountriesFilter.module.scss';
import GeoMapHandler from "../GeoMapHandler/GeoMapHandler";
const CountriesFilter = ({ filteredCountries, buttonsState }) => {

  const colors = ['#e6194B', '#800000', '#911eb4', '#4363d8', '#3cb44b', '#CCCCCC'];


  const withNoDataAvailable = [...buttonsState, {id: 6, value: 'No Data Available', active: false, }]

  withNoDataAvailable.map((val, idx) => val.color = colors[idx]);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        {withNoDataAvailable.map((btn) => {
          return (
            <div className={styles.tagContainer} key={btn.id}  >
              <span className={styles.tagColor} style={{ backgroundColor: btn.color }}></span>
              <div className={styles.tag} id={btn.id} >{btn.value} </div>
            </div>
          )
        })
        }
      </div>
      <GeoMapHandler filteredCountries={filteredCountries} />
    </div>
  );
};

export default CountriesFilter;