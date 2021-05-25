import { Link, Switch, Route } from "react-router-dom";

export default function Schedule() {
  return (
    <Switch>
      <Route path="/reception">
        <h2>Reception</h2>
        <h3>Schedule</h3>

        <strong>Now! </strong>
        <Link to="/sessions/123">Session 123</Link>
        <hr />
        <Link to="/">Go home</Link>
      </Route>
    </Switch>
  );
}