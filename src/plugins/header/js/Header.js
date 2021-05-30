import styles from './Header.module.scss';

function Header() {
    return(
        <header >
           
            <ul className={styles.navigation}>
                <li><a href="/"><i className="fa fa-home" aria-hidden="true"></i></a></li>
                <li><a href="#about">About</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/extra-curricular">Extra Curricular</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header;