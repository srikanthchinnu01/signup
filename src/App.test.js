import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  function myfun(){
    var uname=document.getElementById('name')
    var lname=document.getElementById('lname')
    var email=document.getElementById('email')
    var pwd=document.getElementById('pwd')
    var pwd1=document.getElementById('pwd1')
    //errors
    var uname_err= document.getElementById('uname-output')
    var lname_err= document.getElementById('lname-output')
    var email_err= document.getElementById('email-output')
    var pwd_err= document.getElementById('pwd-output')
    var pwd1_err= document.getElementById('pwd1-output')
    var length= document.getElementById('pwd-len')
    var status= true
//name validation
if(uname.value=="" || uname.value==undefined)
{
uname_err.innerHTML="Enter User Name"
uname.style.border = " 3px solid red "
uname_err.className=`text-danger`
status =false;

}
else if(!uname.value.match(/^[a-z]+$/))
{
   uname_err.innerHTML="Enter lower case alphabets only"
    uname.style.border = " 3px solid red "
    uname_err.className=`text-danger`
    status =false;
}
else
{
uname_err.innerHTML="Thankyou"
uname.style.border = " 3px solid green"
uname_err.className=`text-success`
}
//lastname validation
if(lname.value=="" || lname.value==undefined)
{
lname_err.innerHTML="Enter Last Name"
lname.style.border = " 3px solid red "
lname_err.className=`text-danger`
status =false;

}
else if(!lname.value.match(/^[A-Z]+$/))
{
   lname_err.innerHTML="Enter upper case alphabets only"
    lname.style.border = " 3px solid red "
    lname_err.className=`text-danger`
    status =false;
}
else
{
lname_err.innerHTML="Thankyou"
lname.style.border = " 3px solid green"
lname_err.className=`text-success`
}
//email validation
if(email.value=="" || email.value==undefined)
{
 email_err.innerHTML="Enter email id"
 email.style.border="3px solid red"
 email_err.className=`text-danger`
 status=false;
}
else if(!email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/))
{
 email_err.innerHTML="Enter valid email id"
 email.style.border="3px solid red"
 email_err.className=`text-danger`
 status=false;
}

else 
{

email_err.innerHTML="Thanyou"
email.style.border="3px solid green"
 email_err.className=`text-success`
}
//password validation      
if(pwd.value=="" || pwd.value==undefined)
{
 pwd_err.innerHTML="Enter password"
 pwd.style.border = " 3px solid red "
 pwd_err.className=`text-danger`
 status=false;
}
else if(!pwd.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/))
{
 pwd_err.innerHTML="Enter 1 uppercase 1 lowercase 1specialcharacter 1number"
 pwd.style.border = " 3px solid red "
 pwd_err.className=`text-danger`
 status=false;
}
else 
{

pwd_err.innerHTML="Thankyou"
pwd.style.border = " 3px solid green "
pwd_err.className=`text-success`
}
//confirm pass word
if(pwd!=pwd1)
{
    pwd1_err.innerHTML="Password not matched"
    pwd1.style.border = " 3px solid red "
    pwd1_err.className=`text-danger`
}
else{
    pwd1_err.innerHTML="Password matched"
    pwd1.style.border = " 3px solid green "
pwd1_err.className=`text-success`
}
//password week/strong
if(pwd.value.length<=7)
{
    length.innerHTML="password is week"
    length.className=`text-danger`
    
}
else{
    length.innerHTML="pass is strong"
    length.className=`text-success`
    
}
//Localstorage
  var fname=document.getElementById('name').value
  var lname=document.getElementById('lname').value
  var email=document.getElementById('email').value
  var pwd=document.getElementById('pwd').value
  var pwd1=document.getElementById('pwd1').value
  var phone=document.getElementById('phone').value
  var dob=document.getElementById('dob').value
  var gender=document.getElementById('male').value
  var gender1=document.getElementById('female').value
  var gender2=document.getElementById('others').value
  var state=document.getElementById('countrySelect').value
  var city=document.getElementById('citySelect').value
  var Address=document.getElementById('para').value
  var tl=document.getElementById('tl').value
  var en=document.getElementById('en').value
  var hi=document.getElementById('hi').value
  var photo=document.getElementById('photo').value
  //var checked=document.getElementById('checked').value

  var user={
    firstname:fname,
    lastname:lname,
    email:email,
    password:pwd,
    password1:pwd1,
    phone:phone,
    Dateodbirth:dob,
    gender:gender,
    gender:gender1,
    gender:gender2,
    state:state,
    city:city,
    Adress:Address,
    Telugu:tl,
    english:en,
    Hindhi:hi,
    photo:photo,
   // checked:checked


  }

  
 var json=JSON.stringify(user)
  localStorage.setItem("firstname",fname)
  localStorage.setItem("lastname",lname)
  localStorage.setItem("email",email)
  localStorage.setItem("password",pwd)
  localStorage.setItem("password",pwd1)
  localStorage.setItem("phone",phone)
  localStorage.setItem("dob",dob)
  localStorage.setItem("gender",gender)
  localStorage.setItem("gender",gender1)
  localStorage.setItem("gender",gender2)
  localStorage.setItem("state",state)
  localStorage.setItem("city",city)
  localStorage.setItem("address",Address)
  localStorage.setItem("Telugu",tl)
  localStorage.setItem("english",en)
  localStorage.setItem("hindhi",hi)
  localStorage.setItem("photo",photo)
  //localStorage.setItem("checked",checked)
  console.log('user added')


return status
}
//States and Cities

var citiesByState = {
    Telangana: ["Nizamabad", "Hydrabad", "Secundrabad", "Kamareddy","waranagl"],
    AP: ["Vijayawad", "Vizag", "Guntur", "Ongole"],
  };
  function makeSubmenu(value) {
    if (value.length == 0)
      document.getElementById("citySelect").innerHTML = "<option></option>";
    else {
      var citiesOptions = "";
      for (cityId in citiesByState[value]) {
        citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
      }
      document.getElementById("citySelect").innerHTML = citiesOptions;
    }
  }
  //address
  function myone()
  {
      var input_dom=document.getElementById('para')
      var span_dom=document.getElementById('para-span')

      var meter_dom=document.getElementById('para-meter')
     
      span_dom.innerHTML=input_dom.value.length
      meter_dom.value=input_dom.value.length
      
  }
  //image preview
  function getImagePreview(event) {
    var image = URL.createObjectURL(event.target.files[0]);
    var imagediv = document.getElementById("preview");
    var newimg = document.createElement("img");
    imagediv.innerHTML = "";
    newimg.src = image;
    newimg.width = "200";
    imagediv.appendChild(newimg);
  }
  //show password
  function mypassword(){
    var show=document.getElementById('pwd')
    if(show.type=="password"){
      show.type="text";
    }else{
      show.type='password'
    }
  }
  //checkbox
  function ischecked(){
    if(document.getElementById('my-checkbox').checked)
    {
      document.getElementById("message").textContent="checked"
    }
    else
    {
      document.getElementById("message").textContent="please select the check box"
    }

  }
});
