import { Link } from 'react-router-dom';

function Menu() {
    return (
        <aside className='menu'>
            <ul className='menu-list'>
                <li className='ml-2'><Link to='/'>Home</Link></li>
                <li className='ml-2'><Link to='/boxes'>Boxes</Link></li>
            </ul>
        </aside>
    );
}

export default Menu;