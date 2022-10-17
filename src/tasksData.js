import { nanoid } from "nanoid";
import avatar1 from "./utils/avatar1.jpg";
import avatar2 from "./utils/avatar2.png";
import avatar3 from "./utils/avatar3.png";
import avatar4 from "./utils/avatar4.png";
import avatar5 from "./utils/avatar5.jpg";
import avatar6 from "./utils/avatar6.jpg";

export const tasks = [
  {
    id: nanoid(),
    title: "Application Setup",
    taskStatus: "done",
    contexts: [
      {
        id: nanoid(),
        title: "What is Lorem Ipsum?",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        author: "Mary Smith",
        created_at: new Date(2022, 9, 17),
        context_status: "new",
        avatar: avatar1,
      },
      {
        id: nanoid(),
        title: "Why do we use it?",
        content:
          "Hello! Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        author: "Kirsten Palmer",
        created_at: new Date(2022, 9, 12),
        context_status: "active",
        avatar: avatar2,
      },
      {
        id: nanoid(),
        title: "Where can I get some?",
        content:
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        author: "Jessica Bem",
        created_at: new Date(2022, 9, 10),
        context_status: "read",
        avatar: avatar3,
      },
      {
        id: nanoid(),
        title: "Where does it come from?",
        content:
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        author: "Jessica Bem",
        created_at: new Date(2022, 9, 10),
        context_status: "read",
        avatar: avatar4,
      },
    ],
  },
  {
    id: nanoid(),
    title: "Static Books List",
    taskStatus: "done",
    contexts: [
      {
        id: nanoid(),
        title: "Title of context",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        author: "Mary Smith",
        created_at: new Date(2022, 9, 17),
        context_status: "new",
        avatar: avatar4,
      },
      {
        id: nanoid(),
        title: "Another title of context",
        content:
          "Hello! Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        author: "Kirsten Palmer",
        created_at: new Date(2022, 9, 12),
        context_status: "read",
        avatar: avatar4,
      },
      {
        id: nanoid(),
        title: "Hello!",
        content:
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        author: "Jessica Bem",
        created_at: new Date(2022, 9, 10),
        context_status: "active",
        avatar: avatar6,
      },
      {
        id: nanoid(),
        title: "Great message.",
        content:
          "Hello! Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        author: "Kirsten Palmer",
        created_at: new Date(2022, 9, 12),
        context_status: "read",
        avatar: avatar1,
      },
    ],
  },
  {
    id: nanoid(),
    title: "Administration Panel",
    taskStatus: "done",
    contexts: [
      {
        id: nanoid(),
        title: "Title AAA New context",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        author: "Mary Smith",
        created_at: new Date(2022, 9, 17),
        context_status: "new",
        avatar: avatar5,
      },
      {
        id: nanoid(),
        title: "Title BBB",
        content:
          "Hello! Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        author: "Kirsten Palmer",
        created_at: new Date(2022, 9, 12),
        context_status: "active",
        avatar: avatar1,
      },
      {
        id: nanoid(),
        title: "Super title",
        content:
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        author: "Jessica Bem",
        created_at: new Date(2022, 9, 10),
        context_status: "read",
        avatar: avatar2,
      },
    ],
  },
  {
    id: nanoid(),
    title: "Connect Admin with Frontend",
    taskStatus: "active",
    contexts: [
      {
        id: nanoid(),
        title: "Title 10",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        author: "Mary Smith",
        created_at: new Date(2022, 9, 17),
        context_status: "new",
        avatar: avatar3,
      },
      {
        id: nanoid(),
        title: "Title 100",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        author: "Mary Smith",
        created_at: new Date(2022, 9, 17),
        context_status: "new",
        avatar: avatar4,
      },
      {
        id: nanoid(),
        title: "Title 11t",
        content:
          "Hello! Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        author: "Kirsten Palmer",
        created_at: new Date(2022, 9, 12),
        context_status: "active",
        avatar: avatar5,
      },
      {
        id: nanoid(),
        title: "Title 12",
        content:
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        author: "Jessica Bem",
        created_at: new Date(2022, 9, 10),
        context_status: "read",
        avatar: avatar6,
      },
    ],
  },
  {
    id: nanoid(),
    title: "Book Review Feature",
    taskStatus: "blocked",
    contexts: [
      {
        id: nanoid(),
        title: "Title Abcd",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        author: "Mary Smith",
        created_at: new Date(2022, 9, 17),
        context_status: "new",
        avatar: avatar1,
      },
      {
        id: nanoid(),
        title: "Title Efgh",
        content:
          "Hello! Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        author: "Kirsten Palmer",
        created_at: new Date(2022, 9, 12),
        context_status: "read",
        avatar: avatar2,
      },
      {
        id: nanoid(),
        title: "Title Ijkl",
        content:
          "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
        author: "Jessica Bem",
        created_at: new Date(2022, 9, 10),
        context_status: "active",
        avatar: avatar3,
      },
    ],
  },
];
