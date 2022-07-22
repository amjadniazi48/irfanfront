import { useState, useEffect, useContext } from 'react'
import {BsFillDoorOpenFill} from "react-icons/bs";
import Alert from 'react-bootstrap/Alert'
import {useForm} from 'react-hook-form';
import AuthContext from '@/context/AuthContext'
import { useRouter } from "next/router";
import Container from 'react-bootstrap/Container';
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link';
export default function LoginPage() {  
    const { t, lang } = useTranslation('common')
    const router = useRouter();
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error } = useContext(AuthContext)
   //console.log(error+'hello')
     useEffect(() => error && setShow(true))
    const {register,handleSubmit,formState:{errors}} = useForm();
    const handleLogin = (e) => {
       // e.preventDefault();  
        login({ email, password })
      
    }
    return (
        <Container className='mt-3 mb-3' dir={router.locale === 'ur-PK' ? 'rtl' : 'ltr'}>  
         
            <div className="card bg-light mx-auto" style={{width:"40em"}}>
            <Alert  style={{width:"40em",textAlign:"center"}} show={show} variant="danger"  onClose={() => setShow(false)} dismissible>Invalid identifier or password</Alert>  
                <div className="card-body">
                    <h3 className="card-title"  style={{'fontWeight':'bolder','color':'#4A5EC3'}}><BsFillDoorOpenFill style={{color:'#4A5EC3'}}/>&nbsp;&nbsp;{t('common:login')}</h3>
                    <hr></hr>
                    <form onSubmit={handleSubmit(handleLogin)}>
                     
                        <div>
                           
                            <input
                                type='email'
                                className="form-control"
                                id='email'
                                value={email}
                                placeholder={t('common:email')}
                                {...register("email",{required:true})}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                             {errors.email && <p className="text-danger">{t('common:emailV')}</p>}
                        </div>
                        <div>
                         
                            <input
                                type='password'
                                id='password'
                                className="form-control"
                                value={password}
                                placeholder={t('common:password')}
                                {...register("password",{required:true})}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                               {errors.password && <p className="text-danger">{t('common:passwordV')}</p>}
                        </div>
                       
                        <input type='submit' value={t('common:login')} className='btn btn-primary mt-2' />
                    </form>
                </div>
                <div className="card-footer">
                    <p className='text-center'>New User? <Link href={'/account/register'}><a>Create Your Account</a></Link></p>
                    </div>
            </div>
       </Container>
    )
}