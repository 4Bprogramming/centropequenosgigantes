import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./tabletest.css";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditModalProfesional from "../Admin/AdminComponents/Modals/EditProfesional/EditModalProfesional";
import DeleteProfesional from "../Admin/AdminComponents/Modals/EditProfesional/DeleteProfesional";
import { getProfesionales } from "../../../Redux/Action/Actions";

function ProfesionalesTableResponsive({ data, columns, detail, title,token }) {


  let dispatch= useDispatch()
  useEffect(()=>{ 
    dispatch(getProfesionales(token))
    // dispatch(getTurnos())
  },[dispatch])

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
  // console.log("columns1", columns1);
  // console.log("columns2", columns2);

  //Modal Form data
  const [profesionalData, setProfesionalData] = React.useState([]);

  //modal state
  const [showModal, setShowModal] = React.useState(false);
  const [showModalD, setShowModalD] = React.useState(false);
  //when Edit button is clicked
  function showModalEdit(id) {
    setProfesionalData(data.length > 0 && data.filter((el) => el.idProfesional === id));//son los peritos
    setShowModal(true);
  }
  function showModalDelete(id) {
    console.log('id==>', id);
    setProfesionalData(data.length > 0 && data.filter((el) => el.idProfesional === id));//son los peritos
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
  // console.log('casesFiltered', casesFiltered)
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

                <Th className="thEdit">Editar</Th>
                <Th className="thEdit">Eliminar</Th>
              </Tr>
            </Thead>

            <Tbody>
              {dataFiltered.map(
                (el) =>
                  // Patente is a notnull field meaning that an empty register won't be allowed.

                  el.nombre&& (
                    <Tr>
                      {columns2.map((c) => {
                        let y = el[c];
                        return (
                          <Td className="tdEdit" key={el.idProfesional}>
                            {y ? y : "Sin Completar"}
                          </Td>
                        );
                      })}

                      <Td className="tdEdit" key={el.idProfesional}>
                        <div
                          className="editBtn"
                          onClick={() => showModalEdit(el.idProfesional)}
                        >
                          <TbEdit />
                        </div>
                      </Td>
                      <Td className="tdEdit" key={el.idProfesional}>
                        <div
                          className="editBtn"
                          onClick={() => showModalDelete(el.idProfesional)}
                        >
                          <RiDeleteBin6Line />
                        </div>
                      </Td>
                    </Tr>
                  )
              )}
            </Tbody>
          </Table>
        </>
      )}
      {/* Modal rendering */}
      <EditModalProfesional 
      show={showModal}
      close={() => setShowModal(false)}
      profesionalData={profesionalData}
      token={token}
      detail={detail}/>
      
      
      <DeleteProfesional 
      show={showModalD}
      close={() => setShowModalD(false)}
      profesionalData={profesionalData}
      token={token}
      detail={detail}
    
      />
    </>
  );
}
export default ProfesionalesTableResponsive;


