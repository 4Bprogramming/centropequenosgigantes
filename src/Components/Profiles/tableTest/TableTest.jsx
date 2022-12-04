import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import TableTestModal from "../InputsSelects/EditCase/BySuperAdmin/TableTestModal";
import TableTestModalAdmin from "../InputsSelects/EditCase/ByAdmin/TableTestModalAdmin";
import TableTestModalPerito from "../InputsSelects/EditCase/ByPerito/TableTestModalPerito";
import { getCasesAction, getPeritos, peritosByName } from "../../Store/Actions";
import "./tabletest.css";
import DeleteCase from "../InputsSelects/EditCase/BySuperAdmin/DeleteCase";

function TableResponsive({ data, columns, detail, title, rol }) {

  let dispatch = useDispatch()

  //this function dispatches getPeritos(), getCases and PeritosByname
  function Actualizacion() {
    // console.log('entré en Actualizacion');
    dispatch(getPeritos())
    dispatch(getCasesAction())
    setTimeout(() => {
      dispatch(peritosByName())
    }, 2500)


  }

  //filter
  const [filter, setFilter] = React.useState("");

  //cases from Redux (store)
  // const cases = useSelector((state) => state.cases)
  const columns1 = columns.map((el) => {
    return el.text;
  });
  const columns2 = columns.map((el) => {
    return el.dataField;
  });


  //Modal Form data
  const [caseData, setCaseData] = React.useState([]);

  //modal state
  const [showModal, setShowModal] = React.useState(false);
  const [showModalDelete, setShowModalDelete] = React.useState(false);
  //when Edit button is clicked
  function showModalEdit(id) {
    setCaseData(cases.length > 0 && cases.filter((el) => el.id === id));
    setShowModal(true);
  }
  function showModalDelete1(id) {
    setCaseData(cases.length > 0 && cases.filter((el) => el.id === id));
    setShowModalDelete(true);
  }

  //Filter method
  let casesFiltered = [];
  if (!filter) {
    casesFiltered = cases;
  } else {
    casesFiltered = cases.filter(
      (dato) =>
        dato.Nombre.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        dato.Numero.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        dato.perito.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        dato.localidad.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        dato.Compañia.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        dato.Patente.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  }


  //logica de tabla segun venimiento
  let date = new Date();
  // console.log('date', date);
  let nowDay= date.getDate() 
  let nowMonth= date.getMonth() +1
  let nowYear= date.getFullYear()

  

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

      {casesFiltered?.length === 0 ? (
        <div className="noRegistersFound">No se encontraron registros...</div>
      ) : (
        <>
          {/* Tabler Title */}
          <h3 className="tableTitle">{title}</h3>

          {/* Table */}
          <div className="table-wrapper">

            <Table>
              <Thead>
                <Tr>
                  {columns1.map((e) => {
                    return <Th className="thEdit">{e}</Th>;
                  })}

                  <Th className="thEdit">Editar</Th>
                  { rol==='Administrador General'&&
                    <Th className="thEdit">Eliminar</Th>
                  }
                </Tr>
              </Thead>

              <Tbody>
                {casesFiltered.map(
                  (el) =>{
                    
                    let dayVto = el?.Vencimiento?.split("-")
                    let state1= ['Asignado', 'Próximo a visita', 'En proceso de cotización', 'En proceso de liquidación',"vacio"]
                    let state2="vacio"
                    el.estado.length >0 && (state2 = el.estado)
                    
                    // console.log('state2', state2)
                     let state=state1.some(e=>e===state2)
                    
                    return(
                    ((+dayVto[0] <= +nowDay && +dayVto[1] <= +nowMonth && +dayVto[2] === +nowYear && state )|| (+dayVto[0]> +nowDay && +dayVto[1] < +nowMonth && +dayVto[2]=== +nowYear && state)|| (+dayVto[2]< +nowYear && state))?
                      <Tr>

                        {columns2.map((c) => {
                          let y = el[c];
                          return (
                            <Td className="tdEditConditional" key={el.id}>
                              {y ? y : "Sin Completar"}
                            </Td>
                          );
                        })}
                        <Td className="tdEdit" key={el.id}>
                          <div
                            className="editBtn"
                            onClick={() => showModalEdit(el.id)}
                          >
                         <TbEdit />
                          </div>
                        </Td>
                         {
                          rol==='Administrador General'&&
                          <Td className="tdEdit" key={el.id}>
                          <div
                            className="editBtn"
                            onClick={() => showModalDelete1(el.id)}
                          >
                         <RiDeleteBin6Line />
                          </div>
                        </Td>

                         }
                      </Tr>

                    :

                <Tr>
                  {columns2.map((c) => {
                    let y = el[c];
                    return (
                      <Td className="tdEdit" key={el.id}>
                        {y ? y : "Sin Completar"}
                      </Td>
                    );
                  })}
                  <Td className="tdEdit" key={el.id}>
                    <div
                      className="editBtn"
                      onClick={() => showModalEdit(el.id)}
                    >
                      <TbEdit />
                    </div>
                  </Td>
                  {
                          rol==='Administrador General'&&
                          <Td className="tdEdit" key={el.id}>
                          <div
                            className="editBtn"
                            onClick={() => showModalDelete1(el.id)}
                          >
                         <RiDeleteBin6Line />
                          </div>
                        </Td>

                         }
                </Tr>

                    )
                    
                  }
                )}

              </Tbody>
            </Table>
          </div>
        </>
      )}
      {/* Modal rendering */}
      {
        rol === 'Administrador General' &&
        <TableTestModal
          show={showModal}
          close={() => setShowModal(false)}
          caseData={caseData}
          detail={detail}
          actualizar={Actualizacion}
        />
      }
      <DeleteCase
      show={showModalDelete}
      close={() => setShowModalDelete(false)}
      caseData={caseData}
      detail={detail}
      actualizar={Actualizacion}
      
      />
      {
        rol === 'Administrador junior' &&
        <TableTestModalAdmin
          show={showModal}
          close={() => setShowModal(false)}
          caseData={caseData}
          detail={detail}
          actualizar={Actualizacion}
        />
      }
      {
        rol === 'Tecnico' &&
        <TableTestModalPerito
          show={showModal}
          close={() => setShowModal(false)}
          caseData={caseData}
          detail={detail}
          actualizar={Actualizacion}
        />
      }
    </>
  );
}
export default TableResponsive;


