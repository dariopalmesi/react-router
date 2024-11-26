import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";


export default function TortaPage() {

    const [torta, setTorta] = useState(null)
    const { slug } = useParams()
    const url = `http://localhost:3000/posts/${slug}`
    console.log(url);
    useEffect(
        () => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data);


                })
                .catch(err => {
                    console.log(err);

                })
        }, [])


    return (
        <>
            <h1>Torta :slug {slug}</h1>
            {
                torta ? (
                    <div>
                        I not found
                    </div>
                ) : (
                    <div>
                        loading...
                    </div>
                )
            }

        </>


    )
}