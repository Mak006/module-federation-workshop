import { Link } from "react-router-dom";

export default function Session() {
  return (
    <>
      <h1>Session 123</h1>
      <p>
        <Link to="/">Session list</Link> / Session 123
      </p>
      <video
        loop
        controls
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}