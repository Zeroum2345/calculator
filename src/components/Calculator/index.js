import { useEffect, useState } from 'react'
import './style.css'

import Display from '../Display'
import NumberButton from '../NumberButton'
import FunctionButton from '../FunctionButton'

export default function Calculator() {
    const [toCalculate, setToCalculate] = useState('')
    const [numberChosen, setNumberChosen] = useState('')
    const [nearHistory, setNearHistory] = useState('')
    const [openBracket, setOpenBracket] = useState(0)

    const [history, setHistory] = useState([''] * 10)

    useEffect(() => {
        if(numberChosen === -1) return

        if(toCalculate === ''){ // In case first number selected
            setToCalculate(numberChosen.toString())
        }else{
            // Verify if last charactere was a n ) to add a number as multiplication
            if(toCalculate[toCalculate.length-1] == ')'){
                setToCalculate(toCalculate + '*' + numberChosen.toString())
            }else{
                setToCalculate(toCalculate + numberChosen.toString())
            }
        }

        setNumberChosen(-1)
    }, [numberChosen, toCalculate])

    // Show result of the operation and save in history
    const showResult = (result, operation) => {
        const history = (operation ? operation : toCalculate) + ' ='
        setNearHistory(history)
        setToCalculate(result.toString())
    }

    const addBrackets = () => {
        const lastIsNumber = parseInt(toCalculate[toCalculate.length - 1]) > -1
        if(openBracket > 0 && (lastIsNumber || toCalculate[toCalculate.length - 1] == ')')){
            setToCalculate(toCalculate + ')')
            setOpenBracket(openBracket - 1)
        }else{
            if(lastIsNumber || toCalculate[toCalculate.length - 1] == ')'){
                setToCalculate(toCalculate + '*' + '(')
            }else{
                setToCalculate(toCalculate + '(')
            }
            setOpenBracket(openBracket + 1)
        }
    }

    useEffect(() => {
        console.log(openBracket)
    }, [openBracket])

    return (
        <div id="calculator">
            <div id="nearHistory">{nearHistory}</div>
            <Display contentToCalculate={toCalculate} />
            <div id="buttonsBox">
                <FunctionButton value="%" props={{onClick: () => showResult(eval(toCalculate)/100, toCalculate + '%')}}/>
                <FunctionButton value="CE" props={{onClick: () => setToCalculate('')}}/>
                <FunctionButton value="C" props={{onClick: () => setToCalculate('')}}/>
                <FunctionButton value="<" props={{onClick: () => setToCalculate(toCalculate.slice(0,-1))}}/>
                <FunctionButton value="1/x" props={{onClick: () => showResult(1 / eval(toCalculate), "1/"+toCalculate)}}/>
                <FunctionButton value="x²" props={{onClick: () => showResult(eval(toCalculate) ** 2, toCalculate +"²")}}/>
                <FunctionButton value="√x" props={{onClick: () => showResult(eval(toCalculate) ** (1/2), "√"+toCalculate)}}/>
                <FunctionButton value="/" addValue={setNumberChosen}/>
                <NumberButton value={1} addValue={setNumberChosen}/>
                <NumberButton value={2} addValue={setNumberChosen}/>
                <NumberButton value={3} addValue={setNumberChosen}/>
                <FunctionButton value="*" addValue={setNumberChosen}/>
                <NumberButton value={4} addValue={setNumberChosen}/>
                <NumberButton value={5} addValue={setNumberChosen}/>
                <NumberButton value={6} addValue={setNumberChosen}/>
                <FunctionButton value="-" addValue={setNumberChosen}/>
                <NumberButton value={7} addValue={setNumberChosen}/>
                <NumberButton value={8} addValue={setNumberChosen}/>
                <NumberButton value={9} addValue={setNumberChosen}/>
                <FunctionButton value="+" addValue={setNumberChosen}/>
                <FunctionButton value="()" props={{onClick: () => addBrackets()}}/>
                <NumberButton value={0} addValue={setNumberChosen}/>
                <FunctionButton value="." addValue={setNumberChosen}/>
                <FunctionButton value="=" props={{style: {backgroundColor: "orange"}, onClick: () => showResult(eval(toCalculate))}}/>
            </div>
        </div>
    )
}
