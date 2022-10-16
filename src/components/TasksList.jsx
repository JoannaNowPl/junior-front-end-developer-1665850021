import "./TasksList.css";
import arrowGreen from "../utils/Arrow-green.svg";
import arrowWhite from "../utils/Arrow-white.svg";
import lock from "../utils/lock.webp";
import { Link } from "react-router-dom";

export function TasksList(props) {
  return (
    <div className="tasks-list">
      <header className="tasks-list__header-box">
        <h2 className="tasks-list__header">YOUR TASKS</h2>
      </header>
      <nav className="tasks-list__list-box">
        <ul className="tasks-list__list">
          {props.tasks.map((el) => {
            if (el.taskStatus === "done") {
              return (
                <li className="tasks-list__task" key={el.id}>
                  <Link to={`/business-context/${el.id}`} className="tasks-list__link">
                    <div className="tasks-list__icon tasks-list__icon--done ">
                      <img src={arrowGreen} alt="done" />
                    </div>{" "}
                    <h3 className="tasks-list__task-title">{el.title}</h3>
                  </Link>
                </li>
              );
            } else if (el.taskStatus === "active") {
              return (
                <li className="tasks-list__task " key={el.id}>
                     <Link to={`/business-context/${el.id}`} className="tasks-list__link">
                  <div className="tasks-list__icon tasks-list__icon--active">
                    <img src={arrowWhite} alt="active" />
                  </div>{" "}
                  <h3 className="tasks-list__task-title tasks-list__task-title--active">
                    {el.title}
                  </h3>
                  </Link>
                </li>
              );
            } else if (el.taskStatus === "blocked") {
              return (
                <li className="tasks-list__task" key={el.id}>
                  <div className="tasks-list__icon tasks-list__icon--blocked">
                    <img src={lock} alt="blocked" width="80%" height="80%" />
                  </div>{" "}
                  <h3 className="tasks-list__task-title tasks-list__task-title--blocked">
                    {el.title}
                  </h3>
                </li>
              );
            } else
              return (
                <li className="tasks-list__task" key={el.id}>
                  <div className="tasks-list__icon"></div>{" "}
                  <h3 className="tasks-list__task-title">{el.title}</h3>
                </li>
              );
          })}
        </ul>
      </nav>
    </div>
  );
}
