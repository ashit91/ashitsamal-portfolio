import styles from './Header.module.scss';

function Header() {
    return(
        <header >
            <a href="#" className={styles.logo}>
                <i className="fa fa-home" aria-hidden="true"></i>
            </a>
            <ul className={styles.navigation}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Extra Curricular</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header;