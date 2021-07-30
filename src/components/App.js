import Votes from "./Votes"
import Comments from "./Comments"
import video from "../data/video.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <Votes 
        upvotes={video.upvotes}
        downvotes={video.downvotes}
      />
      <Comments 
        comments={video.comments}
      />
    </div>
  );
}

export default App;
