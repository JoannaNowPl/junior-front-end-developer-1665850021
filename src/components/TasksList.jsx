import "./TasksList.css";
import arrowGreen from "../utils/Arrow-green.svg";
import arrowWhite from "../utils/Arrow-white.svg";
import lock from "../utils/lock.webp";
import {nanoid} from "nanoid";


export function TasksList() {
  const tasks = [
    {
      id: nanoid(),
      title: "Application Setup",
      taskStatus: "done",
      contexts: [
        {
          title: "Title 1 New context",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          author: "Mary Smith",
          created_at: new Date(2022, 9, 17),
          context_status: "new",
        },
        {
          title: "Title 2 Active context",
          content:
            "Hello! Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
          author: "Kirsten Palmer",
          created_at: new Date(2022, 9, 12),
          context_status: "active",
        },
        {
          title: "Title 3 Read context",
          content:
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
          author: "Jessica Bem",
          created_at: new Date(2022, 9, 10),
          context_status: "read",
        },
      ],
    },
    {
      title: "Static Books List",
      taskStatus: "done",
      contexts: [
        {
          title: "Title 4 New context",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          author: "Mary Smith",
          created_at: new Date(2022, 9, 17),
          context_status: "new",
        },
        {
          title: "Title 5 Active context",
          content:
            "Hello! Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
          author: "Kirsten Palmer",
          created_at: new Date(2022, 9, 12),
          context_status: "active",
        },
        {
          title: "Title 6 Read context",
          content:
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
          author: "Jessica Bem",
          created_at: new Date(2022, 9, 10),
          context_status: "read",
        },
      ],
    },
    {
      title: "Administration Panel",
      taskStatus: "done",
      contexts: [
        {
          title: "Title 7 New context",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          author: "Mary Smith",
          created_at: new Date(2022, 9, 17),
          context_status: "new",
        },
        {
          title: "Title 8 Active context",
          content:
            "Hello! Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
          author: "Kirsten Palmer",
          created_at: new Date(2022, 9, 12),
          context_status: "active",
        },
        {
          title: "Title 9 Read context",
          content:
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
          author: "Jessica Bem",
          created_at: new Date(2022, 9, 10),
          context_status: "read",
        },
      ],
    },
    {
      title: "Connect Admin with Frontend",
      taskStatus: "active",
      contexts: [
        {
          title: "Title 10 New context",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          author: "Mary Smith",
          created_at: new Date(2022, 9, 17),
          context_status: "new",
        },
        {
          title: "Title 11 Active context",
          content:
            "Hello! Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
          author: "Kirsten Palmer",
          created_at: new Date(2022, 9, 12),
          context_status: "active",
        },
        {
          title: "Title 12 Read context",
          content:
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
          author: "Jessica Bem",
          created_at: new Date(2022, 9, 10),
          context_status: "read",
        },
      ],
    },
    {
      title: "Book Review Feature",
      taskStatus: "blocked",
      contexts: [
        {
          title: "Title 13 New context",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          author: "Mary Smith",
          created_at: new Date(2022, 9, 17),
          context_status: "new",
        },
        {
          title: "Title 14 Active context",
          content:
            "Hello! Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
          author: "Kirsten Palmer",
          created_at: new Date(2022, 9, 12),
          context_status: "active",
        },
        {
          title: "Title 15 Read context",
          content:
            "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
          author: "Jessica Bem",
          created_at: new Date(2022, 9, 10),
          context_status: "read",
        },
      ],
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
