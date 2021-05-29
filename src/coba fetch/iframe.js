import React from 'react'
import { useLocation, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'
import moment from 'moment'

export const Iframe = () => {
    let title= 'p'
    let Search = useLocation()
    // const SearchParams = new URLSearchParams(Search["search"]) 
    const id = Search["search"]
    // const  id = useParams()
    const fetchurl = "https://api-tomcatsquad.herokuapp.com/api/v1/youtube/?url="
    const [hasil, sethasil] = useState([])
    console.log(id)
    useEffect( () => {
    axios.get(fetchurl + id)
    .then(res => {
        sethasil(res.data.results)
    })
    },[])

    return (
              <div>
                <iframe width="853" height="480" src={'https://www.youtube.com/embed/' + id }   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                <p>{id}</p>
                {
                hasil.map(results => {
                    return <div>
                        <h1>{results.title}</h1>
                        <h2>{moment(results.publish).format('ll')}</h2>
                        <p>{results.description}</p>
                    </div>
                })
                }
            </div>
            
    )
}
