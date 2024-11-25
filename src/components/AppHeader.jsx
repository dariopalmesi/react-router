import logo from '/images/logo_torte.webp'
import MainMenu from './MainMenu'

export default function AppHeader() {
    return (
        <header className="text-center  bg-success p-4">
            <img src={logo} className='logo' alt="" /><h1 className='text-white'>React Blog Form</h1>
            <MainMenu />
        </header>
    )
}