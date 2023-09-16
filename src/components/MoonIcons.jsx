// se puede poner asi const MoonIcon = (props) poniendo en el fill fill={props.fill}
// o usamos desetructuracion del props
// podria mandar un monton de propiedades como width, onlick, className
// entonces se usa lo que se llama rest operator ...props y hace un iterable de las cosas que tiene
const MoonIcon = ({ fill = #fff, ...props}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
            <path
                // a esto se le llama spread opeartor (despliega todas las pripiedades aca)
                {...props}
                // eslint-disable-next-line react/prop-types
                fill={fill}
                fillRule="evenodd"
                d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
            />
        </svg>
    );
};

export default MoonIcon;