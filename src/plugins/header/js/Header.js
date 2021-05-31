import styles from './Header.module.scss';
import config from '../conf/msgs_en.json';

const Header = (props) => {
    const { navigations } = config.data;

    const navigationHandeler = (event) => {
        props.navigationHandeler(event.target.hash ? event.target.hash : event.target.parentNode.hash);
    }

    return(
        <header >           
            <ul className={styles.navigation}>
                {navigations.map((nav, index) => {
                    return (
                        <li key={index}>
                            <a href={nav.path} onClick={navigationHandeler}>
                                {nav.label ? nav.label : <i className="fa fa-home" aria-hidden="true"></i>}
                            </a>                            
                        </li>
                    );
                })}
            </ul>
        </header>
    )
}

export default Header;