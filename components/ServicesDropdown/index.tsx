import styles from './ServicesDropdown.module.scss';
import { useRef, useState } from 'react';

interface IPropsServicesDropdown {
    title: string,
    description: string
}

const ServicesDropdown = ({title, description}: IPropsServicesDropdown) => {

    const dropdownRef = useRef<any>(null);
    const arrowRef = useRef<any>(null);
    const modalRef = useRef<any>(null);
    const [dropdownState, setDropdownState] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggleDropdown = (): void => {
        if(dropdownState)
        {
            arrowRef.current.style.transform = 'rotate(90deg)'
            dropdownRef.current.style.height = '0'
            setDropdownState(false);
        }else
        {
            arrowRef.current.style.transform = 'rotate(0deg)'
            dropdownRef.current.style.height = '340px'
            setDropdownState(true);
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
        <div className={styles.dropdownMainContainer}>
            <div className={styles.header} onClick={toggleDropdown}>
                <span>{title}</span>
                <img src='assets/icons/arrow-icon.png' alt='abrir/cerrar' ref={arrowRef}/>
            </div>
            <div className={styles.body} ref={dropdownRef}>
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

export default ServicesDropdown