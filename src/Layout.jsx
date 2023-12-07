import clsx from 'clsx'

import Footer from './components/organisms/footer'
import Header from './components/organisms/header'
import './index.css'

export default function Layout({ children }) {
    return (
        <>
            <Header className={clsx('nav', 'header')} />
            <main className='main'>{children}</main>
            <Footer className={clsx('nav', 'footer')} />
        </>
    )
}
