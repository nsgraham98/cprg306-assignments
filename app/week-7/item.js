export default function Item(props) 
{
    const {name, quantity, category} = props;

    return(
        <ul className="p-2 m-4 bg-slate-900 max-w-sm">
            <li className="text-xl font-bold">{name}</li>
            <li className="text-sm">Buy {quantity} in {category}</li>
        </ul>
    );
}