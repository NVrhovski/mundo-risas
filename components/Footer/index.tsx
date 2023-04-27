import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
    return(
        <footer>
            <div className={styles.footerContainer}>
                <p>Pueyrredón 2136, B1653 Villa Ballester, Provincia de Buenos Aires, Argentina</p>
                <div className={styles.mailContainer}>
                    <Link href={'mailto:info@mundorisas.com'}>
                        <p>info@mundorisas.com</p>
                    </Link>
                </div>
                <Link href={'tel:+541164338628'}>
                    <p className={styles.phone}>+54 11 6433-8628</p>
                </Link>
                <div className={styles.iconsContainer}>
                    <Link href={'https://www.instagram.com/salonmundorisas'}>
                        <div className={styles.icon}>
                            <img src='assets/icons/instagram-icon.png'/>
                        </div>
                    </Link>
                    <Link href={'https://www.facebook.com/mundo.risas.16'}>
                        <div className={styles.icon}>
                            <img src='assets/icons/facebook-icon.png'/>
                        </div>
                    </Link>
                    <Link href={'https://wa.me/1164338628'}>
                        <div className={styles.icon}>
                            <img src='assets/icons/whatsapp-icon.png'/>
                        </div>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer