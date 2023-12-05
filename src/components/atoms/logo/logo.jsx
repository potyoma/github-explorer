import s from './logo.module.css'
import logo from '../../../assets/images/logo.svg'

export default function Logo() {
    return <img className={s.logo} src={logo} alt='GitHub Explorer logo' />
}
