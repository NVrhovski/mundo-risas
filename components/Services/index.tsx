import ServicesCard from '../ServicesCard'
import styles from './Services.module.scss'

const Services = () => {
    return(
        <div className={styles.mainServicesContainer} id='servicios'>
            <h2>SERVICIOS</h2>
            <div className={styles.servicesGrid}>
                <ServicesCard image='assets/images/gallery-1.jpg' title='FIESTAS INFANTILES'/>
                <ServicesCard image='assets/images/gallery-1.jpg' title='FIESTAS TEEN’S'/>
                <ServicesCard image='assets/images/gallery-1.jpg' title='BAUTISMOS / COMUNIONES'/>
                <ServicesCard image='assets/images/gallery-1.jpg' title='EGRESADOS / EGRESADITOS'/>
            </div>
        </div>
    )
}

export default Services