import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Components/page/Login';
import Dashboard from './Components/page/Dashboard';
import { useState, useEffect } from 'react';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

// const code = new URLSearchParams(window.location.search).get('code')

function App() {

  const [token, setToken] = useState("")

  useEffect(  ()  =>  {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if(!token && hash){
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash =""
      window.localStorage.setItem("token", token)
      
    }

    setToken(token)

  }, [])

  const logout = () =>{
    setToken("")
    window.localStorage.removeItem("token")
  }

  return (
    <div className="App">
        {token ? 
        <Dashboard 
        token = {token}
        logout = {logout}
        />  
        :
        <Login />
        }
    </div>
  );
}

export default App;
