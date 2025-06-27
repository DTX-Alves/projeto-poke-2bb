const Menu = () => {

    return (
        <div className="Menu">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">Item do Menu</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/home">Home</a>
                </li>
                 <li className="nav-item">
                    <a className="nav-link" href="/pokeflex">Pokeflex</a>
                </li>
                 <li className="nav-item">
                    <a className="nav-link" href="/pokegrid">Pokegrid</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu;