import React from 'react';
import Styles from './MyCheckBox.module.css'


const MyCheckBox = ({label , value , onChange}) =>
{
    return (
        <div>
            <div className={Styles.divCheck}>
            <input type={'checkbox'} checked={value} onChange={onChange}></input>
            <label>{label}</label>
            </div>
        </div>
    )
}

export default MyCheckBox;