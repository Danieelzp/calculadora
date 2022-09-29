import '../hojas-de-estilo/Pantalla.css'

const Pantalla = ({ input }) => (
    <div className='input'>
        <div className="overflow-clip">
            {input}
        </div>
    </div>
);

export default Pantalla;