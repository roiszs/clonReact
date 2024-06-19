import React from 'react';

function Testimonio() {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={require('../imagenes/foto.jpeg')}
      alt='Foto de Santiago'/>
      <div className='contenedor-texto-testimonio'>
     <p className='nombre-testimonio'>Santiago Rodriguez en México</p>
     <p className='cargo-testimonio'>Ingeniero en Software en No Country</p>
     <p className='texto-testimonio'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.</p>
    
      </div>
    </div>
  );
}

export default Testimonio;