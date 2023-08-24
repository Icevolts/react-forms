import React from "react";

function Box({id, handleRemove, width = 5, height = 5, backgroundColor = 'purple'}) {
    const remove = () => handleRemove(id);
    return(
        <div>
            <div
            style={{
                width: `${width}em`,
                height: `${height}em`,
                backgroundColor
            }}
            />
            <button onClick={remove}>Delete the box</button>
        </div>
    );
}

export default Box;