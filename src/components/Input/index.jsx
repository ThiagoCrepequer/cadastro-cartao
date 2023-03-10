import { InputEstilo } from "./styles"

const Input = ({children, placeholder, value, onChange}) => {
    return (
        <InputEstilo>
            <label>{children}</label>
            <input type="text" value={value} placeholder={placeholder} className={children} onChange={onChange}/>
        </InputEstilo>
    )
}

export default Input