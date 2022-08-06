import React, {useState} from "react";
import styles from './CountriesFilter.module.scss';
import GeoMapHandler from "../GeoMapHandler/GeoMapHandler";
const CountriesFilter = ({ parsedCountries, buttonsState }) => {

  const colors = ['#e6194B', '#800000', '#911eb4', '#4363d8', '#3cb44b', '#CCCCCC'];


  const withNoDataAvailable = [...buttonsState, {id: 6, value: 'No Data Available', active: false, }]

  withNoDataAvailable.map((val, idx) => val.color = colors[idx]);

  const parsedCountriesWithColors =  parsedCountries && parsedCountries.length && parsedCountries.map(val=>{
    val.color = withNoDataAvailable.filter(data=> data.value === val['Banner format'])[0].color || '#CCCCCC';
    return val
  });

  const [countriesClicked, setCountriesClicked] = useState(parsedCountriesWithColors)

  const onClick = () => {
    // countriesClicked.filter()
    // setCountriesClicked()
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        {withNoDataAvailable.map((btn) => {
          return (
            <div className={styles.tagContainer} key={btn.id} onClick={onClick(btn.value)} >
              <span className={styles.tagColor} style={{ backgroundColor: btn.color }}></span>
              <div className={styles.tag} id={btn.id} >{btn.value} </div>
            </div>
          )
        })
        }
      </div>
      <GeoMapHandler parsedCountries={parsedCountriesWithColors}  />
    </div>
  );
};

export default CountriesFilter;