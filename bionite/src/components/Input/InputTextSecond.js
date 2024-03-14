import React, { useState } from "react";

function InputTextSecond({
  labelTitle,
  labelStyle,
  type = "text", // Default type to "text"
  containerStyle,
  defaultValue = "", // Default value to an empty string to ensure controlled input
  placeholder,
  name, // Ensure a name prop is provided to identify the input
  updateFormValue, // This function is expected to handle changes
}) {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value); // Update local state with the new value
    // Call updateFormValue with the input's name and its new value
    updateFormValue(e.target.name, e.target.value);
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label">
        <span className={`label-text text-base-content ${labelStyle}`}>
          {labelTitle}
        </span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
    </div>
  );
}

export default InputTextSecond;
