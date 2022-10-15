import "./TasksList.css";
import arrowGreen from "../utils/Arrow-green.svg";
import arrowWhite from "../utils/Arrow-white.svg";
import lock from "../utils/lock.webp";


export function TasksList() {
  const tasks = [
    {
      title: "Application Setup",
      taskStatus: "done",
      contexts: [],
    },
    {
      title: "Static Books List",
      taskStatus: "done",
      contexts: [],
    },
    {
      title: "Administration Panel",
      taskStatus: "done",
      contexts: [],
    },
    {
      title: "Connect Admin with Frontend",
      taskStatus: "active",
      contexts: [],
    },
    {
      title: "Book Review Feature",
      taskStatus: "blocked",
      contexts: [],
    },
  ];

  return (
    <div className="tasks-list">
      <header className="tasks-list__header-box">
        <h2 className="tasks-list__header">YOUR TASKS</h2>
      </header>
      <nav className="tasks-list__list-box">
        <ul className="tasks-list__list">
          {tasks.map((el) => {
            if (el.taskStatus === "done") {
              return <li className="tasks-list__task">
                <div className="tasks-list__icon tasks-list__icon--done "><img src={arrowGreen} alt="done"/></div> <h3 className="tasks-list__task-title">{el.title}</h3>
              </li>;
            } else if (el.taskStatus === "active") {
              return <li className="tasks-list__task ">
                <div  className="tasks-list__icon tasks-list__icon--active"><img src={arrowWhite} alt="active"/></div> <h3 className="tasks-list__task-title tasks-list__task-title--active">{el.title}</h3>
              </li>;
            } else if (el.taskStatus === "blocked") {
              return <li className="tasks-list__task">
                <div  className="tasks-list__icon tasks-list__icon--blocked"><img src={lock} alt="blocked" width="80%" height="80%"/></div>  <h3 className="tasks-list__task-title tasks-list__task-title--blocked">{el.title}</h3>
              </li>;
            } else
              return (
                <li className="tasks-list__task">
                  <div  className="tasks-list__icon"></div> <h3 className="tasks-list__task-title">{el.title}</h3>
                </li>
              );
          })}
        </ul>
      </nav>
    </div>
  );
}
