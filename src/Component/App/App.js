import React , { Fragment, useState } from 'react';
import './App.css';
import Header from '../Header/Header'
import MyCheckBox from '../Checkbox/MyCheckbox'
import CheckBtn from '../CheckBtn/CheckBtn';


function App() 
{
    const [checkbox1, setCheckbox1] = useState(false)
    const [checkbox2, setCheckbox2] = useState(false)

    const handleChange1 = () =>
    {
        if (checkbox1 === false) 
        {
            setCheckbox1(true);
            setCheckbox2(false)
        }
        else
        {
            setCheckbox1(false);
            setCheckbox2(true)
        }
    };
    
    const handleChange2 = () => 
    {
        if (checkbox2 === false) 
        {
            setCheckbox2(true);
            setCheckbox1(false)
        }
        else
        {
            setCheckbox2(false);
            setCheckbox1(true)
        }
    };

    return(
        <Fragment>
            <Header></Header>
            <MyCheckBox label= "العربية" value = {checkbox1} onChange ={handleChange1}></MyCheckBox>
            <MyCheckBox label= "الإنجليزية" value = {checkbox2} onChange ={handleChange2}></MyCheckBox>
            <CheckBtn value={checkbox2}></CheckBtn>
        </Fragment>
    )
}

export default App;
