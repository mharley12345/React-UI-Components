import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';

const NumberKeys = () => {
    return (
    <div className ='number-keypad'>
        <NumberButton buttonstyle={'number'} text={'clear'}/>,
        <NumberButton buttonstyle={'number'} text={'7'}/>,
        <NumberButton buttonstyle={'number'} text={'8'}/>,
        <NumberButton buttonstyle={'number'} text={'9'}/>,
        <NumberButton buttonstyle={'number'} text={'4'}/>,
        <NumberButton buttonstyle={'number'} text={'5'}/>,
        <NumberButton buttonstyle={'number'} text={'6'}/>,
        <NumberButton buttonstyle={'number'} text={'1'}/>,
        <NumberButton buttonstyle={'number'} text={'2'}/>,
        <NumberButton buttonstyle={'number'} text={'3'}/>,
        <NumberButton buttonstyle={'number'} text={'0'}/>,
    </div>
    )
}
export default NumberKeys