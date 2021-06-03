import React from 'react'
import { useLocation, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios'
import moment from 'moment'
import './iframe.css'

export const Iframe = () => {
    let title= 'p'
    let Search = useLocation()
    const SearchParams = new URLSearchParams(Search["search"])
    const tes = SearchParams.get('id')
    const  id = useParams() 
    // const id = Search["search"]
    const fetchurl = "https://api-tomcatsquad.herokuapp.com/api/v1/video/?id="
    const [hasil, sethasil] = useState([])
    console.log(id)
    useEffect(() => {
    axios.get(fetchurl + tes)
    .then(res => {
        sethasil(res.data.results)
    })
    },[])
    console.log(tes)
    console.log(hasil[0])
    return (
              <div>
                {/* <iframe width="853" height="480" src={'https://www.youtube.com/embed/' + id }   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe> */}
               
                {/* <p>{id}</p> */}
                {
                hasil.map(results => {
                    return <div>
                        <video  controls autoPlay >
                    <source src={hasil[0]["link"]} type="video/mp4"/>
                    </video>
                        <h1>{results.title}</h1>
                        <h2>{moment(results.publish).format('ll')}</h2>
                        <p>{results.description}</p>
                    </div>
                })
                }
            </div>
            
    )
}
