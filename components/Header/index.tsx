import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
    return(
        <header>
            <div className={styles.headerContainer}>
                <div className={styles.badgeContainer}>
                    <Link href={'#inicio'}>
                        <img src={'assets/icons/brand-icon-bw.png'} alt={'Mundo Risas'} className={styles.brandImage}/>
                    </Link>
                </div>
                <ul className={styles.sections}>
                    <li><Link href={'#inicio'}>INICIO</Link></li>
                    <li><Link href={''}>SERVICIOS</Link></li>
                    <li><Link href={''}>GALERÍA</Link></li>
                    <li><Link href={''}>PRECIOS</Link></li>
                    <li><Link href={''}>RESERVAS</Link></li>
                    <li><Link href={''}>TESTIMONIOS</Link></li>
                    <li><Link href={'#contacto'}>CONTACTO</Link></li>
                </ul>
            </div>
        </header> 
    )
}

export default Header