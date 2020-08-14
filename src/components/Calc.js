import React, { useState, useEffect } from 'react';
import './Calc.css';
import CalcScreen from './CalcScreen.js'
import CalcBoard from './CalcBoard.js'


export default function Calc() {
    return (
        <div>
            <CalcScreen/>
            <CalcBoard/>
        </div>
    )
}
