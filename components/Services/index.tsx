import ServicesCard from '../ServicesCard'
import styles from './Services.module.scss'

const Services = () => {
    return(
        <div className={styles.mainServicesContainer}>
            <h2>Servicios</h2>
            <div className={styles.servicesGrid}>
                <ServicesCard image='assets/images/gallery-1.jpg' title='Egresaditos'/>
                <ServicesCard image='assets/images/gallery-1.jpg' title='Cumpleaños'/>
                <ServicesCard image='assets/images/gallery-1.jpg' title='Fiestas de 15'/>
                <ServicesCard image='assets/images/gallery-1.jpg' title='Otro'/>
            </div>
        </div>
    )
}

export default Services