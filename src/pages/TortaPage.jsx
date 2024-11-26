import { useParams } from "react-router-dom"


export default function TortaPage() {
    const { slug } = useParams()
    const url = `http://localhost:3000/posts/${slug}`
    console.log(url);



    return (
        <h1>Pizza :slug {slug}</h1>
    )
}