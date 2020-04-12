import React from 'react'; 

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="form__group">
        <input 
            className="form__input" 
            onChange={handleChange}
            {...otherProps}
        />
        {
            label ?
            (<label className={`${
                otherProps.value.length ? "shrink": ""
                } form__label`}>

                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput; 