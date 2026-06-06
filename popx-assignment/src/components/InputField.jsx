function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  name,
  required = false,
}) {
  return (
    <div className="input-field">
      <label>
        {label}
        {required && (
          <span className="required">*</span>
        )}
      </label>

      <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;