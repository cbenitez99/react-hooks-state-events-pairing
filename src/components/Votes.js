import React, { useState } from "react";

function Votes({ upvotes, downvotes }) {

    const [isUp, setUp] = useState(upvotes)
    const [isDown, setDown] = useState(downvotes)
    function handleUp() {
        setUp((upvotes) => upvotes + 1)
    }
    function handleDown() {
        setDown((downvotes) => downvotes + 1)
    }
    return (
        <div>
            <button onClick={handleUp}>{isUp} 👍</button>
            <button onClick={handleDown}>{isDown} 👎</button>
        </div>
    )
};

export default Votes;