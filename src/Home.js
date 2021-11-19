import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
           {isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} />}
        </div>
     );
}
 
export default Home;


//Props é uma maneira de passar dados de um componente pai para um filho


/*Para adicionar eventos nos elementos nós podemos atribuir variáveis com funções de evento. Um detalhe importante é que não se pode invocar funções dentro do elemento, ou senão ele será invocado sem ser chamado; o único meio de fazer isso é usando uma função anônima, assim: 
 const handleClickAgain = (name) => {
        console.log('hello ' + name);
    }
    ...
    <button onClick={() => handleClickAgain('mario')}>Click again</button> 
*/

//Você tem a sua disposição o objeto evento sempre que quiser, para usá-lo passe como argumento a letra (e)