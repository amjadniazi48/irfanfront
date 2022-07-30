import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
export default function Header() {
  const { t, lang } = useTranslation('common')
  const {locale} = useRouter()
    return (
      <>
        <footer  dir={locale === 'ur-Pk' ? 'rtl' : 'ltr'}>
       
          <div id="footer" className="bg-dark py-5 px-3">
          <p  style={{color:'white',textAlign:'center'}}> &copy;&nbsp; {new Date().getFullYear()},&nbsp;{t('common:copyright')} </p>
          </div>
         
        </footer>
      <a className="back-top btn btn-light border position-fixed r-1 b-1" href="#">
        <svg className="bi bi-arrow-up" width="1rem" height="1rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z" clipRule="evenodd"></path>
          <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z" clipRule="evenodd"></path>
        </svg>
      </a>
    </>
    )
}