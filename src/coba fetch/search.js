import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {VideoComponent} from './VideoComponent'
import './home.css'


export const Search = () => {
  const [status ,statusUpdate] = useState(false)
  const fetchurl = "https://api-tomcatsquad.herokuapp.com/api/v1/youtube/?title="
  const {id} = useParams()
  const [hasil, sethasil] = useState([])

  useEffect( () => {
  axios.get(fetchurl + id)
  .then(res => {
    sethasil(res.data.results)
  })
  },[])

  useEffect(() => {
    if(hasil.length <= 0){
      statusUpdate(true)
    }else{
      statusUpdate(false)
    }
  },[hasil])


console.log(status)
  console.log(hasil.length)
  const history = useHistory()
  const tes = (url) => {
    history.push({ pathname: `/watch?url=${url}`} )
  }


  return (
    <div>
      <div className={status ? "muncul" : "hilang"}>
        <p>gk ada gan</p>
      </div>
      <ol>
     {
      hasil.map((result) => {
        return <VideoComponent title={result.title} url={result.url} klik={tes} key={result.url} />
      })
     }
      </ol>
     
    </div>
  )
}
