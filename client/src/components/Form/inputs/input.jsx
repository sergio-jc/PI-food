const Input = ({name , handle , input , type , className}) =>{
    return (
        <div>
            <label>{name}:</label>
            <input
            className={className}
            type={type}
            name={name}
            onChange={handle}
            value={input[name]}
          />
        </div>
    )
}

export default Input