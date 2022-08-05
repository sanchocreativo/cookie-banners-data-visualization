import React from "react";
import IntroHeader from "../../molecules/IntroHeader/IntroHeader";
import styles from './ConsentBannerPerformance.module.scss';
import ButtonsFilters from "../../molecules/ButtonsFilters/ButtonsFilters";
const ConsentBannerPerformance = () => {

  return (
    <div className={styles.container}>
      <div className={styles.containerHeader}>
        <IntroHeader></IntroHeader>
      </div>
      <div className={styles.containerFilters}>
        <ButtonsFilters />
      </div>
    </div>
  );
};

export default ConsentBannerPerformance;