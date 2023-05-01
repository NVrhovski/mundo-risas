import ServicesCard from '../ServicesCard'
import styles from './Services.module.scss'

const Services = () => {
    return(
        <div className={styles.mainServicesContainer} id='servicios'>
            <h2>SERVICIOS</h2>
            <div className={styles.servicesGrid}>
                <ServicesCard image='assets/images/gallery-1.jpg' title='EGRESADITOS'/>
                <ServicesCard image='assets/images/gallery-1.jpg' title='CUMPLEAÑOS'/>
                <ServicesCard image='assets/images/gallery-1.jpg' title='FIESTAS DE 15'/>
                <ServicesCard image='assets/images/gallery-1.jpg' title='OTRO'/>
            </div>
        </div>
    )
}

export default Services