import React, { useState, useEffect } from 'react';

export default function CalcBoard(props) {
    
    const[topSec,setTopSec] = useState(['ac','del','%'])
    const[midSec,setMidSec] = useState(['1','2','3','x','4','5','6','+','7','8','9','-'])
    const[endSec,setEndSec] = useState(['0','.','del'])

    useEffect(()=>{
        
    })
    
    return (
        <div className='calc-board'>
            
        </div>
    )
}
