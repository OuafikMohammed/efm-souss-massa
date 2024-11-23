import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav>
            <ul className="flex space-x-4">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/affiche">Affiche</Link></li>
                <li><Link to="/recherche">Recherche</Link></li>
            </ul>
        </nav>
    );
}
export default Menu