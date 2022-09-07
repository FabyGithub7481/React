import "./task.css";

export function TaskCard({ ready }) {
  //con archivo css
  return (
    <div className="card">
      <h1 className="title">Mi primer Tarea</h1>
      <span className={ready ? 'bg-green' : 'bg-red'}>
        {ready ? "Tarea realizada" : "Tarea no realizada"}
      </span>
    </div>
  );
}
