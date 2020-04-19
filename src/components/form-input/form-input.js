import React from "react";
import "./form-input.styles.scss";

const FormInput = (props) => {
    const { handleChange, label, value } = props;
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} />
            {
                label ?
                    (<label className={`${value.length ? "shrink" : ""} form-input-label`}>
                        {label}
                    </label>)
                    : null
            }

        </div>
    );
}

export default FormInput;