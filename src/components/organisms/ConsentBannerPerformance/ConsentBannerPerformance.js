import React, { useEffect, useState } from "react";
import IntroHeader from "../../molecules/IntroHeader/IntroHeader";
import styles from './ConsentBannerPerformance.module.scss';
import ButtonsFilters from "../../molecules/ButtonsFilters/ButtonsFilters";
import CountriesContext from '../../../context';
import axios from "axios";
import countries from "../../../assets/json/countries.json";
import countriesExtra from "../../../assets/json/countriesWithContinent.json"

const ConsentBannerPerformance = () => {

  const requestOne = countries;
  const requestTwo = countriesExtra;
  const [jsonResponse, setJsonResponse] = useState({ countriesData: [], countriesExtraInfo: [] })

  const resolveJsons = async () => {
    try {
      const responses = await axios.all([requestOne, requestTwo]);
      const responseOne = responses[0]
      const responseTwo = responses[1]

      setJsonResponse({ countriesData: responseOne, countriesExtraInfo: responseTwo })
    }
    catch (err) {
      console.log("ERROR", err);
    }
  }

  useEffect(() => {
    resolveJsons();
  }, []);

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