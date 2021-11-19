import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('rafael');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("blog adicionado");
            setIsPending(false);
            history.push('/')
        })

        
    }

    return ( 
        <div className="create">
            <h2>Adicionar novo Artigo</h2>
            <form onSubmit={handleSubmit}>
                <label>Título:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Texto:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Autor:</label>
                <select 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value="rafael">Rafael</option>
                </select>
                { !isPending && <button>Adicionar Texto</button> }
                { isPending && <button disabled>Adicionando...</button> }
            </form>
        </div>
     );
}
 
export default Create;