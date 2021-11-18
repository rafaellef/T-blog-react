const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Blog Test</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>News</a>
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
