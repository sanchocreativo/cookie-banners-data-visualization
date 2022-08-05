import React from "react";
import styles from './IntroHeader.module.scss';

const ConsentBannerPerformance = () => {

  return (
    <div className={styles.container}>
      <div className={styles.tag}>Performance</div>
      <h2 className={styles.title}>
        Consent Banner Performance
      </h2>
      <p>
        Every website collects consent for cookies & trackers with different consent banner formats. These differences are determined
        by the various privacy regulations enacted in each country. The positive consent rate shows the percentage of users who
        selected “Agree” in the banner, over all the users that have replied to the consent notice.
      </p>
    </div>
  );
};

export default ConsentBannerPerformance;