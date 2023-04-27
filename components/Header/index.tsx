import styles from './Header.module.scss';
import Image from 'next/image';
import BrandImage from '../../public/assets/icons/brand-icon.png';
import Link from 'next/link';

const Header = () => {
    return(
        <header>
            <div className={styles.headerContainer}>
                <Link href={'/'}>
                    <Image src={BrandImage} alt={'Mundo Risas'} className={styles.brandImage}/>
                </Link>
                <ul className={styles.sections}>
                    <li><Link href={'#eventos'}>Eventos</Link></li>
                    <li><Link href={'#catering'}>Catering</Link></li>
                    <li><Link href={'#galeria'}>Galeria</Link></li>
                    <li><Link href={'#contacto'}>Contacto</Link></li>
                </ul>
            </div>
        </header> 
    )
}

export default Header