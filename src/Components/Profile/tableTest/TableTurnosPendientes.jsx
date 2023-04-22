import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./tabletest.css";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import EditModalTurnoPendiente from "../Admin/AdminComponents/Modals/TurnosModals/EditModalTurnoPendiente";
import DeleteTurnos from "../Admin/AdminComponents/Modals/TurnosModals/DeleteTurnos";

function TableTurnosPendientes({
  data,
  columns,
  detail,
  title,
  token,
  estado,
}) {
  //filter
  const [filter, setFilter] = useState("");

  //ordenar por fecha
  const orderFecha = data.sort((a, b) => {
    let y = new Date(
      b.date.split("-")[2],
      b.date.split("-")[1],
      b.date.split("-")[0]
    );

    let x = new Date(
      a.date.split("-")[2],
      a.date.split("-")[1],
      a.date.split("-")[0]
    );

    if (x > y) return 1;
    if (y > x) return -1;

    return 0;
  });

  //cases from Redux (store)

  const columns1 = columns?.map((el) => {
    return el.text;
  });
  const columns2 = columns.map((el) => {
    if (el.dataField.includes(".")) {
      return el.dataField.split(".");
    }

    return el.dataField;
  });

  //Modal Form data
  const [turnoData, setTurnoData] = React.useState([]);

  //modal state
  const [showModalPendiente, setShowModalPendiente] = React.useState(false);
  const [showModalD, setShowModalD] = React.useState(false);

  //when Edit button is clicked
  function showModalEdit(id) {
    setTurnoData(orderFecha.length > 0 && orderFecha.filter((el) => el.id === id)); //son los peritos
    setShowModalPendiente(true);
  }
  function showModalDelete(id) {
    setTurnoData(orderFecha.length > 0 && orderFecha.filter((el) => el.id === id)); //son los peritos
    setShowModalD(true);
  }

  //Filter method
  let dataFiltered = [];

  if (!filter) {
    dataFiltered = orderFecha;
  } else {
    dataFiltered = orderFecha.filter(
      (dato) =>
        dato?.profesional?.fullName
          ?.toLowerCase()
          .includes(filter?.toLocaleLowerCase()) ||
        dato?.date?.toLowerCase().includes(filter?.toLocaleLowerCase()) ||
        dato?.usuarioEmail?.toLowerCase().includes(filter?.toLocaleLowerCase())
    );
  }
  //PAGINACION DE LA TABLA
  const [input, setInput] = useState(1);
  const [pagina, setPagina] = useState(1);
  function onClickPage(numero) {
    // if(e.target.value === "anterior"){
    //   let num = pagina -1
    //   setPagina()
    // }

    setPagina(numero);
    setInput(numero);
  }
  const filasPorPagina = 20;
  const totalPaginas = Math.ceil(dataFiltered.length / filasPorPagina);

  function crearArr(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
  }

  let numeros = crearArr(totalPaginas);

  function enter(e) {
    if (e.keyCode == 13) {
      setPagina(parseInt(e.target.value));
      if (
        parseInt(e.target.value < 1) ||
        parseInt(e.target.value) > Math.ceil(totalPaginas) ||
        isNaN(parseInt(e.target.value))
      ) {
        setPagina(1);
        setInput(1);
      }
    }
  }

  function onChange(e) {
    setInput(e.target.value);
  }

  //aca parte la tabla
  const indiceInicial = (pagina - 1) * filasPorPagina;
  const indiceFinal = indiceInicial + filasPorPagina;
  const datosAMostrar = dataFiltered.slice(indiceInicial, indiceFinal);

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
          <div
            style={{
              display: "flex",
              margin: "9px 0px",
              width: "230px",
              justifyContent: "space-evenly",
              fontWeight: "bold",
              alignItems: "center",
            }}
          >
          <label htmlFor="">Página:</label>
          {pagina === 1 ? null : (
            <a
              onClick={() => onClickPage(pagina - 1)}
              style={{ marginLeft: "7px" }}
            >
              <BsFillArrowLeftSquareFill />{" "}
            </a>
          )}
          <input
            style={{
              border: "1px solid black",
              width: "60px",
              padding: "5px ",
              height: "26px",
              textAlign: "center",
            }}
            onChange={(e) => onChange(e)}
            onKeyDown={(e) => enter(e)}
            name="pagina"
            autoComplete="off"
            value={input}
          />{" "}
          <span style={{ marginRight: "7px" }}> de {totalPaginas}</span>
          {pagina === totalPaginas ? null : (
            <a onClick={() => onClickPage(pagina + 1)}>
              <BsFillArrowRightSquareFill />{" "}
            </a>
          )}
          </div>
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
              {datosAMostrar?.map(
                (el) =>
                  el.id && (
                    <Tr>
                      {columns2.map((c) => {
                        let y;
                        Array.isArray(c) ? (y = el[c[0]][c[1]]) : (y = el[c]);

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
                      <Td className="tdEdit" key={el.id}>
                        <div
                          className="editBtn"
                          onClick={() => showModalDelete(el.id)}
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

      <EditModalTurnoPendiente
        show={showModalPendiente}
        close={() => setShowModalPendiente(false)}
        turnoData={turnoData}
        token={token}
        detail={detail}
      />

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
export default TableTurnosPendientes;
