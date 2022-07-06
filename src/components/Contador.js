import '../stylesheets/Contador.css'

const Contador = ({ numClicks }) => (
      <div className='contador'>
        {numClicks}
      </div>
    );

export default Contador;