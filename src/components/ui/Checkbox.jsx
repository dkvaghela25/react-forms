const Checkbox = ({ skill, handleChange, skills }) => {
    return (
        <>
            <div className="flex gap-2 p-[5px_10px]">
                <input
                    className="accent-black p-2 rounded-lg max-md:w-full"
                    checked={skills.includes(skill)}
                    type="checkbox"
                    name="skills"
                    onChange={handleChange}
                    value={skill}
                />
                <label htmlFor="">{skill}</label>
            </div>
        </>
    );
};

export default Checkbox;