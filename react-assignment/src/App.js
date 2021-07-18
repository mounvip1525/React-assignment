import logo from "./logo.svg";
import "./App.css";
import Institutions from "./components/Institutions/Institutions";
import { Route, Switch } from "react-router-dom";
import Degree from "./components/Degree/Degree";
import ExamPatterns from "./components/ExamPatterns/ExamPatterns";
import QuestionPapers from "./components/QuestionPapers/QuestionPapers";
import Subjects from "./components/Subjects/Subjects";
import Users from "./components/Users/Users";
import Ranks from "./components/Ranks/Ranks";
import Create from "./components/Create/Create";
import Sports from "./components/Create/Sports";
import Media from "./components/Create/Media";
import Library from "./components/Create/Library";
import Forms from "./components/Create/Forms";
import Classes from "./components/Create/Classes";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Institutions} />
        <Route exact path="/institutions" component={Institutions} />
        <Route exact path="/degree" component={Degree} />
        <Route exact path="/exampatterns" component={ExamPatterns} />
        <Route exact path="/questionpapers" component={QuestionPapers} />
        <Route exact path="/subjects" component={Subjects} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/ranks" component={Ranks} />
        <Route path="/create" component={Create} />
        <Route exact path="/Sports" component={Sports} />
        <Route exact path="/Media" component={Media} />
        <Route exact path="/Library" component={Library} />
        <Route exact path="/Forms" component={Forms} />
        <Route to="/classes" component={Classes} />
        <Route component={Institutions} />
      </Switch>
    </div>
  );
}

export default App;
