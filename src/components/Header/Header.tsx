import './header.css'

type HeaderProps = {
    title: string
}

const Header =({title}: HeaderProps) => {
    return (
        < >
            <h1 className='header'>{ title}</h1>
        </>
    )
}

export default Header
