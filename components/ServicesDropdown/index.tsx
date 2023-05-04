import styles from './ServicesDropdown.module.scss';
import { useRef, useState } from 'react';

const ServicesDropdown = () => {

    const dropdownRef = useRef<any>(null);
    const arrowRef = useRef<any>(null);
    const [dropdownState, setDropdownState] = useState(false);

    const toggleDropdown = (): void => {
        if(dropdownState)
        {
            arrowRef.current.style.transform = 'rotate(90deg)'
            dropdownRef.current.style.height = '60px'
            setDropdownState(false);
        }else
        {
            arrowRef.current.style.transform = 'rotate(0deg)'
            dropdownRef.current.style.height = '300px'
            setDropdownState(true);
        }
    }

    return(
        <div className={styles.dropdownMainContainer} ref={dropdownRef}>
            <div className={styles.header} onClick={toggleDropdown}>
                <span>FIESTAS INFANTILES</span>
                <img src='assets/icons/arrow-icon.png' alt='abrir/cerrar' ref={arrowRef}/>
            </div>
            <div className={styles.body}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde temporibus repellat iusto quod, accusamus, expedita commodi eaque eius in labore dolorem quas reiciendis quaerat fugiat. Id cupiditate dolores laudantium aperiam.</p>
                <button>SABER MÁS</button>
            </div>
        </div>
    )
}

export default ServicesDropdown