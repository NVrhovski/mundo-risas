import { useRef } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';

interface IPropsHeader {
    isMobile: boolean
}

const Header = ({isMobile}: IPropsHeader) => {

    const navbarRef = useRef<any>(null);

    const toggleNavbar = (option: boolean): void => {
        if(option)
        {
            navbarRef.current.style.transform = 'translateX(0)'
        }else 
        {
            navbarRef.current.style.transform = 'translateX(100vw)'
        }
    }

    return(
        <header>
            <div className={styles.headerContainer}>
                <div className={styles.badgeContainer}>
                    <Link href={'/#inicio'}>
                        <img src={'/assets/icons/brand-icon-bw.png'} alt={'Mundo Risas'} className={styles.brandImage}/>
                    </Link>
                </div>
                {isMobile ? 
                <>
                    <img src='/assets/icons/menu-icon.png' alt='Abrir menú' onClick={(() => {toggleNavbar(true)})}/>
                    <div className={styles.sideNavContainer} ref={navbarRef}>
                        <img className={styles.navClose} alt='Cerrar' src='/assets/icons/close-icon.png' onClick={(() => {toggleNavbar(false)})}/>
                        <nav>
                            <ul className={styles.sections}>
                                <li onClick={(() => {toggleNavbar(false)})}><Link href={'/#inicio'}>Inicio</Link></li>
                                <li onClick={(() => {toggleNavbar(false)})}><Link href={'/#servicios'}>Servicios</Link></li>
                                <li onClick={(() => {toggleNavbar(false)})}><Link href={'/#galeria'}>Galería</Link></li>
                                <li onClick={(() => {toggleNavbar(false)})}><Link href={'/#reservas'}>Reservas</Link></li>
                                <li onClick={(() => {toggleNavbar(false)})}><Link href={'/#contacto'}>Contacto</Link></li>
                            </ul>
                        </nav>
                    </div>
                </>
                : 
                <nav>
                    <ul className={styles.sections}>
                        <li><Link href={'/#inicio'}>Inicio</Link></li>
                        <li><Link href={'/#servicios'}>Servicios</Link></li>
                        <li><Link href={'/#galeria'}>Galería</Link></li>
                        <li><Link href={'/#reservas'}>Reservas</Link></li>
                        <li><Link href={'/#contacto'}>Contacto</Link></li>
                    </ul>
                </nav>}
            </div>
        </header> 
    )
}

export default Header