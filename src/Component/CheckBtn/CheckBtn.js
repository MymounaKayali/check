import React from "react";
import Styles from './CheckBtn.module.css'

const CheckBtn = ({value}) =>
{
    return (
    <div className={Styles.div1}>
        <button className={value ? Styles.btn_change :Styles.btn_choose}>تأكيد الاختيار</button>
    </div>
    )
}

export default CheckBtn;
