import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert'
import { useForm } from 'react-hook-form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from "next/router";
import { BsFillPersonPlusFill } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
import AuthContext from '@/context/AuthContext'
import { useState, useContext } from 'react'
export default function RegisterPage() {
  const { t, lang } = useTranslation('common')
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const { registerme, emailtoadmin,error } = useContext(AuthContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
 
  
  const handleRegister = (e) => {

    //  e.preventDefault()
   
    registerme({ username, email, password });
    emailtoadmin({username, email,password});
   
    setShow(true)
  }
  return (

    <Container className='mt-3 mb-3' dir={router.locale === 'ur-PK' ? 'rtl' : 'ltr'}>
      <Alert show={show} variant="success" ><b>Registration Successfull.</b> A confirmation message has been sent to your email address, please follow the instructions in the email to activate your account </Alert>
      <Row>
        <p className="h1 mt-2" style={{ 'fontWeight': 'bolder', 'color': '#4A5EC3' }}>
          <BsFillPersonPlusFill style={{ color: '#4A5EC3' }} />&nbsp;&nbsp;&nbsp;{t('common:register')}</p>
        <hr></hr>
        <Col md={12} >
          <Card className='bg-light'>
            <Card.Body>
              <form onSubmit={handleSubmit(handleRegister)}>
                <div>
                  <input
                    type="text"
                    className='form-control mb-3'
                    id="username"
                    value={username}
                    placeholder={t('common:username')}
                    {...register("username", { required: true })}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {errors.username && <p className="text-danger">{t('common:usernameV')}</p>}
                </div>
                <div>
                  <input
                    type='email'
                    className="form-control mb-3"
                    id='email'
                    value={email}
                    placeholder={t('common:email')}
                    {...register("email", { required: true })}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <p className="text-danger">{t('common:emailV')}</p>}
                </div>
                <div>

                  <input
                    type='password'
                    className="form-control mb-3"
                    id='password'
                    value={password}
                    placeholder={t('common:passwordV')}
                    {...register("password", { required: true })}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && <p className="text-danger">{t('common:passwordV')}</p>}
                </div>
                <div>

                  <input
                    type='password'
                    className="form-control mb-3"
                    id='passwordConfirm'
                    value={passwordConfirm}
                    placeholder={t('common:confirmPasswordV')}
                    {...register("passwordConfirm", { required: true })}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                  />
                  {errors.passwordConfirm && <p className="text-danger">{t('common:confirmPasswordV')}</p>}
                </div>

                <input type='submit' value={t('common:register')} className='btn btn-primary mt-2' />
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

  )
}
