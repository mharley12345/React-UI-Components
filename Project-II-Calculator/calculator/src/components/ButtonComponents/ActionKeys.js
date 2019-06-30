
import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';

const ActionKeys = () => {
    return (
        <div className='action-keypad'>
            <ActionButton name='/' onClick={e => this.props.onClick(e.target.name,console.log('click'))}buttonStyle={'action'} text={'/'}/>
            <ActionButton name='x' onClick={e => this.props.onClick(e.target.name)}buttonStyle={'action'} text={'x'}/>
            <ActionButton name='-' onClick={e => this.props.onClick(e.target.name)}buttonStyle={'action'} text={'-'}/>
            <ActionButton name='+' onClick={e => this.props.onClick(e.target.name)}buttonStyle={'action'} text={'+'}/>
            <ActionButton name='=' onClick={e => this.props.onClick(e.target.name)}buttonStyle={'action'} text={'='}/>
        </div>
    )}

export default ActionKeys;
