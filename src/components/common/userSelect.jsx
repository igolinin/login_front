import React from "react";

const UserSelect = ({ name, options, error, ...rest }) => {
  return (
    <div className="form-group">
      <select name={name} id={name} {...rest} className="form-control">
        <option value="Switch user">Switch user</option>

        {options.map(option => (
          <option key={option.email} value={option.email}>
            {option.email} * * {option.country} * * {option.role}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default UserSelect;
