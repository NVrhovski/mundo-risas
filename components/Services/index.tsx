import { useEffect } from 'react'
import ServicesCard from '../ServicesCard'
import ServicesDropdown from '../ServicesDropdown'
import styles from './Services.module.scss'

interface IPropsServices
{
    isMobile: boolean
}

const Services = ({isMobile}: IPropsServices) => {

    return(
        <div className={styles.mainServicesContainer}>
            <div className={styles.servicesAnchor} id='servicios'></div>
            <h2>ENCONTRA TU EVENTO</h2>
            {isMobile ? 
            <div className={styles.servicesGrid}>
                <ServicesDropdown id={1} title='Fiestas infantiles' description='Celebrá el cumpleaños de tus hijos con nosotros. Ofrecemos una amplia variedad de opciones de entretenimiento, desde juegos animados hasta maquillaje y disfraces para los niños más pequeños. También contamos con actividades como escalar, bailar bajo una lluvia de burbujas y un espectacular show de Robot LED.'/>
                <ServicesDropdown id={2} title="Fiestas teen's" description='Festejá un cumple inolvidable con tus amigos en un ambiente lleno de diversión, música, baile y una lluvia de burbujas, humo, luces y pulseras que brillan en la oscuridad. Además, contamos con un espectacular show de Robot LED que impresionará a todos tus invitados. Y para calmar la sed, disfrutá de nuestra barra de tragos con jugo y granadina.'/>
                <ServicesDropdown id={3} title='Bautismos / Comuniones' description='Celebrá este día tan importante de tu hijo o hija con nosotros en un ambiente tranquilo y acogedor. Ofrecemos opciones de catering y actividades para que puedan disfrutar de este momento especial con familiares y amigos.'/>
                <ServicesDropdown id={4} title='Egresados / Egresaditos' description='Conmemorá el fin de esta hermosa etapa en nuestro salón de eventos. Ofrecemos deliciosas opciones de catering, además de entretenimiento, como juegos para grandes y chicos, música, baile y entrega de diplomas para que puedas disfrutar de este momento especial con tu familia.'/>
            </div>
            :
            <div className={styles.servicesGrid}>
                <ServicesCard id={1} image='/assets/images/infantiles-background.jpg' title='Fiestas infantiles' description='Celebrá el cumpleaños de tus hijos con nosotros. Ofrecemos una amplia variedad de opciones de entretenimiento, desde juegos animados hasta maquillaje y disfraces para los niños más pequeños. También contamos con actividades como escalar, bailar bajo una lluvia de burbujas y un espectacular show de Robot LED.'/>
                <ServicesCard id={2} image='/assets/images/gallery-2.jpg' title="Fiestas teen's" description='Festejá un cumple inolvidable con tus amigos en un ambiente lleno de diversión, música, baile y una lluvia de burbujas, humo, luces y pulseras que brillan en la oscuridad. Además, contamos con un espectacular show de Robot LED que impresionará a todos tus invitados. Y para calmar la sed, disfrutá de nuestra barra de tragos con jugo y granadina.'/>
                <ServicesCard id={3} image='/assets/images/bautismos-background.jpg' title='Bautismos / Comuniones' description='Celebrá este día tan importante de tu hijo o hija con nosotros en un ambiente tranquilo y acogedor. Ofrecemos opciones de catering y actividades para que puedan disfrutar de este momento especial con familiares y amigos.'/>
                <ServicesCard id={4} image='/assets/images/gallery-4.jpg' title='Egresados / Egresaditos' description='Conmemorá el fin de esta hermosa etapa en nuestro salón de eventos. Ofrecemos deliciosas opciones de catering, además de entretenimiento, como juegos para grandes y chicos, música, baile y entrega de diplomas para que puedas disfrutar de este momento especial con tu familia.'/>
            </div>}
            <img src='/assets/icons/brush-icon.png' className={`${styles.animatedIcon} ${styles.brush}`} style={{top: '160px', left: '5%'}}/>
            <img src='/assets/icons/star-icon.png' className={`${styles.animatedIcon} ${styles.star}`} style={{bottom: '40px', right: '3%'}}/>
        </div>
    )
}

export default Services