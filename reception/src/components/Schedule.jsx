import { Link } from "react-router-dom";

export default function Schedule() {
  return (
    <>
      <h2>Reception</h2>
      <h3>Schedule</h3>

      <strong>Now! </strong>
      <Link to="/sessions/123">Session 123</Link>
    </>
  );
}
