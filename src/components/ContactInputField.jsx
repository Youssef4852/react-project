import React, { useState } from "react";

function ContactInputField({
  id,
  type = "text",
  name,
  value,
  onChange,
  label,
  textarea = false,
}) {
  const [focus, setFocus] = useState(false);

  const isActive = focus;
  return (
    <>
      <div className="input-field">
        <label style={{ top: isActive ? "-11px" : "15px" }} htmlFor={id}>
          {label}*
        </label>
        {textarea ? (
          <textarea
            value={value}
            onChange={onChange}
            name={name}
            id={id}
            onFocus={() => setFocus(true)}
            onBlur={(e) => {
              setFocus(false);
              if (e.target.value.trim().length > 0) {
                setFocus(true);
              } else {
                setFocus(false);
              }
            }}
            required
          ></textarea>
        ) : (
          <input
            type={type}
            value={value}
            onChange={onChange}
            name={name}
            id={id}
            onFocus={() => setFocus(true)}
            onBlur={(e) => {
              setFocus(false);

              if (e.target.value.trim().length > 0) {
                setFocus(true);
              } else {
                setFocus(false);
              }
            }}
            required
          />
        )}
      </div>
    </>
  );
}

export default ContactInputField;
