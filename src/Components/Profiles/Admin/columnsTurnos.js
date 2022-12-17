import React from "react";
// import EditModal from "../../Modals/EditModal";
// import './Paginas.css'
export const defaultSorted = [{
    dataField: 'fullName',
    order: 'desc',
   
  }];
export const columns=[
    {
        dataField: 'date',// es el identificador de la columna, asi que cada atributo debe coincidir con el dataField
        text:'Fecha',
        // sortable:true, //permite que se ordene por este elemento
        // grow:1.5
          
        sort:true,
    },
    {
        dataField:'startTime',
        text:'Hora Inicio',
        sortable:'false',
        // grow:1.5
    },
    {
        dataField:'endTime',
        text:'Hora Finalización',
        sortable:'false',
        // grow:1.5
    },
    {
        dataField:'estado',
        text:'Estado',
        sort:true,
       
    },
    {
        dataField:'profesional.fullName',
        text:'Profesional',
        // sortable:true,
        // grow:'2',
        highlightOnHover:true
    },
    {
        dataField:'usuarioEmail',
        text:'Email Paciente',
        // sortable:true,
        // grow:'2',
        highlightOnHover:true
    },
  ]
 
  export  const sizePerPageRenderer = ({
    options,
    currSizePerPage,
    onSizePerPageChange
  }) => (
    <div className="btn-group" role="group">
      {
        options.map((option) => {
          const isSelect = currSizePerPage === `${option.page}`;
          return (
            <button
              key={ option.text }
              type="button"
              onClick={ () => onSizePerPageChange(option.page) }
              className={ `btn ${isSelect ? 'btn-secondary' : 'btn-warning'}` }
            >
              { option.text }
            </button>
          );
        })
      }
    </div>
  );
  
 export  const options = {
    sizePerPageRenderer
  };
  


