import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { NEXT_URL,API_URL } from '@/config/index';

const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  //useEffect(() => checkUserLoggedIn(), [])

  useEffect(()=>{

    const checkUserLoggedIn = async (user) => {
      const res = await fetch(`${NEXT_URL}/api/user`)
      const data = await res.json()
  
      if (res.ok) {
        setUser(data.user)
      } else {
        setUser(null)
      }
    }
     checkUserLoggedIn(user);
  },[])
  const router = useRouter();
  
  // Register user
  const registerme = async (user) => {
   
    const res = await fetch(`${NEXT_URL}/api/register`, {
        
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
   // console.log(res)
    const data = await res.json()
 // console.log(data.user.username)
    if (data.user.confirmed) {
      setUser(data.user)
      router.push('/account/register')
    } else {
      setError(data.message)
      setError(null)
    }
  }
  //email to admin
  const emailtoadmin = async (user) => {
   console.log(user)
    const res = await fetch(`${NEXT_URL}/api/adminemail`, {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    const data = await res.json()
    if (res.ok) {
      setUser(data.user)
      router.push('/account/register')
    } else {
      setError(data.message)
      setError(null)
    }
  }
  
  
  //Login User
  const login = async ({ email: identifier, password }) => {
    const res = await fetch(`../api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    })
    const data = await res.json()
    //console.log(data)
    if (res.ok) {
      setUser(data.user)
       router.push('/posts/add')
      //console.log(data)
    } else {
      setError(data.message)
      setError(null)
    }

  }
  //Logout User
  const logout = async () => {
    const res = await fetch(`../api/logout`, {
      method: 'POST',
    })

    if (res.ok) {
      setUser(null)
      router.push('/')
    }
  }

  // Check if user is logged in
  // const checkUserLoggedIn = async (user) => {
  //   const res = await fetch(`${NEXT_URL}/api/user`)
  //   const data = await res.json()

  //   if (res.ok) {
  //     setUser(data.user)
  //   } else {
  //     setUser(null)
  //   }
  // }
  return (

    <AuthContext.Provider value={{ user, error, registerme, emailtoadmin,login, logout }}>
      {children}
    </AuthContext.Provider>
  )

}
export default AuthContext;