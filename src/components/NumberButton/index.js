import './style.css'

export default function NumberButton({value, addValue}){
    const changeNumberInUse = () => {
        addValue(value)
    }

    return(
        <button onClick={() => changeNumberInUse()} className="btnValues numberButton"><p>{value}</p></button>
    )
}