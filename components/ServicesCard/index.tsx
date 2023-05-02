import { useRef, useState } from 'react'
import styles from './ServicesCard.module.scss'

interface IPropsServicesCard {
    image: string,
    title: string,
    description: string
}

const ServicesCard = ({image, title, description}: IPropsServicesCard) => {

    const shadowRef = useRef<any>(null);
    const modalRef = useRef<any>(null);
    const [showModal, setShowModal] = useState(false);

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

    const toggleModal = (option: boolean): void => {
        if(option)
        {
            setShowModal(true);
            setTimeout(() => {
                modalRef.current.style.transform = 'scale(1.1)'
            },0)
        }else 
        {
            setShowModal(false);
        }
    }

    return(
        <>
            <div className={styles.serviceItem} onMouseOver={(() => {toggleDescription(true)})} onMouseLeave={(() => {toggleDescription(false)})}>
                <img src={image} alt='Salón Mundo Risas'/>
                <div className={styles.itemFooter}>
                    <span>{title}</span>
                </div> 
                <div className={styles.serviceDescriptionContainer} ref={shadowRef}>
                    <p>{description}</p>
                    <button onClick={(() => {toggleModal(true)})}>SABER MÁS</button>
                </div>
            </div>
            {showModal ? 
            <div className={styles.modalContainer}>
                <div className={styles.modalBody} ref={modalRef}>
                    <img onClick={(() => {toggleModal(false)})} src='assets/icons/close-icon.png' alt='cerrar'/>
                    <span>{title}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sapiente commodi eaque animi est dolorem accusamus reiciendis deserunt maiores consequuntur veritatis accusantium aspernatur libero natus tempore atque, enim laboriosam sint! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quisquam ullam perspiciatis placeat velit, nobis amet. Suscipit nisi eius labore aspernatur, dolores sint et veniam omnis culpa magni soluta fugiat?</p>
                </div>
            </div>
            :''}
        </>
    )
}

export default ServicesCard