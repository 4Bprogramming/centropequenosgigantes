import React, { useState} from "react";
import { useDispatch} from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./tabletest.css";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import EditModalTurnoPendiente from "../Admin/AdminComponents/Modals/TurnosModals/EditModalTurnoPendiente";
import DeleteTurnos from "../Admin/AdminComponents/Modals/TurnosModals/DeleteTurnos";


function TableTurnos({ data, columns, detail, title,token, estado }) {
 console.log('todos los turnos paginacion', data);
 
  //filter
  const [filter, setFilter] = useState("");

  //cases from Redux (store)
 
  const columns1 = columns?.map((el) => {
    
    return el.text;
  });
  const columns2 = columns.map((el) => {
    if(el.dataField.includes('.')){

      return el.dataField.split('.')
    }
    //console.log('incluye punto?', el.dataField.includes('.'));
    return el.dataField;
  });
  // console.log("columns1", columns1);
  // console.log("columns2", columns2);

  //Modal Form data
  const [turnoData, setTurnoData] = React.useState([]);

  //modal state
  const [showModalPendiente, setShowModalPendiente] = React.useState(false);
  const [showModalD, setShowModalD] = React.useState(false);

  //when Edit button is clicked
  function showModalEdit(id) {
      setTurnoData(data.length > 0 && data.filter((el) => el.id === id));//son los peritos
      setShowModalPendiente(true);
  }
  function showModalDelete(id) {
   
    setTurnoData(data.length > 0 && data.filter((el) => el.id === id));//son los peritos
    setShowModalD(true);
  }

  //Filter method
  let dataFiltered = [];

  if (!filter) {
    dataFiltered = data;
  } else {
    
    dataFiltered = data.filter(
      (dato) =>
        dato?.profesional?.fullName?.toLowerCase().includes(filter?.toLocaleLowerCase()) ||
        dato?.date?.toLowerCase().includes(filter?.toLocaleLowerCase()) ||
        dato?.usuarioEmail?.toLowerCase().includes(filter?.toLocaleLowerCase()) 
             
    );
  }
  //PAGINACION DE LA TABLA
  const [pagina, setPagina]=useState(1)
  function onClickPage(e){
    console.log('paginaElegida=>', e.target.value);
    setPagina(e.target.value)
  }
  const filasPorPagina=20
 const totalPaginas=Math.ceil(dataFiltered.length/filasPorPagina)
 
 function crearArr(n){
  let arr=[]
for(let i=1;i<=n;i++){
  arr.push(i)
}
return arr
 }
 
 let numeros=crearArr(totalPaginas)

   //aca parte la tabla
   const indiceInicial= (pagina-1)*filasPorPagina
   const indiceFinal=indiceInicial + filasPorPagina
   const datosAMostrar= dataFiltered.slice(indiceInicial,indiceFinal)
console.log('indiceInicial=>', indiceInicial);
console.log('indiceFinal=>', indiceFinal);

   console.log('datos a mostrar',datosAMostrar);
 console.log('dataFiltered=>', dataFiltered)
//  console.log('numeros=>', numeros);
//  console.log('total paginas=>', totalPaginas);
//  console.log('setea pagina=>', pagina);

  return (
    <>
      <input
        id="filter"
        className="filterInput"
        name="filter"
        type="text"
        placeholder="Filtra tu búsqueda..."
        value={filter} //--> binding input with state.
        onChange={(e) => setFilter(e.target.value)}
      />

      {datosAMostrar?.length === 0 ? (
        <div className="noRegistersFound">No se encontraron registros...</div>
      ) : (
        <>
        {/* Tabler Title */}
          <h3 className="tableTitle">{title}</h3>
        {/* PAGINADO*/}
          <label htmlFor="">Página:</label>
          <BsFillArrowLeftSquareFill/>
          <select name='select-paginacion' id="select-paginacion" onClick={onClickPage}>
            {
             numeros.map(pag=>{
              return <option value={pag}>{pag}</option>
             }) 
            }
          </select>
          <BsFillArrowRightSquareFill/>
          {/* Table */}
          <Table>
            <Thead>
              <Tr>
                {columns1.map((e) => {
                  return <Th className="thEdit">{e}</Th>;
                })} 
                  {
                    estado==='pendiente' &&
                    <>
                <Th className="thEdit">Editar</Th>
                <Th className="thEdit">Eliminar</Th>
                    </>
                  }
              </Tr>
            </Thead>

            <Tbody>
              {datosAMostrar?.map(
                (el) =>
                  el.id && (  
                    <Tr>
                      {columns2.map((c) => {
                        let y
                       Array.isArray(c)?
                          y = el[c[0]][c[1]]:
                          y = el[c]
 
                        return (
                          <Td className="tdEdit" key={el.id}>
                            {y ? y : "Sin Completar"}
                          </Td>
                        );
                      })}

                      { 
                      estado==='pendiente' && <>
                       <Td className="tdEdit" key={el.id}>
                        <div
                          className="editBtn"
                          onClick={() => showModalEdit(el.id)}
                          >
                          <TbEdit />
                        </div>
                      </Td>
                      <Td className="tdEdit" key={el.id}>
                        <div
                          className="editBtn"
                          onClick={() => showModalDelete(el.id)}
                          >
                          <RiDeleteBin6Line />
                        </div>
                      </Td> 
                          </>
                      }
                    </Tr>
                  )
              )}
            </Tbody>
          </Table>
        </>
      )}
      {/* Modal rendering */}
  
     <EditModalTurnoPendiente
      show={showModalPendiente}
      close={() => setShowModalPendiente(false)}
      turnoData={turnoData}
      token={token}
      detail={detail}/>
      
      
      <DeleteTurnos
      show={showModalD}
      close={() => setShowModalD(false)}
      turnoData={turnoData}
      token={token}
      detail={detail}
    
      />
    </>
  );
}
export default TableTurnos;


