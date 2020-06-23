import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link,useHistory} from 'react-router-dom'
import {signin} from '../../redux/actions'


export default function SigninPage() {

    const history = useHistory()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const userSignin = useSelector(state=> state.userSigninReducer)
    const {isPending,error,userInfo}  = userSignin
    const dispatch = useDispatch()

    useEffect(()=>{
        if(userInfo){
            history.push("/")
        }
    },[userInfo])

    const submitHandler = (e)=>{
        e.preventDefault()

        dispatch(signin(email,password))
    }

    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Sign-in</h2>
                    </li>
                    <li>
                        {isPending && <div>loading...</div>}
                        {error && <div>{error}</div>}
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
                        <button type="submit" className="signin-button">Signin</button>
                    </li>

                    <li>New to amazona ?</li>

                    <li>
                        <Link to="/register" className="create-account-button"> Create your amazona account </Link>
                    </li>
                </ul>
            </form>
        </div>
    )
}
