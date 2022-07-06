import '../stylesheets/Testimonios.css';
import { HamburgerMenu, VelcampLogo } from '../components/Menues';
import Testimonio from './Testimonio';

const Testimonios = () => (
  <div>
    <VelcampLogo />
    <HamburgerMenu />
    <div className="Testimonios">
      <div className="contenedor-principal-testimonios">
        <h1>¿Querés saber qué dicen nuestros alumnos sobre VelBootcamp?</h1>
        <Testimonio
          nombre='Jane Doe'
          pais='Normandia'
          imagen='jane'
          imagenAlt='Jane'
          cargo='Desarrolladora Full-stack'
          empresa='Mercado Libre'
          testimonio='Ullam repudiandae facere. Necessitatibus voluptatem quod magnam officiis. Ut ea doloribus consequuntur veniam. Sed voluptate officia molestias. Voluptates facere iste vero qui.Quaerat incidunt quam vel sit eum eos enim. Aut non aut sint. Officiis assumenda impedit qui cupiditate ea placeat consequuntur.'
          />
        <Testimonio
          nombre='John Doe'
          pais='Inglaterra'
          imagen='john'
          imagenAlt='John'
          cargo='Desarrollador Back End'
          empresa='Java'
          testimonio='Blanditiis esse non eum praesentium nostrum et velit quae. Magni ipsa id eos minima laboriosam nulla. Reiciendis facere nesciunt ut et molestiae voluptates. At soluta ut eligendi necessitatibus ea. Quasi cum sunt unde modi expedita provident. Modi quam autem id natus dolorum fuga est temporibus. Facilis et non numquam quia. Praesentium alias est ut facilis hic harum nam aut accusantium.'
          />
        <Testimonio
          nombre='Jake Doe'
          pais='Escocia'
          imagen='jake'
          imagenAlt='Jake'
          cargo='Desarrollador Web'
          empresa='IBM'
          testimonio='Quia quos molestiae ipsa. Sunt error ut repudiandae id quod. Consequatur dolorem dolor odit enim aperiam. Eum nesciunt est aut reprehenderit quam voluptatibus minus facilis.Voluptate delectus in. Qui veritatis necessitatibus soluta voluptate adipisci eos aut. Vel vel at quis rerum laudantium soluta quia provident.'
          />
        </div>
    </div>
  </div>
  );

export default Testimonios;
