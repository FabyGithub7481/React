import "./task.css";

export function TaskCard({ ready }) {
  //con archivo css
  return (
    <div className="card">
      <h1 className="title">Mi primer Tarea</h1>
      <span style={ready ? { background: "green" } : { background: "red" }}>
        {ready ? "Tarea realizada" : "Tarea no realizada"}
      </span>
    </div>
  );
}
