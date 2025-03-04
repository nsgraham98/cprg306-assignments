import { useState } from 'react';

export default function Toggle()
{
    const [show, setShow] = useState(false);

    return(
    <main>
        <button 
            className="bg-blue-800"
            onClick={() => setShow(!show)}
        >
            Click Me</button>
            {show && <p>Now you see me</p>}
    </main>)
}