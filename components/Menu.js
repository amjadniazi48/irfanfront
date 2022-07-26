import { useRouter } from "next/router";
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation'
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
export default function Menu({ menus }) {  
    const { user, logout } = useContext(AuthContext);
    const { t, lang } = useTranslation('common')
   // console.log(user)
    const  router = useRouter();
    return (
        <>
            <div id="showbacktop" className="mobile-sticky showbacktop full-nav bg-white border-lg-1 border-bottom shadow-b-sm border-none py-0" dir={router.locale === 'ur-PK' ? 'rtl' : 'ltr'}>
                <div className="container">
                    <nav id="main-menu" className="main-menu navbar navbar-expand-lg navbar-light px-2 px-lg-0 py-0">
                        <a id="showStartPush" aria-label="sidebar menu"
                            className="navbar-toggler sidebar-menu-trigger side-hamburger border-0 px-0" href="javascript:;" >
                            <span className="hamburger-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </a>
                        <button className="navbar-toggler px-0 my-2" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo2" aria-controls="navbarTogglerDemo2" aria-expanded="false"
                            aria-label="Toggle navigation">

                        </button>
                        <div id="navbarTogglerDemo1" className="collapse navbar-collapse hover-mode">

                            <div className="logo-showbacktop">
                                <a href="#" className="navbar-brand custom-logo-link" rel="home"
                                    aria-current="page">
                                    <img width="271" height="60"
                                        src="https://demo.bootstrap.news/personal/wp-content/uploads/2019/11/cropped-qwigley.regular.png"
                                        className="img-fluid" alt="Personal Blog" />
                                </a>
                            </div>
                            <ul id="start-main" className="navbar-nav main-nav mx-auto navbar-uppercase first-start-lg-0">
                                {menus && menus.global.data.attributes.navigation.map((menu) => {
                                    return (
                                        <>
                                            {menu && menu.panels.map(item => {
                                                return (
                                                    <li id="menu-item" className="nav-item" key={item.id}>
                                                        {item.sublinks.length == 0 ?
                                                            <Link href={ (item.link.label=="Home" ||item.link.label=="صفحہ اول")? "/":`/${item.link.href}`}>
                                                            <a title={item.link.label} href="#" className="nav-link">{item.link.label}</a>
                                                            </Link>
                                                            :
                                                            <>
                                                                <a title="Dropdown" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                                    className="dropdown-toggle nav-link" id="menu-item-dropdown">{item.link.href}</a>
                                                                <ul className="dropdown-menu" aria-labelledby="menu-item-dropdown" role="menu">

                                                                    {item && item.sublinks.map((subl) => {
                                                                        return (
                                                                            <li id="menu-item" className="nav-item" key={subl.id}>
                                                                                <a title="Sub menu" href="#" className="dropdown-item">{subl.href}</a></li>
                                                                        );
                                                                    })}
                                                                </ul>
                                                            </>
                                                        }
                                                    </li>
                                                );
                                            })}
                                        </>
                                    )
                                })}
                                 {user && t? (
                                     <>
                                  <li id="menu-item" className="nav-item"><Link href={'/ur-PK/posts/add'}><a className="nav-link" style={{color:'#F54637'}}>{t('common:addPost')}</a></Link></li>  
                                 <li id="menu-item" className="nav-item"><a href="javascript:;" onClick={() => logout()} className="nav-link" style={{color:'#F54637'}}>{t('common:logout')}({user.username})</a></li>
                                    </>
                                 ):
                                 (
                                     <>
                                
                                    </>
                                 ) 
                                }  
                                 
                            </ul>
                           
                          
                        </div>
                    </nav>

                    <div className="collapse navbar-collapse col-12 py-2" id="navbarTogglerDemo2">

                        <form className="form-inline" method="get" action="https://demo.bootstrap.news/personal/" role="search">
                            <div className="input-group w-100">
                                <input className="form-control border border-right-0" name="s" type="text" placeholder="Search &hellip;"
                                />
                                <span className="input-group-prepend bg-light-dark">
                                    <input className="submit btn btn-primary" id="searchmobile" name="submit" type="submit" value="Search" />
                                </span>
                            </div>
                        </form>

                    </div>
                </div>
            </div >
            <div className="mobile-side">

                <div id="back-menu" className="back-menu back-menu-start">
                    <span className="hamburger-icon open">
                        <svg className="bi bi-x" width="2rem" height="2rem" viewBox="0 0 16 16" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                                clipRule="evenodd"></path>
                            <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                                clipRule="evenodd"></path>
                        </svg>
                    </span>
                </div>
                <nav id="mobile-menu" className="menu-mobile d-flex flex-column push push-start shadow-r-sm bg-white">

                    <div className="mobile-content mb-auto">
                        <div className="logo-sidenav p-2">
                          
                        <Link href='/' className="navbar-brand custom-logo-link" rel="home" aria-current="page" passHref>
                                    <a><h1> {t('common:irfanshehzad')} </h1></a></Link>  
                        </div>


                        <div className="sidenav-menu">
                            <nav className="navbar navbar-inverse">
                                <ul id="side-menu" className="nav navbar-nav list-group list-unstyled side-link">
                                {menus && menus.global.data.attributes.navigation.map((menu) => {
                                    return (
                                        <>
                                            {menu && menu.panels.map(item => {
                                                return (
                                                    <li id="menu-item" className="nav-item" key={item.id}>
                                                        {item.sublinks.length == 0 ?
                                                            <Link href={ (item.link.label=="Home" ||item.link.label=="صفحہ اول")? "/":`/${item.link.href}`}>
                                                            <a title={item.link.label} href="#" className="nav-link">{item.link.label}</a>
                                                            </Link>
                                                            :
                                                            <>
                                                                <a title="Dropdown" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                                    className="dropdown-toggle nav-link" id="menu-item-dropdown">{item.link.href}</a>
                                                                <ul className="dropdown-menu" aria-labelledby="menu-item-dropdown" role="menu">

                                                                    {item && item.sublinks.map((subl) => {
                                                                        return (
                                                                            <li id="menu-item" className="nav-item" key={subl.id}>
                                                                                <a title="Sub menu" href="#" className="dropdown-item">{subl.href}</a></li>
                                                                        );
                                                                    })}
                                                                </ul>
                                                            </>
                                                        }
                                                    </li>
                                                );
                                            })}
                                        </>
                                    )
                                })}
                                 {user && t? (
                                     <>
                                 <li id="menu-item" className="nav-item"><a href="javascript:;" onClick={() => logout()} className="nav-link" style={{color:'#F54637'}}>{t('common:logout')}({user.username})</a></li>
                                    </>
                                 ):
                                 (
                                     <>
                                  
                                    </>
                                 ) 
                                }  
                                 
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="mobile-copyright mt-5 text-center">
                        <p>Copyright BootNews - All rights reserved.</p>
                    </div>
                </nav>
            </div>
        </>
    )
}
