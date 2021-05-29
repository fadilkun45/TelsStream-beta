import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useHistory, useLocation, useParams} from 'react-router-dom'
import {VideoComponent} from './VideoComponent'
import './home.css'


export const Search = () => {
  const [status ,statusUpdate] = useState(false)
  const fetchurl = "https://api-tomcatsquad.herokuapp.com/api/v1/youtube/?title="
  let Search = useLocation()
  const SearchParams = new URLSearchParams(Search["search"]) 
  const id = SearchParams.get('title')
  const [hasil, sethasil] = useState([])
console.log(id)
console.log(Search["search"])
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
    window.location.reload()
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
