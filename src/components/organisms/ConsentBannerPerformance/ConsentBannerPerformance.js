import React from "react";
import IntroHeader from "../../molecules/IntroHeader/IntroHeader";
import styles from './ConsentBannerPerformance.module.scss';
import ButtonsFilters from "../../molecules/ButtonsFilters/ButtonsFilters";
import CountriesContext from '../../../context';
import countries from "../../../assets/json/countries.json";
import countriesExtra from "../../../assets/json/countriesWithContinent.json"

const ConsentBannerPerformance = () => {

  const jsonResponse = { countriesData: countries, countriesExtraInfo: countriesExtra }
 
  return (
    <CountriesContext.Provider value={jsonResponse}>
      <div className={styles.container}>
        <div className={styles.containerHeader}>
          <IntroHeader></IntroHeader>
        </div>
        <div className={styles.containerFilters}>
          <ButtonsFilters />
        </div>
      </div>
    </CountriesContext.Provider>
  );
};

export default ConsentBannerPerformance;