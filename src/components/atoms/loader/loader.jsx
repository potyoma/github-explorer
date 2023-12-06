import { DotLoader } from 'react-spinners'

export default function Loader({ children, loading }) {
    return loading ? <DotLoader color='#e5e6e6' /> : children
}
