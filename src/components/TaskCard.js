import { Badge } from "react-bootstrap";

export default function TaskCard({
  id,
  title,
  category,
  priority,
  startTime,
  endTime,
  isCompleted,
}) {
  return (
    <div className="task-card">
      <div className="d-flex justify-content-between">
        <div className="d-flex gap-3 align-items-start">
          <button className="checkbox"></button>
          <div className="task-content">
            <h5>{title}</h5>
            <p>{category}</p>
            <div className="task-time">
              <p>
                <strong className="ms-1">{startTime}</strong>
                مساء
              </p>
              -
              <p>
                <strong className="ms-1">{endTime}</strong>
                مساء
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-end justify-content-between">
          <Badge className="task-badge" text="dark">
            ضروري
          </Badge>
          <div className="d-flex gap-3 task-mng">
            <button>
              <i className="fa-solid fa-trash"></i>
            </button>
            <button>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
