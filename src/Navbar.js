import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>K-Punk</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Novo Texto</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;



/* O estilo também pode ser inserido diretamente no elemento:
Exemplo:
<a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>News</a>
*/

//Perceba que os elementos css são escritos em camelCase e não com a barra, isso  porque estamos escrevendo em JS
