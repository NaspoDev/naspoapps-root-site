import ProjectsList from "./components/projects-list/ProjectsList";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <div className="heading-area">
        <h1 className="title is-2">My Side Projects</h1>
        <h2 className="subtitle is-3">A full list of all my side projects.</h2>
        <a
          className="naspodev-link is-size-5"
          href="https://naspo.dev"
          target="_blank"
        >
          naspo.dev
        </a>
      </div>
      <ProjectsList />
    </div>
  );
}

export default App;
