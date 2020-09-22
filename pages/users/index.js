import Link from "next/link"
import Layout from "../../components/layout"
import Title from "../../components/title"

export default function Users ({ users }) {
    // CLIENT SIDE RENDERING
    // const [users, setUsers] = React.useState([])

    // React.useEffect(()=>{
    //     const fetchUsers = async () => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/users')
    //         const newUsers = await res.json()
    //         setUsers(newUsers)
    //     }
    //     fetchUsers()    
    // }, [])

    return (
        <Layout>
            <Title>Users Page</Title>
            <div className="grid">                
                {users.map( user => {
                    return (
                    <Link href={'/users/[id]'} as={`/users/${user.id}`} key={user.id}>
                    <a className="card">
                        <h3>Username: {user.username}</h3>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </a>
                    </Link>
                    )
                })}                
            </div>
            <style jsx>
                {`
                    .grid {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    max-width: 800px;
                    margin-top: 3rem;
                    }
                    .card {
                    margin: 1rem;
                    flex-basis: 45%;
                    padding: 1.5rem;
                    text-align: left;
                    color: inherit;
                    text-decoration: none;
                    border: 1px solid #eaeaea;
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


// export async function getServerSideProps(context) {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const users = await res.json()

//     return {
//         props: {
//             users
//         }
//     };
// }

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    
    return {
        props: {
            users
        }
    };
}