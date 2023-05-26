import "./App.css";
import { useState, useRef } from "react";
function App() {
  const [userData, setUserData] = useState({});
  const [message, setMessage] = useState({});
  const [success, setSuccess] = useState(false);
  const rangeRef = useRef(20000);
  const dateRef = useRef(null);
  const [ageState,setAgeState]=useState(0)

  const validator = {
    name: /[a-zA-Z]{5,12}$/i,
    mobile: /^[0-9]{10}$/
  };
  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let error = {};
    //name:
    const NAME = validator.name.test(userData.name);
    if (!NAME) {
      error.name = "validation failed (5-12)length";
    } else if (NAME) {
      error.name = "";
    } else {
      error.name = "*Required";
    }
    //mobile:
    const MOBILE = validator.mobile.test(userData.mobile);
    if (MOBILE) {
      error.mobile = "";
    } else if (userData.mobile == "") {
      error.mobile = "*Required (10 digits)";
    } else {
      error.mobile = "*Required (10 digits)";
    }
    //dob and age
    // console.log(new Date().getFullYear())
    let age=18;
    const bduser=dateRef.current.value
    let user=+bduser.slice(0,4);
    var mydate = new Date();
    const bdworld=mydate.getFullYear()
    let validateAge=bdworld-user;
    console.log(user)
    console.log(bdworld)
    console.log(validateAge)
    if (!user) {
      error.age = "*Required";
    }
    if(validateAge>age){
      setAgeState(validateAge.length>2?'':validateAge)
       error.age=""
    }else{
      setAgeState('')
      error.age="Age Should be greater than 18"
    }
   
    //salary
    if (userData.salary > 20000 && userData.salary < 100000) {
      error.salary = "";
    } else {
      error.salary = "range between 20000-100000";
    }
    //address:
    if (!userData.address) {
      error.address = "*Required contains 250-characters";
    }
    //file:
    if (!userData.file) {
      error.file = "*Required";
    }
    //gender:
    if (!userData.gender) {
      error.gender = "*Required";
    }
    console.log(message);

    if (Object.keys(error).length > 0) {
      setMessage(error);
      return;
    } else {
      setMessage({});
    }
    if (message) {
      console.log("ok");
    }
  };
  const handleClick = () => {
    setSuccess(false);
  };
  return (
    <div id="head">
      {success ? (
        <div>
          <h1>Thanks For Your Submission...</h1>
          <button className="btn" onClick={handleClick}>
            Back
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <h2>Application Form</h2>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={onChange}
          />
          {
            <p className="one" style={{ color: "red" }}>
              {" "}
              {message.name}
            </p>
          }
          <label>DateOfBirth</label>
          <input type="date" name="dob" ref={dateRef} placeholder="" onChange={onChange} />
          {
            <p className="one" style={{ color: "red" }}>
              {" "}
              {message.age}
            </p>
          }
          <label>Age</label>
          <input
            type="number"
            name="age"
            placeholder="Should be greater than 18"
            value={ageState}
          />
          {
            <p className="one" style={{ color: "red" }}>
              {" "}
              {message.age}
            </p>
          }
          <label> Mobile Number</label>
          <input
            type="number"
            name="mobile"
            placeholder="Enter number"
            onChange={onChange}
          />
          {
            <p className="one" style={{ color: "red" }}>
              {" "}
              {message.mobile}
            </p>
          }
          <label> Salary</label>
          <input type="number" value={rangeRef.current.value} />
          <input
            type="range"
            ref={rangeRef}
            min={20000}
            max={100000}
            name="salary"
            placeholder="Enter salary"
            onChange={onChange}
          />
          {
            <p className="one" style={{ color: "red" }}>
              {" "}
              {message.salary}
            </p>
          }
          <label>Address</label>
          <textarea name="address"height={160} width={130} onChange={onChange}></textarea>
          {
            <p className="one" style={{ color: "red" }}>
              {" "}
              {message.address}
            </p>
          }
          <label>
            Gender
            <input
              type="radio"
              name="gender"
              onChange={onChange}
              value="male"
            />
            male
            <input
              type="radio"
              name="gender"
              onChange={onChange}
              value="female"
            />
            female
            {
              <p className="one" style={{ color: "red" }}>
                {" "}
                {message.gender}
              </p>
            }
          </label>
          <label>Upload</label>
          <input id="move" type="file" name="file" onChange={onChange} />
          {
            <p className="one" style={{ color: "red" }}>
              {" "}
              {message.file}
            </p>
          }
          <label>
            Country
            <select name="country" onChange={onChange}>
              <option value="india">India</option>
              <option value="america">America</option>
              <option value="korea">Korea</option>
              <option value="japan">Japan</option>
              <option value="srilanka">SriLanka</option>
              <option value="singapore">Singapore</option>
            </select>
            {
              <p className="one" style={{ color: "red" }}>
                {" "}
                {message.country}
              </p>
            }
          </label>
          <div className="head">
            <button type="submit">Submit</button>
            <button type="reset">Clear</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default App;
