import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
    return(
        <footer id='contacto'>
            <div className={styles.footerContainer}>
                <Link href={'https://goo.gl/maps/D6aHSTpbmvZhw6UX6'} target='_blank'>
                    <p>Pueyrredón 2136, B1653 Villa Ballester, Provincia de Buenos Aires, Argentina</p>
                </Link>
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
                            <img src='assets/icons/instagram-icon.png' alt='Instagram'/>
                        </div>
                    </Link>
                    <Link href={'https://www.facebook.com/mundo.risas.16'}>
                        <div className={styles.icon}>
                            <img src='assets/icons/facebook-icon.png' alt='Facebook'/>
                        </div>
                    </Link>
                    <Link href={'https://wa.me/1164338628'}>
                        <div className={styles.icon}>
                            <img src='assets/icons/whatsapp-icon.png' alt='Whatsapp'/>
                        </div>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer