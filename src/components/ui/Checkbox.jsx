const Checkbox = ({ skill, handleChange, skills, register }) => {
    return (
        <>
            <div className="flex gap-2 p-[5px_10px]">
                {register
                    ? <input
                        {...register("skills")}
                        className="accent-black p-2 rounded-lg max-md:w-full"
                        type="checkbox"
                        value={skill}
                        id={skill}
                        />
                        : <input
                        className="accent-black p-2 rounded-lg max-md:w-full"
                        checked={skills?.includes(skill)}
                        type="checkbox"
                        name="skills"
                        onChange={handleChange}
                        value={skill}
                        id={skill}
                    />
                }
                <label htmlFor={skill}>{skill}</label>
            </div>
        </>
    );
};

export default Checkbox;