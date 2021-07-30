import React, { useState } from "react";

function Comments({comments}) {

    const [isShown, setIsShown] = useState(true)
    const [showHide, setShowHide] = useState(true)
    function handleComments(){
        setIsShown((isShown)=>!isShown)
        setShowHide((showHide)=>!showHide)
    } 

    const showComment = showHide ? "Hide Comments" : "Show Comments"
    const commentArray = comments.map((comment) => (
        <div key={comment.id}>
            <h3>{comment.user}</h3>
            <p>{comment.comment}
            {/* <button>👍</button> */}
            {/* <button>👎</button> */}
            </p>
        </div>  
    ));
    const showOrNo = isShown ? commentArray : null
   
    return (
        <div>
            <br/>
            <button onClick={handleComments} >{showComment}</button>
            <hr/>
            {/* <label htmlFor="search">Search comment by username</label> */}
            {/* <input type="text" value={comments}></input> */}
            {showOrNo}
        </div>
    )
};

export default Comments;