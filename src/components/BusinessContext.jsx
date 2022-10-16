import "./BusinessContext.css";
import circleIcon from "../utils/Circle.svg";

export function BusinessContext() {
  const BusinessContexts = [
    {
      title: "Title 1",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      author: "Mary Smith",
      created_at: new Date(2022, 9, 17),
      context_status: "new",
    },
    {
      title: "Title 2",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
      author: "Robert Palmer",
      created_at: new Date(2022, 9, 12),
      context_status: "active",
    },
    {
      title: "Title 3",
      content:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      author: "Jessica Bem",
      created_at: new Date(2022, 9, 10),
      context_status: "read",
    },
  ];

  let currentDate = new Date();

  const calculateDays = (newDate, oldDate) => {
    let difference = newDate.getTime() - oldDate.getTime();
    let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return totalDays;
  };

  const renderDaysSpan = (totalDays) => {
    if (totalDays > 1) return <span>days ago,</span>;
    else if (totalDays === 1) return <span>day ago,</span>;
    else return <span>Today,</span>;
  };

  const renderDayOfMonth = (date) => {
    return date.toLocaleString("en-us", { day: "numeric" });
  };

  const renderMonth = (date) => {
    return date.toLocaleString("en-us", { month: "short" });
  };

  const renderTime = (date) => {
    return date.toLocaleString("en-us", {
      hour: "numeric",
      minutes: "numeric",
    });
  };

  const renderDayEndText = (day) => {
    if (day === "1" || day === "21" || day === "31") return <span>st</span>;
    else if (day === "2" || day === "22") return <span>nd</span>;
    else if (day === "3" || day === "23") return <span>rd</span>;
    else return <span>th</span>;
  };
  return (
    <div className="business-context">
      <header className="business-context__header">
        <div className="business-context__header-box">
          <div className="business-context__header-icon">
            <img src={circleIcon} alt="Business context icon" />
          </div>
          <h3 className="business-context__header-name">BUSINESS CONTEXT</h3>
        </div>
      </header>
      <main>
        <nav>
          <ul className="business-context__list">
            {BusinessContexts.map((el) => {
              if (el.context_status === "new")
                return (
                  <li className="business-context__list-item  business-context__list-item--new">
                    <div className="business-context__list-item-info-box">
                      <div className="business-context__list-item-new">NEW</div>
                      <ul className="business-context__list-item-info">
                        <li className="business-context__list-item-author">{el.author}</li>
                        <li className="business-context__list-item-date">{`${renderMonth(el.created_at)} ${renderDayOfMonth(
                          el.created_at
                        )}`}</li>
                      </ul>
                    </div>

                    <h3 className="business-context__list-item-title business-context__list-item-title--new">{el.title}</h3>
                    <p className="business-context__list-item-abstract">{`${el.content.substring(0, 95)}...`}</p>
                  </li>
                );
              else if (el.context_status === "active")
                return (
                  <li className="business-context__list-item business-context__list-item--active">
                    <div className="business-context__list-item-info-box">
                    <ul className="business-context__list-item-info">
                        <li className="business-context__list-item-author">{el.author}</li>
                        <li className="business-context__list-item-date">{`${renderMonth(el.created_at)} ${renderDayOfMonth(
                          el.created_at
                        )}`}</li>
                      </ul>
                    </div>

                    <h3 className="business-context__list-item-title">{el.title}</h3>
                    <p className="business-context__list-item-abstract">{`${el.content.substring(0, 100)}...`}</p>
                  </li>
                );
              else if (el.context_status === "read")
                return (
                  <li className="business-context__list-item">
                   <div className="business-context__list-item-info-box">
                   <ul className="business-context__list-item-info">
                        <li className="business-context__list-item-author">{el.author}</li>
                        <li className="business-context__list-item-date">{`${renderMonth(el.created_at)} ${renderDayOfMonth(
                          el.created_at
                        )}`}</li>
                      </ul>
                    </div>
                    <h3 className="business-context__list-item-title">{el.title}</h3>
                    <p className="business-context__list-item-abstract">{`${el.content.substring(0, 100)}...`}</p>
                  </li>
                );
              else return <></>;
            })}
          </ul>
        </nav>
        {BusinessContexts.map((el) => {
          let totalDays = calculateDays(currentDate, el.created_at);
          if (el.context_status === "active")
            return (
              <article>
                <header>
                  <h2>{el.title}</h2>
                </header>
                <section>
                  <header>
                    <h3>{el.author}</h3>
                    {totalDays > 0 ? <p>{totalDays}</p> : <p></p>}
                    {renderDaysSpan(totalDays)}
                    <div>
                      <span>
                        {renderDayOfMonth(el.created_at)}
                        {renderDayEndText(renderDayOfMonth(el.created_at))}
                        {` ${renderMonth(el.created_at)} `}
                      </span>
                      <span>.</span>
                      <span>{renderTime(el.created_at)}</span>
                    </div>
                  </header>
                  <p>{el.content}</p>
                </section>
              </article>
            );
          else return <article></article>;
        })}
      </main>
    </div>
  );
}
