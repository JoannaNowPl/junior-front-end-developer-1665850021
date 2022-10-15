export function TasksList() {
  const tasks = [
    {
      title: "Application Setup",
      taskStatus: "done",
      context: [],
    },
    {
      title: "Static Books List",
      taskStatus: "done",
      context: [],
    },
    {
      title: "Administration Panel",
      taskStatus: "done",
      context: [],
    },
    {
      title: "Connect Admin with Frontend",
      taskStatus: "active",
      context: [],
    },
    {
      title: "Book Review Feature",
      taskStatus: "blocked",
      context: [],
    },
  ];

  return (
    <div className="tasks-list">
      <header>
        <h2>YOUR TASKS</h2>
      </header>
      <nav>
        <ul>
          {tasks.map((el) => {
            if (el.taskStatus === "done") {
              return <li>
                {" "}
                <span>"green"</span> <h3>{el.title}</h3>
              </li>;
            } else if (el.taskStatus === "active") {
              return <li>
                <span>"blue"</span> <h3>{el.title}</h3>
              </li>;
            } else if (el.taskStatus === "blocked") {
              return <li>
                <span>"grey"</span> <h3>{el.title}</h3>
              </li>;
            } else
              return (
                <li>
                  <span></span> <h3>{el.title}</h3>
                </li>
              );
          })}
        </ul>
      </nav>
    </div>
  );
}
