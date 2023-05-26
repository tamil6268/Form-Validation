import './App.css'
import {useState} from 'react';
function App() {
  const [userData,setUserData]=useState({})
  const [message,setMessage]=useState({});

  const validator={
    name:/[a-zA-Z]{5,12}$/i,
    mobile:/^[0-9]{10}$/,
  }
  const onChange=(e)=>{
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    let error={}
    //name:
    const NAME=validator.name.test(userData.name)
    if(!NAME){
      error.name="validation failed (5-12)length"
    }
    else if(NAME){
      error.name=""
    }
    else{
      error.name="*Required"
    }
    //mobile:
    const MOBILE=validator.mobile.test(userData.mobile)
    if(MOBILE){
      error.mobile=""
    }
    else if(userData.mobile==''){
      error.mobile="*Required (10 digits)"
    }
    else{
      error.mobile="validation failed"
    }
    //dob and age
    // console.log(new Date().getFullYear())
      // const dateOfB=userData.dob.split('').slice(0,4)
      // console.log(...[+dateOfB])
    //salary
    if(userData.salary>20000 && userData.salary<100000){
      error.salary=""
    }else{
      error.salary="range between 20000-100000"
    }
    //age:
    if(!userData.age){
      error.age="*Required"
    }
    else if(userData.age<18){
      error.age="Should be greater than 18"
    }
    else{
      error.age=""
    }
    //file:
    if(!userData.file){
      error.file="*Required"
    }
    if (Object.keys(error).length > 0) {
      setMessage(error);
      return;
    }
    else if((error.name && error.age && error.salary && error.mobile)===""){
        alert("Succefully Saved")
        setMessage({})
    }
  };
  return (
    <div id="head">
      <form onSubmit={onSubmit}>
        <h2>Application Form</h2>
        <label>Name 
        </label>
          <input type="text" name="name" placeholder='Enter Name' onChange={onChange}/>
          {<p className='one' style={{color:"red"}}> { message.name}</p>}
        <label>DateOfBirth 
        </label>
          <input type="date" name="dob" placeholder='' onChange={onChange}/>
        <label>Age
        </label>
          <input type="number" name="age" placeholder='Should be greater than 18' onChange={onChange}/>
          {<p className='one' style={{color:"red"}}> { message.age}</p>}
        <label> Mobile Number
        </label>
          <input type="number" name="mobile" placeholder='Enter number' onChange={onChange}/>
          {<p className='one' style={{color:"red"}}> { message.mobile}</p>}
        <label> Salary
        </label>
          <input type="number" name="salary" placeholder='Enter salary'  onChange={onChange}/>
          {<p className='one' style={{color:"red"}}> { message.salary}</p>}
        <label>Address
        </label>
          <input type="textarea" name="address" onChange={onChange}/>
          {<p className='one' style={{color:"red"}}> { message.address}</p>}
        <label>Gender
          <input type="radio" name="gender" onChange={onChange} value="male"/>male
          <input type="radio" name="gender" onChange={onChange} value="female"/>female
        </label>
        <label>Upload
        </label>
          <input id="move" type="file" name="file" onChange={onChange}/>
          {<p className='one' style={{color:"red"}}> { message.file}</p>}
        <label>Country
          <select name="country" onChange={onChange}>
             <option value="india">India</option>
             <option value="america">America</option>
             <option value="korea">Korea</option>
             <option value="japan">Japan</option>
             <option value="srilanka">SriLanka</option>
             <option value="singapore">Singapore</option>
          </select>
          {<p className='one' style={{color:"red"}}> { message.country}</p>}
        </label>
        <div className="head">
        <button type='submit'>Submit</button>
        <button type='reset'>Clear</button>
        </div>
      </form>
    </div>
  )
}

export default App
