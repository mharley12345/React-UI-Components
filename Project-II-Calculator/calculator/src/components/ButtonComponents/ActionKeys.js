    
import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';



const ActionKeys = () => {
    return (
        <div className='action-keypad'>
            <ActionButton buttonStyle={'action'} text={'/'} onclick={console.log('yes')}/>
            <ActionButton buttonStyle={'action'} text={'x'} onclick='()' />
            <ActionButton buttonStyle={'action'} text={'-'} onclick='()'/>
            <ActionButton buttonStyle={'action'} text={'+'} onclick='()'/>               
            <ActionButton buttonStyle={'action'} text={'='} onclick='()'/>
        </div>
    )}
export default ActionKeys;
