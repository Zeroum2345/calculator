import './style.css'

export default function FunctionButton({value, addValue, props, toCalculate, verifyBracket}){
    const changeNumberInUse = () => {
        const last = toCalculate[toCalculate.length-1]
        
        if(!parseInt(last) && last !== '(' && last !== ')' && parseInt(last) !== 0){
            addValue(toCalculate.slice(0,toCalculate.length - 1) + value)
        }else{
            addValue(toCalculate + value)
        }
    }

    return(
        <button onClick={() => changeNumberInUse()} className="btnValues functionButton" { ...props}><p>{value}</p></button>
    )
}