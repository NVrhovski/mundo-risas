import Link from 'next/link';
import styles from './HelpBadge.module.scss';
import { useEffect, useRef } from 'react';
import { SetStateAction, Dispatch } from 'react';

interface IPropsHelpBadge
{
    setShowBadge: Dispatch<SetStateAction<boolean>>
}

const HelpBadge = ({setShowBadge}: IPropsHelpBadge) => {

    const badgeRef = useRef<any>(null);

    useEffect(() => {
        setTimeout(() => {
            badgeRef.current.style.opacity = '1'
        },0)
    },[])

    return(
        <div className={styles.helpBadgeContainer} ref={badgeRef}>
            <Link href={'https://api.whatsapp.com/send?phone=5491164338628'} target='_blank'>
                <p>¿Cómo puedo ayudarte?</p>
                <img className={styles.badgeIcon} src='assets/icons/brand-icon.png' alt='Mundo Risas'/>
            </Link>
            <img onClick={(() => {setShowBadge(false)})} className={styles.closeIcon} src='assets/icons/close-icon.png' alt='cerrar'/>
        </div>
    )
}

export default HelpBadge