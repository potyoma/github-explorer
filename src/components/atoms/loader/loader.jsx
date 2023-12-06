import 'ldrs/quantum'

export default function Loader({ children, loading }) {
    return loading ? (
        <l-quantum size='45' speed='1.75' color='#e5e6e6'></l-quantum>
    ) : (
        children
    )
}
