import React from 'react';
import './Button.css';
import NumberButton from './NumberButton';

const NumberKeys = () => {
    return (
    <div className ='number-keypad'>
        <NumberButton name='clear' onClick={e => this.props.onClick(e.target.name)} buttonStyle='number' text={'clear'}/>
        <NumberButton name='7' onClick={e => this.props.onClick(e.target.name)} buttonStyle='number' text={'7'}/>
        <NumberButton name='8' onClick={e => this.props.onClick(e.target.name)} buttonStyle='number' text={'8'}/>
        <NumberButton name='9' onClick={e => this.props.onClick(e.target.name)} buttonStyle='number' text={'9'}/>
        <NumberButton name='4' onClick={e => this.props.onClick(e.target.name)} buttonStyle='number' text={'4'}/>
        <NumberButton name='5' onClick={e => this.props.onClick(e.target.name)} buttonStyle='number' text={'5'}/>
        <NumberButton name='6' onClick={e => this.props.onClick(e.target.name)} buttonStyle='number' text={'6'}/>
        <NumberButton name='1' onClick={e => this.props.onClick(e.target.name)} buttonStyle='number' text={'1'}/>
        <NumberButton name='2' onClick={e => this.props.onClick(e.target.name)} buttonStyle='number' text={'2'}/>
        <NumberButton name='3' onClick={e => this.props.onClick(e.target.name)} buttonStyle='number' text={'3'}/>
        <NumberButton name='0' onClick={e => this.props.onClick(e.target.name)} buttonStyle='number' text={'0'}/>
    </div>
    )
}
export default NumberKeys
