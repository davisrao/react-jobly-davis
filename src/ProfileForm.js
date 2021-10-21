import { useState, useContext } from "react";
import UserContext from "./userContext";
import Alert from "./Alert";

/** Form for editing profile information
 * 
 * Props: 
 * - handleEdit - function to run on parent
 * 
 * State: 
 * - formData
 * - message - success or failure message on submit
 * 
 * Context: 
 * - userData - an object like { username, firstName, lastName, email, isAdmin}
 * 
 * Routes -> ProfileForm
 * 
 */
 function ProfileForm( { handleEdit }){
    const [formData, setFormData] = useState({ term: ""});
    const [message, setMessage] = useState(null);

    console.log("* SearchForm ", { handleEdit, formData });

    const userData = useContext(UserContext);


  /** Update form input. */
  function handleChange(evt) { 
    const { name, value } = evt.target;
    setFormData(fData => ({
        ...fData,
        [name]: value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("Check out state ->", formData);
    setMessage(handleEdit(formData));
  }

  return (
    <div className="row justify-content-center pt-3">
      <form className="ProfileForm col-8" onSubmit={handleSubmit}>

        <div className="form-group">
          <input
              id="ProfileForm-username"
              name="username"
              className="form-control"
              onChange={handleChange}
              value={userData.username}
              aria-label="Username"
          />
        </div>
        <div className="form-group">
          <input
              id="ProfileForm-firstName"
              name="firstName"
              className="form-control"
              onChange={handleChange}
              value={userData.firstName}
              aria-label="First Name"
          />
        </div>
        <div className="form-group">
          <input
              id="ProfileForm-lastName"
              name="lastName"
              className="form-control"
              onChange={handleChange}
              value={userData.lastName}
              aria-label="Last Name"
          />
        </div>
        <div className="form-group">
          <input
              id="ProfileForm-email"
              name="email"
              className="form-control"
              onChange={handleChange}
              value={userData.email}
              aria-label="Email"
          />
        </div>
        <div className="form-group">
          <input type="password"
              id="ProfileForm-password"
              name="password"
              className="form-control"
              onChange={handleChange}
              value={userData.password}
              aria-label="Confirm password to save changes:"
          />
        </div>
        { message 
        ? <Alert message={message} />
        : null
        }
        <div>
          <button className="btn-primary rig btn btn-sm ProfileForm-Button">
            Save Changes
          </button>
        </div>

      </form>
    </div>
  );
}

export default ProfileForm;