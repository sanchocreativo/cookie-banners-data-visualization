import React, { useState } from "react";
import styles from './ButtonsFilters.module.scss';
import Button from '../../atoms/Button/Button';
import disagree from "../../../assets/images/disagree.svg"
import linkClose from "../../../assets/images/link-close.svg"
import closeDisagree from "../../../assets/images/close-disagree.svg"
import continueWithoutAgree from "../../../assets/images/continue-without-agree.svg"
import noDisagree from "../../../assets/images/no-disagree.svg"

const ButtonsFilters = () => {
  
  const initialState = [
    { id: 1, value:'Disagree button', active: true, imgSrc: disagree, text:'Best in class, the disagree action is explicit and transparent. This notice is compliant with most privacy laws worldwide such as GDPR, LGPD or PDPA.'},
    { id: 2, value:'Link + Close option',  active: false, imgSrc: linkClose, text: 'User has the option to refuse, either by clicking on the close button or by selecting "Continue without agreeing".    ' },
    { id: 3, value:'Close = disagree', active: false, imgSrc: closeDisagree , text: 'Format recommended in 2021 by the Italian DPA. Closing the banner equals disagreeing.    '},
    { id: 4, value:'Continue without agreeing link', active: false, imgSrc: continueWithoutAgree, text: 'Format recommended by the French DPA (CNIL) in 2020. The text "Continue without agreeing" equals refusing trackers & cookies.    ' },
    { id: 5, value:'No disagree action', active: false, imgSrc: noDisagree, text: 'First widespread consent notice format, slowly being banned because of its lack of transparency.'},
  ];

  const [state, setState] = useState(initialState);
  const [image, setImage] = useState(initialState[0]);

  const onClick = (e) => {
    let temp_state = [...state];
    let indx = temp_state.findIndex( x => String(x.id) === String(e));
    let temp_element = { ...temp_state[indx] };
    temp_element.active = true;
    temp_state.map(val=> val.active = false);
    temp_state[indx] = temp_element;
    setImage(temp_element);
    setState( temp_state );
  }

  return (
    <div className={styles.container}>
      <h6 className={styles.title}>
      Choose a consent banner format
      </h6>
      <div className={styles.buttonContainer}>
        { state.map((btn) => {
          return (
            <Button text={btn.value} key={btn.id}  id={btn.id} isActive={btn.active} onClick={onClick} />
            )
          })
        }
      </div>
      <div className={styles.imgAndDescription}>
        <img src={image.imgSrc} alt={image.value}  loading="lazy" />
        <p>{image.text}</p>
      </div>
    </div>
  );
};

export default ButtonsFilters;