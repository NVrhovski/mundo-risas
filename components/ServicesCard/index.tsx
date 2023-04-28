import { useRef } from 'react'
import styles from './ServicesCard.module.scss'

interface IPropsServicesCard {
    image: string,
    title: string
}

const ServicesCard = ({image, title}: IPropsServicesCard) => {

    const shadowRef = useRef<any>(null);

    const toggleDescription = (option: boolean): void => {
        if(option)
        {
            shadowRef.current.style.transform = 'translateY(0)';
        }
        else
        {
            shadowRef.current.style.transform = 'translateY(100%)';
        }
    }

    return(
        <div className={styles.serviceItem} onMouseOver={(() => {toggleDescription(true)})} onMouseLeave={(() => {toggleDescription(false)})}>
            <img src={image}/>
            <div className={styles.itemFooter}>
                <span>{title}</span>
            </div> 
            <div className={styles.serviceDescriptionContainer} ref={shadowRef}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur eligendi corrupti explicabo nemo quod. Debitis sit eius atque id nulla. Sequi quidem eos obcaecati rem enim quibusdam labore vitae nisi?</p>
            </div>
        </div>
    )
}

export default ServicesCard