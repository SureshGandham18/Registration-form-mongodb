import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'
import styled from 'styled-components'
function Login() {
    const history = useNavigate();
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=='exist'){
                    // alert('User already exist')
                    history('/home',{state:{id:email}})
                }
                else if(res.data=='not exist'){
                    alert('User have not signup')
                    
                }
            })
            .catch(e=>{
               alert('wrong details')
               console.log(e) 
            })
        }catch(e){
            console.log(e)
        }
    }
  return (
    <div className='login'>
        
        <FORM action='POST'>
        <Title>LOGIN</Title>
            <input type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/><br/>
            <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/><br/>
            <button onClick={submit}>Submit</button>
        
        <br/>
        <p>OR</p>
        <br/>
        <h4><Link to='/signup'>Signup Page</Link></h4>
        </FORM>
    </div>
  )
}

export default Login
const FORM = styled.div`
color:white;
max-width: 416px;
width: 100%;
margin-left:30%;
margin-top:10%;
background-color: black;
padding: 25px;
border-radius: 5px;
box-shadow: 0 5px 10px rgba(0,0,0,0.15);
input{
    background-color:gold;
    width:400px;
    border:none;
    height:26px;
    margin-bottom:10px;
    padding:5px;
    border-radius:3px;
}
button{
    margin-left:40%;
    border:none;
    background-color:cyan;
    height:25px;
    width:80px;
    border-radius:3px;
}
p{
    margin-top:3px;
    margin-left:47%;
}
h4{
    margin-top:-35px;
    margin-left:38%;
}

`
const Title = styled.div`
font-size: 25px;
  font-weight: 500;
  margin-left:42%;
  margin-bottom:7px;
`