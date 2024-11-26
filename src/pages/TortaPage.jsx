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
                    setTorta(data.data)


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
                        <div className="card p-3 m-3">
                            <h3 className='mb-3'>{torta.title}</h3>
                            <p>{torta.slug}</p>
                            <p>{torta.content}</p>
                            <img className="tortaImage" src={`http://localhost:3000/img/${torta.image}`} alt="" />
                            <p>{torta.tags}</p>

                        </div>

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