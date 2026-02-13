const RadioButton = ({type, handleChange}) => {
    return (
        <>
            <div className="accent-black flex gap-2 p-[5px_10px]">
                <input className="p-2 rounded-lg max-md:w-full" onChange={handleChange} type="radio" name="accountType" value={type} />
                <label htmlFor="">{type}</label>
            </div>
        </>
    );
};

export default RadioButton;