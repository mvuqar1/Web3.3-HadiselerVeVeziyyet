import React from 'react'
import { useState } from 'react'

export default function UserLogin() {
  const [pas,setPas]=useState("password")
  const [pasVisual,setPasVisual]=useState("Show password")
  const [paserror,setPaserror]=useState("")
  const [butDisable,setButDisable]=useState("true")
  const [sub,setSub]=useState({
    email: "",
    password:""
  })
  function nameCh(e){
    // const { name, value } = e.target;
    // setSub({
    //   (previusState)
    // })
    // console.log(e.target.value.length);
    if( e.target.value.length===0 ){
      setPaserror("")
    }
    
    else if( e.target.value.length<3 ){
      console.log("dfghjk");
      setPaserror("Password 3 reqeminden azdir")
      setButDisable(true)
    }
    else if( e.target.value.length>8 ){
      console.log("dfghjk");
      setPaserror("Password 8 reqeminden coxdur")
      setButDisable(true)
    }
    else if( e.target.value.length>3 || e.target.value.length<=8 ){
      console.log("dfghjk");
      setPaserror("")
      setButDisable(false)
    }

    else{
      setPaserror("")
      setButDisable(true)
    }
    
    setSub((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    });
  }
  
function pasButton(e){
  e.preventDefault()
  setPas(pas==="password"?"text":"password") 
  setPasVisual(pasVisual==="Show password"?"Hide password":"Show password")
}
function subButton(e){
  e.preventDefault()
  // alert("Send")
  console.log('state : ', sub)
  setSub({
    email: "",
    password:""
  })
}

  return (
    <div>
       <h1>Form data</h1>
       <form>
        <div>
          <input value={sub.email} onChange={nameCh} name='email' type={"email"}></input> : Email
        </div>
        <div>
          <input value={sub.password} onChange={nameCh} name='password' type={pas}></input><button onClick={pasButton}>{pasVisual}</button>
        </div>
        <div>{paserror}</div>
        <button type='submit' disabled={butDisable} onClick={subButton}>SUBMIT</button>
       </form>
    </div>
  )
}


// import './App.css';
// import UserCV from './components/UserCV';
// import React, { useEffect, useState } from 'react';


// const rules = [
//   {
//     pattern: "(?=.{8,})",
//     errorMessage: "The password must be at least 8 characters long"
//   },
//   {
//     pattern: "(?=.*[A-Z])",
//     errorMessage: "The password must have at least one uppercase letter"
//   },
//   {
//     pattern: "(?=.*[a-z])",
//     errorMessage: "The password must have at least one lowercase letter"
//   },
//   {
//     pattern: "(?=.*[0-9])",
//     errorMessage: "The password must have at least one digit"
//   },
//   {
//     pattern: "([^A-Za-z0-9])",
//     errorMessage: "The password must have at least one special character"
//   }
// ]

// function App() {

//   const [ formData, setFormData ] = useState({
//     firstName: '',
//     surname: '',
//     email: '',
//     password: '',
//     showPassword: false
//   })

//   const [showPass, setShowPass] = useState(false)

//   const [ passwordErrors, setPasswordErrors ] = useState([])

//   const onSubmitHandler = (event) => {
//     event.preventDefault();
//     rules.forEach(rule => {
//       const testField = new RegExp(rule.pattern);
//       if (!testField.test(formData.password)) {
//         setPasswordErrors(prevState => ([
//           ...prevState, rule.errorMessage
//         ]))
//       }

//     })
//     console.log('state: ', formData)
//   }

//   const resetField = (fieldName) => {
//     setFormData(prevState => ({
//       ...prevState,
//       [fieldName]: ""
//     }))
//   }

//   const validatePasswordField = (passwordValue) => {
//     setPasswordErrors([])
//     rules.forEach(rule => {
//       const testField = new RegExp(rule.pattern);
//       if (!testField.test(passwordValue)) {
//         setPasswordErrors(prevState => ([
//           ...prevState, rule.errorMessage
//         ]))
//       } else {
//         // setPasswordErrors(passwordErrors.filter(error => error !== rule.errorMessage))
//       }

//     })
//   }

//   console.log('errors: ', passwordErrors)
//   const stateUpdate = (event) => {
//     console.log(event.target.name)
//     const {name, value, checked, type} = event.target;

//     if (name === 'password') {
//       validatePasswordField(value)
//     }

//     if (name === 'firstName') {
//       if (value.length < 6 ) {
//         setFormData(prevState => ({
//           ...prevState,
//           firstName: value
//         }))
//       }
//       return
//     }
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: type === "checkbox" ? event.target.checked : event.target.value
//     }))
//   }

//   const testEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

//   const notValid = Boolean(
//     !formData.firstName.trim() ||
//     !formData.surname.trim() ||
//     !testEmail.test(formData.email.trim()) ||
//     !formData.password.trim()
//   )
//   return (
//     <div className='App'>
//       <form className='app-form' onSubmit={onSubmitHandler}>
//         <label htmlFor='name'>
//           Name: 
//           <div>
//             <input value={formData.firstName} onChange={stateUpdate} name='firstName' id='name'/>
//             <button onClick={() => resetField('firstName')}>X</button>
//           </div>

//         </label>  

//         <label htmlFor='surname'>
//           Surname: 
//           <div>
//             <input value={formData.surname} onChange={stateUpdate} name='surname' id='surname'/>
//             <button onClick={() => resetField('surname')}>X</button>
//           </div>
//         </label>

//         <label htmlFor='email'>
//           Email:
//           <div>
//             <input
//               value={formData.email}
//               onChange={stateUpdate}
//               type="email"
//               // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
//               name='email'
//               id='email'
//             />
//             <button onClick={() => resetField('email')}>X</button>
//           </div>
//         </label>
//         <label htmlFor='password'>
//           Password:
//           <div>
//             <input value={formData.password} onChange={stateUpdate} type={formData.showPassword ? 'text' : 'password'} name='password' id='password'/>
//             <button onClick={() => resetField('password')}>X</button>
//             <div className='password-errors-wrapper'>
//               {
//                 passwordErrors.map((error, idx) => (
//                   <p key={idx} style={{color: 'red'}}>{error}</p>
//                 ))
//               }
//             </div>
//           </div>
//         </label>

        
//         <label htmlFor='showPassword'>
//           Show password:
//           <div>
//             <input
//               checked={formData.showPassword}
//               type="checkbox"
//               onChange={stateUpdate} 
//               name='showPassword' id='showPassword'/>
//           </div>
//         </label>

//         <button disabled={notValid} className='btn-submit' type='submit'>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App