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