import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link,useHistory} from 'react-router-dom'
import {register} from '../../redux/actions'


export default function RegisterPage() {

    const history = useHistory()
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [passwordError,setPasswordError] = useState()
    const [confirmPassword,setConfirmPassword] = useState()
    const userRegister = useSelector(state=> state.userRegisterReducer)
    const {isPending,error,userInfo}  = userRegister
    const dispatch = useDispatch()

    useEffect(()=>{
        if(userInfo){
            history.push("/")
        }
    },[userInfo])

    const submitHandler = (e)=>{
        e.preventDefault()

        confirmPassword === password ?  dispatch(register(name,email,password)) : setPasswordError('Password not the same')
       
    }

    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Register</h2>
                    </li>
                    <li>
                        {isPending && <div>loading...</div>}
                        {error && <div>{error}</div>}
    {passwordError && <div>{passwordError}</div>}
                    </li>
                    <li>
                        <label hmtlFor="name">
                            Name
                        </label>
                        <input type="text" name="name" id="name" onChange={e=>setName(e.target.value)} />
                    </li>
                    <li>
                        <label hmtlFor="email">
                            Email
                        </label>
                        <input type="email" name="email" id="email" onChange={e=>setEmail(e.target.value)} />
                    </li>

                    <li>
                        <label htmlFor="password">
                            Password
                        </label>

                        <input type="password" id="password" name="password" onChange={e=> setPassword(e.target.value)} />
                    </li>

                    <li>
                        <label htmlFor="password">
                           Confirm Password
                        </label>

                        <input type="password" id="confirmPassword" name="confirmPassword" onChange={e=> setConfirmPassword(e.target.value)} />
                    </li>

                    <li>
                        <button type="submit" className="signin-button">Signin</button>
                    </li>

                    <li>Already have an account ? <Link to="/signin"> Sign-in</Link></li>

                    
                </ul>
            </form>
        </div>
    )
}
