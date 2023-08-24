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
                <ServicesDropdown title='Fiestas infantiles' description='Celebrá el cumpleaños de tus hijos con nosotros. Ofrecemos una amplia variedad de opciones de entretenimiento, desde juegos animados hasta maquillaje y disfraces para los niños más pequeños. También contamos con actividades como escalar, bailar bajo una lluvia de burbujas y un espectacular show de Robot LED.'/>
                <ServicesDropdown title='Fiestas teen’s' description='Festejá un cumple inolvidable con tus amigos en un ambiente lleno de diversión, música, baile y una lluvia de burbujas, humo, luces y pulseras que brillan en la oscuridad. Además, contamos con un espectacular show de Robot LED que impresionará a todos tus invitados. Y para calmar la sed, disfrutá de nuestra barra de tragos con jugo y granadina.'/>
                <ServicesDropdown title='Bautismos / Comuniones' description='Celebrá este día tan importante de tu hijo o hija con nosotros en un ambiente tranquilo y acogedor. Ofrecemos opciones de catering y actividades para que puedan disfrutar de este momento especial con familiares y amigos.'/>
                <ServicesDropdown title='Egresados / Egresaditos' description='Conmemorá el fin de esta hermosa etapa en nuestro salón de eventos. Ofrecemos deliciosas opciones de catering, además de entretenimiento, como juegos para grandes y chicos, música, baile y entrega de diplomas para que puedas disfrutar de este momento especial con tu familia.'/>
            </div>
            :
            <div className={styles.servicesGrid}>
                <ServicesCard image='assets/images/gallery-1.jpg' title='Fiestas infantiles' description='Celebrá el cumpleaños de tus hijos con nosotros. Ofrecemos una amplia variedad de opciones de entretenimiento, desde juegos animados hasta maquillaje y disfraces para los niños más pequeños. También contamos con actividades como escalar, bailar bajo una lluvia de burbujas y un espectacular show de Robot LED.'/>
                <ServicesCard image='assets/images/gallery-1.jpg' title='Fiestas teen’s' description='Festejá un cumple inolvidable con tus amigos en un ambiente lleno de diversión, música, baile y una lluvia de burbujas, humo, luces y pulseras que brillan en la oscuridad. Además, contamos con un espectacular show de Robot LED que impresionará a todos tus invitados. Y para calmar la sed, disfrutá de nuestra barra de tragos con jugo y granadina.'/>
                <ServicesCard image='assets/images/gallery-1.jpg' title='Bautismos / Comuniones' description='Celebrá este día tan importante de tu hijo o hija con nosotros en un ambiente tranquilo y acogedor. Ofrecemos opciones de catering y actividades para que puedan disfrutar de este momento especial con familiares y amigos.'/>
                <ServicesCard image='assets/images/gallery-1.jpg' title='Egresados / Egresaditos' description='Conmemorá el fin de esta hermosa etapa en nuestro salón de eventos. Ofrecemos deliciosas opciones de catering, además de entretenimiento, como juegos para grandes y chicos, música, baile y entrega de diplomas para que puedas disfrutar de este momento especial con tu familia.'/>
            </div>}
        </div>
    )
}

export default Services