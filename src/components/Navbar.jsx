import reactLogo from "../assets/react.svg";

export default function MainContent() {
  return (
    <nav>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h3 className="nav-logo-text">ReactFacts</h3>
      <h4 className="nav-title">React First Project</h4>
    </nav>
  );
}
