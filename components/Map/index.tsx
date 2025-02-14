import styles from './Map.module.scss'

const Map = () => {
    
    return(
        <div className={styles.mapContainer}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.266733745535!2d-58.55070534574004!3d-34.54680130082275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb75342d9ad87%3A0x971a75711cf357d6!2sMundo%20Risas!5e0!3m2!1ses-419!2ses!4v1682632152679!5m2!1ses-419!2ses" width="800" height="600" style={{border: 0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Map