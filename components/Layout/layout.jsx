//styles
import styles from "./layout.module.scss";

//components
import Menu from "../Menu/Menu";
import Header from "../Header/header";
import Footer from "../Footer/footer";



const Layout = ({children}) => {

    return (
        <div className={styles.container}> 
             <Header></Header>          
             <Menu></Menu> 
             {children}
             <Footer></Footer>
        </div>
    )
};


export default Layout;