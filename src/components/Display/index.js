import './style.css'

export default function Display({contentToCalculate}){
    return(
        <div id="calculatorDisplay">
            {contentToCalculate === '' ? '0' : contentToCalculate}
        </div>
    )
}