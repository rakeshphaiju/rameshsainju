import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "../css/style.css";

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label><br/>
      <input
        type={type}
        name={name}
        className={classnames("text-input", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
