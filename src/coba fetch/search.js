import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useHistory, useLocation, useParams} from 'react-router-dom'
import {VideoComponent} from './VideoComponent'
import './home.css'


export const Search = () => {
  const [status ,statusUpdate] = useState(true)
  const [status2 ,statusUpdate2] = useState(false)

  const fetchurl = "https://api-tomcatsquad.herokuapp.com/api/v1/video/?title="
  let Search = useLocation()
  const SearchParams = new URLSearchParams(Search["search"]) 
  const id = SearchParams.get('title')
  const [hasil, sethasil] = useState([])
console.log(id)
console.log(Search["search"])
  useEffect( () => {
  axios.get(fetchurl + id)
  .then(res => {
    statusUpdate(false)
    sethasil(res.data.results)
  })
  },[])

useEffect(() => {
  if(status == false && hasil.length <= 0){
    statusUpdate2(true) 
  }else{
    statusUpdate2(false)
  }
},[status,hasil])

console.log(status)
console.log(status2)
  console.log(hasil.length)
  const history = useHistory()
  const tes = (url) => {
    history.push({ pathname: `/watch?id=${url}`} )
    window.location.reload()
  }


  return (
    <div>
      <div className={status ? "muncul" : "hilang"}>
        <p>loading</p>
      </div>
      <div className={status2 ? "muncul" : "hilang"}>
        <p>gk ada njir kagak ketemu coba cari yang lain </p>
      </div>
      <ol>
     {
      hasil.map((result) => {
        return <VideoComponent title={result.title} url={result.id} klik={tes} key={result.url} />
      })
     }
      </ol>
     
    </div>
  )
}
