import { useEffect, useState } from 'react'
import './style.css'

export default function Display({contentToCalculate}){
    const [length, setLength] = useState(0)
    useEffect(() => {
        if(contentToCalculate.length == 0){
            setLength(0)
            return
        }

        if(contentToCalculate.length >= 10 && (contentToCalculate.length <= 20)){
            setLength(contentToCalculate.length)
        }
    }, [contentToCalculate])

    return(
        <div id="calculatorDisplay" style={{fontSize: `${40 - (length)}pt`}}>
            {contentToCalculate === '' ? '0' : contentToCalculate}
        </div>
    )
}