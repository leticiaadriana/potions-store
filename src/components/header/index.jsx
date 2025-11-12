import './style.css'

function Header (){
    return (
        <>
        <header className="Header">
            <nav>
                <a href="/">Página incial</a>
                <a href="/Buy">Comprar</a>
                <a href="/About">Sobre</a>
                <a href="/Contact">Contato</a>
            </nav>
        </header>
        </>
    );
}

export default Header