import { useEffect, useState } from 'react'
import GetGif from '../helpers/GetGif'

export const usefetch = (categoris) => {
  const [state, setState] = useState({
    data:[],
    loading: true
  })
  

  
  useEffect(() => {
    GetGif(categoris)
      .then( (e) => {

          console.log(e);
          setState({
            data: e,
            loading: false
          })

      })
  
  }, [categoris])

  return state;
}
