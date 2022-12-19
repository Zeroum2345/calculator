import './style.css'

export default function FunctionButton({value, addValue, props}){
    const changeNumberInUse = () => {
        addValue(value)
    }

    return(
        <button onClick={() => changeNumberInUse()} className="btnValues functionButton" { ...props}><p>{value}</p></button>
    )
}