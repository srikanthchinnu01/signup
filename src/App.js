import './App.css';
import { useState,useEffect } from 'react';
import Phone from './phone';
import ImageUpload from './image'

// import Signup from './components/Signup'

function App() {
//   const [data,setdata]=useState({
//     firstname:'',
//     lastname:'',
//     email:'',
//     password:'',
//     confirmPassword:''

//   })
//   const [error,seterror]=useState(false)
  
//   const {firstname,lastname,email,password,confirmPassword}=data;
//   const changeHandler=e=>{
//     setdata({...data,[e.target.name]:e.target.value})
  
//   }
//  const submitHandler=e=>{
//     e.preventDefault()
//     if(firstname.length==0||lastname.length==0){
//         seterror(true)
//     }
//     console.log(data)
const initialValues={firstname:"",lastname:"",email:"",password:"",confirmPassword:""};
const [formvalues,setFormvalues]=useState(initialValues);
const [formErrors,setFormErrors]=useState({});
const [isSubmit,setSubmit] =useState(false);
const [wordcount,setWordcount]=useState(0)

  const [agree, setAgree] = useState(false);
  

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }

const changeHandler=(e)=>{
  const {name,value}=e.target;
  setFormvalues({...formvalues,[name]:value});
};
   
 const submitHandler=(e)=>{
  e.preventDefault();
  setFormErrors(validate(formvalues))
  setSubmit(true)
 }
 useEffect(()=>{
  console.log(formErrors)
  if(Object.keys(formErrors).length===0 && isSubmit)
  {
    console.log(formvalues)
  }

 },[formErrors])
 

 const validate=(values)=>{
  const errors={}
  const regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  const fname=/^[a-z]+$/
  const pword=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
  if(!values.firstname){
    errors.firstname="username is required"
  }else if(!fname.test(values.firstname)){
    errors.firstname="Enter lower case alphabets only"
  }
  if(!values.lastname){
    errors.lastname="lastname is required"
  }
  if(!values.email){
    errors.email="email is required"
  }else if (!regex.test(values.email)){
    errors.email="this is not a valid email format"
  }
  if(!values.password){
    errors.password="password is required"
  }else if(!pword.test(values.password)){
    errors.password="Enter 1 uppercase 1 lowercase 1specialcharacter 1number"
  }
  if(!values.confirmPassword){
    errors.confirmPassword="confrimpassword is required"
   }else if (values.password !== values.confirmPassword) {
     errors["confirmPassword"] = "Confirm password is Not Matched";
 }
 if(!values.Address){
  errors.Address="Address is required"
 }else if (values.Address.length  > 50 ){
  errors.Address="enter 50 charcters only"
 }
  return errors
 }
  return (<>
   <div className='container'>
 {  Object.keys(formErrors).length===0 && isSubmit ? (<div className='ui message success'>signed successfully</div>):(<pre>{JSON.stringify()}</pre>)}
   <form onSubmit={submitHandler}>
   <center>  <h1>Registration Form</h1> </center>
  <hr/>
  <div>
  <label> Firstname: </label> 
<input type="text" name="firstname" value={formvalues.firstname} placeholder= "Firstname" autoFocus onChange={changeHandler} /> 

</div>
<p>{formErrors.firstname}</p>
<div>
<label> Lastname: </label>  
<input type="text" name="lastname" value={formvalues.lastname} placeholder="Lastname"  onChange={changeHandler} /> 

</div>
<p>{formErrors.lastname}</p>
<div>
<label> Email: </label>  
<input type="text" name="email" value={formvalues.email} placeholder="username@gmail.com" onChange={changeHandler} /> 
<span id="email-output"></span>
</div>
<p>{formErrors.email}</p>
<div>
<label> Password: </label>  
<input type="password" name="password" id='pwd' value={formvalues.password} placeholder="password" onChange={changeHandler} /> 

<span id="pwd-output"></span>
<p id="pwd-len"></p>
</div>
<p>{formErrors.password}</p>
{/* <div>
   Show Password: <input type="checkbox" name='show password' />
</div> */}
<div>
<label> Re-TypePassword: </label>  
<input type="password" name="confirmPassword" value={formvalues.confirmPassword} placeholder="confirmpassword" onChange={changeHandler} /> 


</div>


<div >
    {/* <input name="phone" type="text" id="phone" placeholder='Please enter phone number'  maxLength="10"/> */}
<label>Phone:</label>
    <Phone />
</div>
<label>Date Of Birth:</label>
<input type="date" name="date" id="dob"/>
<div>
    <label> 
    Gender :
    </label>
    <input type="radio" value="Male" name="gender" id="male"  /> Male 
    <input type="radio" value="Female" name="gender" id="female"/> Female 
    <input type="radio" value="Other" name="gender" id="others"/> Other
    
    </div>
    
        <div>
            <label className="form-label">Address</label>
            <textarea maxLength={50}
            onChange={(e)=>setWordcount(e.target.value.length)}placeholder='Please Enter Your Address In 50 Characters Only'  ></textarea>
            <span><b>No of words:</b>{wordcount}/50</span>
             </div> 
             
          <div>
    <label>Languages known:</label>
<input type="checkbox" value="telugu" name="languages" id="tl"/>Telugu
<input type="checkbox" value="english" name="languages" id="en"/>English
<input type="checkbox" value="hindhi" name="languages" id="hi" />Hindi

</div>
<div>
            <label>Upload Image :</label>
             <ImageUpload  id="photo"/>
             </div>
          
             <div>
          <input type="checkbox" id="agree" onChange={checkboxHandler} />
          <label htmlFor="agree"> I agree to <b>terms and conditions</b></label>
        </div>

        {/* Don't miss the exclamation mark* */}
        <button disabled={!agree} className="btn" >
          Submit
        </button>


    </form>  
     </div>
   </> );
}

export default App;
