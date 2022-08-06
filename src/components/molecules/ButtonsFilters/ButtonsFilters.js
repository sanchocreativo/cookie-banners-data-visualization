import React, { useState, useContext, useEffect } from "react";
import styles from './ButtonsFilters.module.scss';
import Button from '../../atoms/Button/Button';
import disagree from "../../../assets/images/disagree.svg"
import linkClose from "../../../assets/images/link-close.svg"
import closeDisagree from "../../../assets/images/close-disagree.svg"
import continueWithoutAgree from "../../../assets/images/continue-without-agree.svg"
import noDisagree from "../../../assets/images/no-disagree.svg"
import CountriesContext from "../../../context";
import CountriesFilter from "../CountriesFilter/CountriesFilter";

const ButtonsFilters = () => {
  const countries = useContext(CountriesContext);

  const initialState = [
    { id: 1, value: 'Disagree button', active: true, imgSrc: disagree, text: 'Best in class, the disagree action is explicit and transparent. This notice is compliant with most privacy laws worldwide such as GDPR, LGPD or PDPA.' },
    { id: 2, value: 'Link + Close option', active: false, imgSrc: linkClose, text: 'User has the option to refuse, either by clicking on the close button or by selecting "Continue without agreeing".    ' },
    { id: 3, value: 'Close = disagree', active: false, imgSrc: closeDisagree, text: 'Format recommended in 2021 by the Italian DPA. Closing the banner equals disagreeing.' },
    { id: 4, value: 'Continue without agreeing link', active: false, imgSrc: continueWithoutAgree, text: 'Format recommended by the French DPA (CNIL) in 2020. The text "Continue without agreeing" equals refusing trackers & cookies.    ' },
    { id: 5, value: 'No disagree action', active: false, imgSrc: noDisagree, text: 'First widespread consent notice format, slowly being banned because of its lack of transparency.' },
  ];

  const [buttonsState, setButtonsState] = useState(initialState);
  const [image, setImage] = useState(initialState[0]);
  const [parsedCountries, setParseCountries] = useState({});
  const [filteredCountries, setFilteredCountries] = useState({});

  const onClick = (e) => {
    let temp_state = [...buttonsState];
    let indx = temp_state.findIndex(x => String(x.id) === String(e));
    let temp_element = { ...temp_state[indx] };
    temp_element.active = true;
    temp_state.map(val => val.active = false);
    temp_state[indx] = temp_element;
    setImage(temp_element);
    setButtonsState(temp_state);
  }

  useEffect(() => {
    if (countries.countriesData && countries.countriesData.length) {

      const parseCountryFilter = countries.countriesData.map(itm => {
        switch (itm['Banner format']) {
          case 'no negative action':
            itm['Banner format'] = 'No disagree action'
            break;
          case 'link only':
            itm['Banner format'] = 'Link + Close option'
            break;
          case 'cross only':
            itm['Banner format'] = 'Close = disagree'
            break;
          case 'button only':
            itm['Banner format'] = 'Disagree button'
            break;
          default:
            break;
        }
        return itm
      });

      const mergeById =
        parseCountryFilter.map(itm => ({
          ...countries.countriesExtraInfo.find((item) => (item.countryName === itm.Country) && item),
          ...itm
        }));

        let europeanCountries = countries.countriesExtraInfo.filter(val=> val.continentName === 'Europe').map(europeanCountries => {
          europeanCountries['Banner format'] = 'Disagree button';
          return europeanCountries
        })

      setParseCountries([...mergeById, ...europeanCountries]);

    }
  }, [countries]);

  useEffect(() => {
    if (parsedCountries && parsedCountries.length) {
      setFilteredCountries(parsedCountries.filter(val => val['Banner format'] === image.value));
    }
  }, [parsedCountries, image]);

  return (
    <div className={styles.container}>
      <h6 className={styles.title}>
        Choose a consent banner format
      </h6>
      <div className={styles.buttonContainer}>
        {buttonsState.map((btn) => {
          return (
            <Button text={btn.value} key={btn.id} id={btn.id} isActive={btn.active} onClick={onClick} />
          )
        })
        }
      </div>
      <div className={styles.imgAndDescription}>
        <img className={styles.imgBanner} src={image.imgSrc} alt={image.value} loading="lazy" />
        <p className={styles.bannerDescription} >{image.text}</p>
      </div>
      {/* <p className={styles.title}>{'Countries with this consent:'}</p>

      <div className={styles.imgAndDescription}>
        {filteredCountries && filteredCountries.length > 0 &&
          filteredCountries.map((val) => (
            <div className={styles.imgCountry} key={val.Country}>
              <img
                alt={val.countryName}
                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${val.countryCode}.svg`}
                loading="lazy"
              />
              <p >{val.countryName}</p>
            </div>
          ))
        }
      </div>

      {filteredCountries && !filteredCountries.length &&
        <div className={styles.imgCountry}>
          <p >{'No countries match with this type of banner'}</p>
        </div>
      } */}

      <CountriesFilter parsedCountries={parsedCountries} buttonsState={buttonsState}></CountriesFilter>
    </div>
  );
};

export default ButtonsFilters;