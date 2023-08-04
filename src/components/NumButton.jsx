
import "./App.css"

export default function NumButton({value, onClick, style}) {

    

    return (
        <button onClick={() => onClick(value)} className={`radius button-sitting pointer ${style}`} value={value}>{value}</button>
    )

}
