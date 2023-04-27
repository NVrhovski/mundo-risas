import styles from './Footer.module.scss';
import Image from 'next/image';
import BrandImage from '../../public/assets/icons/brand-icon.png';
import WhatsappIcon from '../../public/assets/icons/whatsapp-icon.png';
import InstagramIcon from '../../public/assets/icons/instagram-icon.png';
import FacebookIcon from '../../public/assets/icons/facebook-icon.png';
import EmailIcon from '../../public/assets/icons/email-icon.png';
import PhoneIcon from '../../public/assets/icons/phone-icon.png';
import Link from 'next/link';

const Footer = () => {
    return(
        <footer>
            <div className={styles.footerContainer}>
                <div className={styles.footerInfo}>
                    <div className={styles.socialContainer}>
                        <Link href={'https://wa.me/1164338628'} target={'_blank'}>
                            <Image src={WhatsappIcon} alt={'Link al Whatsapp'}/>
                        </Link>
                        <Link href={'https://www.instagram.com/salonmundorisas'} target={'_blank'}>
                            <Image src={InstagramIcon} alt={'Link al Instagram'}/>
                        </Link>
                        <Link href={'https://www.facebook.com/mundo.risas.16'} target={'_blank'}>
                            <Image src={FacebookIcon} alt={'Link al Facebook'}/>
                        </Link>
                        <Link href={'mailto:info@mundorisas.com'} target={'_blank'}>
                            <Image src={EmailIcon} alt={'Link al Email'}/>
                        </Link>
                        <Link href={'tel:47671915'} target={'_blank'}>
                            <Image src={PhoneIcon} alt={'Llamanos'}/>
                        </Link>
                    </div>
                </div>
                <Image src={BrandImage} alt={'Mundo Risas'} className={styles.brandImage}/>
            </div>
        </footer>
    )
}

export default Footer