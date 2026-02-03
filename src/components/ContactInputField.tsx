import React, { useState, type Dispatch, type SetStateAction } from "react";

interface FocusState {
  first: string | null;
  last: string | null;
  email: string | null;
  subject: string | null;
}

interface ContactInputFieldProps {
  id: keyof FocusState;
  label: string;
  value: string | null;
  setValue: (id: keyof FocusState, value: string) => void;
  type: string;
  name: string
}

function ContactInputField({
  id,
  label,
  value,
  setValue,
  type,
  name
}: ContactInputFieldProps) {
  const [focus, setFocus] = useState<boolean | null>(null);

  return (
    <>
      <div className="input-field">
        <label style={{ top: focus || value ? "-11px" : "15px" }} htmlFor={id}>
          {label}*
        </label>
        <input
          type={type}
          value={value || ""}
          name={name}
          onChange={(e) => {
            setValue(id, e.target.value);
          }}
          id={id}
          onFocus={() => setFocus(true)}
          onBlur={(e) => {
            setFocus(e.target.value.trim().length > 0 ? true : false);
          }}
          required
        />
      </div>
    </>
  );
}

export default ContactInputField;
