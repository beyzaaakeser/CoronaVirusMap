import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetails } from '../../redux/actions/actions'

const Detail = () => {
  const {code} = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDetails(code))
  }, [])
  
  return (
    <div>Detail</div>
  )
}

export default Detail