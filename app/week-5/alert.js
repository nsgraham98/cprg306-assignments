export default function Alert({type})
{
    return(
     <div className={type==="success" ? "bg-green-800" : "bg-red-800"}>
            {type === "success" ? "Success" : "Error"}
        </div>
    );
}