import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getProfesionaPorId } from '../../../../Redux/Action/Actions'


function TurnosDelProfesional(props) {

  const dispatch = useDispatch()
  console.log(props.token)
  useEffect(() => {
    dispatch(getProfesionaPorId(props.idProfesional,props.token))
    
  }, [])
  


  return (
    <div>TurnosDelProfesional</div>
  )
}

export default TurnosDelProfesional