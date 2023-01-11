import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./tabletest.css";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
// import EditModalProfesional from "../Admin/AdminComponents/Modals/EditProfesional/EditModalProfesional";
import EditModalTurnoPendiente from "../Admin/AdminComponents/Modals/TurnosModals/EditModalTurnoPendiente";
import DeleteTurnos from "../Admin/AdminComponents/Modals/TurnosModals/DeleteTurnos";
// import { getProfesionales } from "../../../Redux/Action/Actions";

function TableTurnos({ data, columns, detail, title,token, estado }) {

  let dispatch= useDispatch()
  useEffect(()=>{
    // dispatch(getProfesionales(token))
    // dispatch(getTurnos())
  },[dispatch])

  //filter
  const [filter, setFilter] = React.useState("");

  //cases from Redux (store)
  // const cases = useSelector((state) => state.cases)
  const columns1 = columns?.map((el) => {
    return el.text;
  });
  const columns2 = columns.map((el) => {
    if(el.dataField.includes('.')){

      return el.dataField.split('.')
    }
    // console.log('incluye punto?', el.dataField.includes('.'));
    return el.dataField;
  });
  // console.log("columns1", columns1);
  // console.log("columns2", columns2);

  //Modal Form data
  const [turnoData, setTurnoData] = React.useState([]);

  //modal state
  const [showModal, setShowModal] = React.useState(false);
  const [showModalPendiente, setShowModalPendiente] = React.useState(false);
  const [showModalDisponible, setShowModalDisponible] = React.useState(false);
  const [showModalD, setShowModalD] = React.useState(false);
  //when Edit button is clicked
  function showModalEdit(id) {
      setTurnoData(data.length > 0 && data.filter((el) => el.id === id));//son los peritos
      setShowModalPendiente(true);
  }
  function showModalDelete(id) {
    // console.log('id==>', id);
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
        dato.fullName.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        dato.email.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        dato.celular.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        dato.especialidad.toLowerCase().includes(filter.toLocaleLowerCase())         
    );
  }
  // console.log('dataFiltered', dataFiltered)
  // console.log('DATAAAA===>', data)
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

      {dataFiltered?.length === 0 ? (
        <div className="noRegistersFound">No se encontraron registros...</div>
      ) : (
        <>
        {/* Tabler Title */}
          <h3 className="tableTitle">{title}</h3>

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
              {dataFiltered?.map(
                (el) =>
                  // Patente is a notnull field meaning that an empty register won't be allowed.

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


