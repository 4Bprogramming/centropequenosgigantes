import React from "react";
// import EditModal from "../../Modals/EditModal";
// import './Paginas.css'
export const defaultSorted = [{
    dataField: 'fullName',
    order: 'desc',
   
  }];
export const columns=[
    {
        dataField: 'fullName',// es el identificador de la columna, asi que cada atributo debe coincidir con el dataField
        text:'Nombre y Apellido',
        // sortable:true, //permite que se ordene por este elemento
        // grow:1.5
          
        sort:true,
    },
    {
        dataField:'idProfesional',
        text:'D.N.I',
        sortable:'false',
        // grow:1.5
    },
    {
        dataField:'Email',
        text:'email',
        sort:true,
       
    },
    {
        dataField:'celular',
        text:'N° de contacto',
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
  


