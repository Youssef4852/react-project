import React, { useState, type Dispatch, type SetStateAction } from "react";

interface FocusState {
  message: string | null;
}

interface ContactTextareaFieldProps {
  id: keyof FocusState;
  label: string;
  value: string | null;
  setValue: (id: keyof FocusState, value: string) => void;
  name: string
}

function ContactTextareaField({ id, label, value, name, setValue }: ContactTextareaFieldProps) {
  let [focus, setFocus] = useState<FocusState>({
    message: null
  });
  const [isFocused, setIsFocused] = useState(false)
  return (
    <>
      <div className="input-field">
        <label style={{ top: isFocused || value ? "-11px" : "15px" }} htmlFor={id}>
          {label}*
        </label>
        <textarea
          id={id}
          value={value || ''}
          name={name}
          onChange={(e) => {
            setValue(id, e.target.value);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(e.target.value.trim().length > 0 ? true : false);
          }}
          required
        ></textarea>
      </div>
    </>
  );
}

export default ContactTextareaField;
