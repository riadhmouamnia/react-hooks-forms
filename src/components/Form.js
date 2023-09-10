import React from "react";

function Form(props) {
  return (
    <form>
      <input
        type="text"
        onChange={props.handleFirstNameChange}
        value={props.firstName}
      />
      <br />
      <input
        type="text"
        onChange={props.handleLastNameChange}
        value={props.lastName}
      />
      <br />
      <label htmlFor="newsletter">
        <input
          type="checkbox"
          id="newsletter"
          onChange={props.handleNewsletterChange}
          checked={props.newsletter}
        />
        Subscribe to our Newsletter?
      </label>

      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
