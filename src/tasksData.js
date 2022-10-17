import { nanoid } from "nanoid";

export const tasks = [
  {
    id: nanoid(),
    title: "Application Setup",
    taskStatus: "done",
    contexts: [
      {
        id: nanoid(),
        title: "Title 1 New context",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        author: "Mary Smith",
        created_at: new Date(2022, 9, 17),
        context_status: "new",
      },
      {
        id: nanoid(),
        title: "Title 2 read context",
        content:
          "Hello! Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        author: "Kirsten Palmer",
        created_at: new Date(2022, 9, 12),
        context_status: "active",
      },
      {
        id: nanoid(),
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
    id: nanoid(),
    title: "Static Books List",
    taskStatus: "done",
    contexts: [
      {
        id: nanoid(),
        title: "Title 4 New context",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        author: "Mary Smith",
        created_at: new Date(2022, 9, 17),
        context_status: "new",
      },
      {
        id: nanoid(),
        title: "Title 5 read context",
        content:
          "Hello! Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        author: "Kirsten Palmer",
        created_at: new Date(2022, 9, 12),
        context_status: "active",
      },
      {
        id: nanoid(),
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
    id: nanoid(),
    title: "Administration Panel",
    taskStatus: "done",
    contexts: [
      {
        id: nanoid(),
        title: "Title 7 New context",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        author: "Mary Smith",
        created_at: new Date(2022, 9, 17),
        context_status: "new",
      },
      {
        id: nanoid(),
        title: "Title 8 read context",
        content:
          "Hello! Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        author: "Kirsten Palmer",
        created_at: new Date(2022, 9, 12),
        context_status: "active",
      },
      {
        id: nanoid(),
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
    id: nanoid(),
    title: "Connect Admin with Frontend",
    taskStatus: "active",
    contexts: [
      {
        id: nanoid(),
        title: "Title 10 New context",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        author: "Mary Smith",
        created_at: new Date(2022, 9, 17),
        context_status: "new",
      },
      {
        id: nanoid(),
        title: "Title 11 read context",
        content:
          "Hello! Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        author: "Kirsten Palmer",
        created_at: new Date(2022, 9, 12),
        context_status: "active",
      },
      {
        id: nanoid(),
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
    id: nanoid(),
    title: "Book Review Feature",
    taskStatus: "blocked",
    contexts: [
      {
        id: nanoid(),
        title: "Title 13 New context",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        author: "Mary Smith",
        created_at: new Date(2022, 9, 17),
        context_status: "new",
      },
      {
        id: nanoid(),
        title: "Title 14 read context",
        content:
          "Hello! Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
        author: "Kirsten Palmer",
        created_at: new Date(2022, 9, 12),
        context_status: "read",
      },
      {
        id: nanoid(),
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
