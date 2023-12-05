import { DetailedHTMLProps, FormEvent, FormHTMLAttributes } from 'react'

export default function Form({ children, onSubmit, ...props }) {
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit?.(event)
    }

    return (
        <form {...props} onSubmit={handleSubmit}>
            {children}
        </form>
    )
}
