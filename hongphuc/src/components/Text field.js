import { useState } from "react";

export default function MyInput() {
    const [text,setText] = useState('zeeeee');

    function handleChange(e) {
        setText(e.target.value);
    }
    return(
        <>
        <input value={text} onChange={handleChange} />
        <p>You typed: {text}</p>
        <button onClick={() =>setText('zeeeee')}>
            Reset
        </button>
        </>
    );
}