import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2 style={{fontSize: "30px"}}>{ blog.title }</h2>
                    <p>Escrito por {blog.author}</p>
                    <div style={{
                        fontSize: "20px",
                        letterSpacing: "2px",
                        justifyContent: "space-between"
                    }}>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;