import { useEffect, useState } from 'react'

import Form from '../../atoms/form'
import Input from '../../molecules/input'
import Button from '../../atoms/button'

import s from './search-field.module.css'

export default function SearchField({ onSubmit }) {
    const [query, setQuery] = useState('')
    const [error, setError] = useState()

    const handleChange = ({ target: { value } }) => setQuery(value)

    const handleSubmit = () => {
        if (query) return onSubmit?.(query)

        setError('Provide username for search!')
    }

    useEffect(() => {
        error && setTimeout(() => setError(''), 4000)
    }, [error])

    return (
        <>
            <Form className={s.form} onSubmit={handleSubmit}>
                <Input
                    placeholder='Type username...'
                    value={query}
                    onChange={handleChange}>
                    Let&apos;s find someone
                </Input>
                <Button type='submit'>Find!</Button>
            </Form>
            {error && <span>{error}</span>}
        </>
    )
}
