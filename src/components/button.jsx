// function Button() {
//     const name = 'Inicio'
//     return (
//         <>
//             <button className="bg-primary rounded-md ">{name}</button>        
//         </>
//     )
// }
const Button = (props) => {
    const {name} = props
    return (
        <>
            <button className="mt-4 w-full bg-slate-600 text-white py-2 hover:bg-slate-700 transition-colors">{name}</button>        
        </>        
    )
}

export default Button;