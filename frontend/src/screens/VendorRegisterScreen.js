import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { vendorregister } from '../actions/userActions';

function VendorRegisterScreen(props) {

  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(vendorregister(fname, lname, email, mobile, city, password, repassword));
  }
  return <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Create Vendor Account</h2>
        </li>
        <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="name">
            First Name
          </label>
          <input type="text" name="fname" id="fname" onChange={(e) => setfName(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="name">
           Last Name
          </label>
          <input type="text" name="lname" id="lname" onChange={(e) => setlName(e.target.value)}>
          </input>
        </li>

        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="mobile">
            Mobile
          </label>
          <input type="text" name="mobile" id="mobile" onChange={(e) => setMobile(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="city">
            City
          </label>
          <input type="text" name="city" id="city" onChange={(e) => setCity(e.target.value)}>
          </input>
        </li>

        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="rePassword">Re-Enter Password</label>
          <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Register</button>
        </li>
        <li>
          Already have an account?
          <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect} className="button secondary text-center" >Sign In</Link>
        </li>
        <li>
        Distributor Account Register?
        </li>
        <li>
          <Link to="/register" className="button">Click Here</Link>
        </li>

      </ul>
    </form>
  </div>
}
export default VendorRegisterScreen;