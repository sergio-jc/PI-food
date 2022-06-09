const Input = ({name , handle , input , type}) =>{
    return (
        <div>
            <label>{name}:</label>
            <input
            type={type}
            name={name}
            onChange={handle}
            value={input[name]}
          />
        </div>
    )
}

export default Input