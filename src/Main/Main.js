import React, {useState, useEffect} from 'react'
import "./Main.css"


export function Main() {

    const [data, setData] =useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(resp => resp.json())
            .then(json => setData(json))
            .catch(error=> console.error('ошибка',error))
    }, [])

    return (
        <div className='Main'>
            {
                data.map(t => {
                    return (
                        <section key={t.id}>
                            <h2>{t.title}</h2>
                            <p>{t.body}</p>
                        </section>
                    )
                })
            }
        </div>
    )
}