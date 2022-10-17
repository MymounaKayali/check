import React from "react";
import Styles from './Header.module.css'

const Header = () =>
{
    return(
        <div className={Styles.Header}>
            <label>
                اختيار اللغة
            </label>
        </div>
    )
}

export default Header