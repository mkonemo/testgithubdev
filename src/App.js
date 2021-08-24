import "./styles.css";

export default function App() {
  let valid = false;
  const name = valid ? "Mko" : "max";
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
