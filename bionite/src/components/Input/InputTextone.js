import React, { useState } from "react";

function InputTextone({
  labelTitle,
  labelStyle,
  type,
  containerStyle,
  defaultValue,
  placeholder,
  updateFormValue,
  name,
}) {
  const [value, setValue] = useState(defaultValue);

  const updateInputValue = (e) => {
    const { name, value } = e.target;
    setValue(value);
    updateFormValue(e); // Pass the entire event to updateFormValue
  };

  return (
    <div className={`form-control w-full ${containerStyle}`}>
      <label className="label">
        <span className={"label-text text-base-content " + labelStyle}>
          {labelTitle}
        </span>
      </label>
      <input
        type={type || "text"}
        name={name}
        value={value}
        placeholder={placeholder || ""}
        onChange={updateInputValue} // Pass the event to updateInputValue
        className="input input-bordered w-full"
      />
    </div>
  );
}

export default InputTextone;
