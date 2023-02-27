import { useEffect, useState } from 'react'
import GetGif from '../helpers/GetGif'

export const usefetch = (categoris) => {
  const [imagenes,setImagenes] = useState([])
  const [state, setState] = useState({
    data:[],
    loading: true
  })
  

  
  useEffect(() => {
    GetGif(categoris)
      .then( (e) => {
        setTimeout( () => {

          console.log(e);
          setState({
            data: e,
            loading: false
          })

        },3000)
      })
  
  }, [categoris])

  return state;
}