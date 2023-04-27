import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
    return(
        <header>
            <div className={styles.headerContainer}>
                <Link href={'/'}>
                    <img src={'assets/icons/brand-icon-bw.png'} alt={'Mundo Risas'} className={styles.brandImage}/>
                </Link>
                <ul className={styles.sections}>
                    <li><Link href={'#eventos'}>EVENTOS</Link></li>
                    <li><Link href={'#catering'}>CATERING</Link></li>
                    <li><Link href={'#galeria'}>GALERÍA</Link></li>
                    <li><Link href={'#contacto'}>CONTACTO</Link></li>
                </ul>
            </div>
        </header> 
    )
}

export default Header