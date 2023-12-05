import { useNavigate } from 'react-router-dom'

import SearchField from '../../components/organisms/search-field'

export default function Home() {
    const navigate = useNavigate()

    const handleSubmit = (query) => navigate(query)

    return (
        <div className='content'>
            <SearchField onSubmit={handleSubmit} />
        </div>
    )
}
