export function BusinessContext() {
  const BusinessContexts = [
    {
      title: "Title 1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Mary Smith",
      created_at: new Date(2022, 10, 15),
      context_status: "new",
    },
    {
      title: "Title 2",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      author: "Robert Palmer",
      created_at: new Date(2022, 10, 12),
      context_status: "active",
    },
    {
      title: "Title 3",
      content:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      author: "Jessica Bem",
      created_at: new Date(2022, 10, 10),
      context_status: "read",
    },
  ];
  return (
    <div className="business-context">
      <header>
        <div>icon</div>
        <h3>BUSINESS CONTEXT</h3>
      </header>
      <nav>
        <ul>
          {BusinessContexts.map((el) => {
            if (el.context_status === "new")
              return (
                <li>
                  <div>New</div>
                  <div>{`${el.author} . ${el.created_at}`}</div>
                  <h3>{el.title}</h3>
                  <p>{`${el.content.substring(0, 100)}...`}</p>
                </li>
              )
              else if (el.context_status === "active")
              return (
                <li>
                  <div>{`${el.author} . ${el.created_at}`}</div>
                  <h3>{el.title}</h3>
                  <p>{`${el.content.substring(0, 100)}...`}</p>
                </li>
              )
              else if (el.context_status === "read")
              return (
                <li>
                  <div>{`${el.author} . ${el.created_at}`}</div>
                  <h3>{el.title}</h3>
                  <p>{`${el.content.substring(0, 100)}...`}</p>
                </li>
              )
              else return <></>
          })}
        </ul>
      </nav>
      {BusinessContexts.map(el => {
        if (el.context_status === "active")
      return (<article>
        <header>
          <h2>{el.title}</h2>
        </header>
        <section>
          <header>
            <h3>{el.author}</h3>
            <div>{`${el.created_at}`}</div>
          </header>
          <p>{el.content}</p>
        </section>
      </article>)
      else return (<article></article>)})}
    </div>
  );
}
