import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1> Esto es lo que dicen nuestros alumnos:</h1>
     <Testimonio
     nombre = 'Santiago Rodriguez'
     pais='Mexico'
     imagen='santiago'
     cargo='Ingeniero de software'
     empresa='NoCountry'
     testimonio='Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. '/>

    <Testimonio
     nombre = 'Alfredo Rodriguez'
     pais='Mexico'
     imagen='alfredo'
     cargo='Guardia de seguridad'
     empresa='Tres Fronteras'
     testimonio='Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. '/>
     

     <Testimonio
     nombre = 'Lily Enith'
     pais='Mexico'
     imagen='lily'
     cargo='Lashista'
     empresa='Chic Beauty'
     testimonio='Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. '/>
     
     </div>
    </div>
  );
}

export default App;
