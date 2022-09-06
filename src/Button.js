import PropTypes from 'prop-types'
export function Button({text,name='user'}){
    console.log(text);
    /* if (!text) {
    console.log("El texto es requerido")
        
    } */
    return <button>
        {text} - {name} 
    </button>
}
Button.propTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: 'otra forma valor por defecto'
}