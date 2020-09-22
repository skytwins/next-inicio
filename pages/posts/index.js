import Link from "next/link"
import Layout from "../../components/layout"
import Title from "../../components/title"

export default function Posts ({ posts })  {

    // CLIENT SIDE RENDERING
    // const [posts, setPosts] = React.useState([])
    // React.useEffect(()=>{
    //     const fetchPosts = async () => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //         const newPosts = await res.json()
    //         setPosts(newPosts)
    //     }
    //     fetchPosts()    
    // }, [])

    return (
        <Layout>
            <Title>Posts Page</Title>
            <div className="grid">                
                {posts.map( post => {
                    return (
                    <Link href={'/posts/[id]'} as={`/posts/${post.id}`} key={post.id}>
                    <a className="card">
                        <h3>Post {post.id}</h3>
                        <p>Title: {post.title}</p>
                        <p>Mensaje: {post.body}</p>
                    </a>
                    </Link>
                    )
                })}                
            </div>
            <style jsx>
                {`
                .grid {
                    display: flex;
                    flex-wrap: wrap;
                    max-width: 700px;
                    margin-top: 2rem;
                }
                .card {
                    margin: 1rem;
                    flex-basis: 45%;
                    padding: 1.5rem;
                    color: black;
                    text-decoration: none;
                    border: 2px solid #eaeaea;
                    border-radius: 10px;
                    transition: color 0.15s ease, border-color 0.15s ease;
                }
                .card:hover,
                .card:focus,
                .card:active {
                    color: #0070f3;
                    border-color: #0070f3;
                }
                .card h3 {
                    margin: 0 0 1rem 0;
                    font-size: 1.5rem;
                }
                .card p {
                    margin: 0;
                    font-size: 1.25rem;
                    line-height: 1.5;
                }
                `}
            </style>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()

    return {
        props: {
            posts
        }
    };
}