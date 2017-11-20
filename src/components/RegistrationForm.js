import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <h3>Registration Form</h3>
        <label for="name">Name: </label>
        <input type="text" name="" value="" placeholder="Your Name"/>
        <br/>
        <label for="pw">Password: </label>
        <input type="password" name="" value="" placeholder="Password"/>
        <br/>
        <button type="submit" name="submit">Submit</button>
      </form>
    );
  }
};

export default RegistrationForm;
