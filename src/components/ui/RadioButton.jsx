const RadioButton = ({ type, handleChange, register }) => {
    return (
        <>
            <div className="accent-black flex gap-2 p-[5px_10px]">
                {register
                    ? <input id={type} className="p-2 rounded-lg max-md:w-full" {...register("accountType")} type="radio" name="accountType" value={type} />
                    : <input id={type} className="p-2 rounded-lg max-md:w-full" onChange={handleChange} type="radio" name="accountType" value={type} />
                }
                <label htmlFor={type}>{type}</label>
            </div>
        </>
    );
};

export default RadioButton;