import Header from "./Header";
import Footer from "./Footer";
import Menu from './Menu';
import Script from "next/script";



const Layout = ({ title, keywords, description, children ,menus}) => {
  


    return (   
         <>
      <link rel="stylesheet" href="//fonts.googleapis.com/earlyaccess/notonastaliqurdudraft.css" />

            <Header />
             <Menu menus={menus}/>
              <div className="wrapper">{children}</div>
            <Footer />
           
            <Script type="text/javascript" src="/js/theme.js" />
           
          </>
        )
};
export default Layout;