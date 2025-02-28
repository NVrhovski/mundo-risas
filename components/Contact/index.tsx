import { useForm } from 'react-hook-form';
import styles from './Contact.module.scss';
import moment from 'moment';
    
const Contact = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const handleFormSubmit = (data: any) => {
        let aux = data.date.split('-');
        data.date = `${aux[2]}/${aux[1]}/${aux[0]}`
        window.open(`https://api.whatsapp.com/send?phone=5491164338628&text=Hola!%20Quería%20averiguar%20para%20hacer%20un/una%20${data.eventType},%20con%20${data.participantsKids}%20niños%20y%20${data.participantsAdults}%20adultos,%20para%20el%20dia%20${data.date}%20`)
    }

    return(
        <div className={styles.mainContactContainer}>
            <div className={styles.contactAnchor} id='reservas'></div>
            <h2>COTIZA TU EVENTO</h2>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <span>TIPO DE FESTEJO</span>
                <select {...register('eventType', {required: true})} style={errors.eventType ? {borderColor: 'red'} : {}}>
                    <option value={''}>-- Elegí el tipo de festejo --</option>
                    <option value={'fiesta infantil'}>Fiesta Infantil</option>
                    <option value={'fiesta teen'}>Fiesta Teen</option>
                    <option value={'bautismo / comunión'}>Bautismo / Comunión</option>
                    <option value={'egresaditos'}>Egresaditos</option>
                    <option value={'aniversario'}>Aniversario</option>
                    <option value={'casamiento'}>Casamiento</option>
                    <option value={'otro'}>Otro</option>
                </select>
                <span>CANTIDAD DE INVITADOS</span>
                <div className={styles.participantsContainer}>
                    <input placeholder='Niños' type='number' {...register('participantsKids', {required: true})} style={errors.participantsKids ? {borderColor: 'red'} : {}}/>
                    <input placeholder='Adultos' type='number' {...register('participantsAdults', {required: true})} style={errors.participantsAdults ? {borderColor: 'red'} : {}}/>
                </div>
                <span>FECHA SOLICITADA</span>
                <input type='date' min={moment().format('YYYY-MM-DD')}{...register('date', {required: true})} style={errors.date ? {borderColor: 'red'} : {}}/>
                <button type='submit'>CONTACTAR</button>
            </form>
        </div>
    )
}

export default Contact