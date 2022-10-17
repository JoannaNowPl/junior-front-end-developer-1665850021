import "./BusinessContext.css";
import circleIcon from "../utils/Circle.svg";
import { useParams } from "react-router-dom";
import { TasksList } from "./TasksList";
import { nanoid } from "nanoid";

export function BusinessContext(props) {
  const params = useParams();
  const taskId = params.id;
  const index = props.tasks.findIndex((el) => el.id === taskId);
  const BusinessContexts = props.tasks[index].contexts;

  let currentDate = new Date();

  const calculateDays = (newDate, oldDate) => {
    let difference = newDate.getTime() - oldDate.getTime();
    let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return totalDays;
  };

  const renderDaysSpan = (totalDays) => {
    if (totalDays > 1)
      return (
        <span className="business-context__article-date-el">
          {" "}
          &nbsp; days ago, &nbsp;
        </span>
      );
    else if (totalDays === 1)
      return (
        <span className="business-context__article-date-el">
          {" "}
          &nbsp; day ago, &nbsp;
        </span>
      );
    else
      return (
        <span className="business-context__article-date-el">Today, &nbsp;</span>
      );
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
    if (day === "1" || day === "21" || day === "31")
      return (
        <span className="business-context__article-date-el">st &nbsp;</span>
      );
    else if (day === "2" || day === "22")
      return (
        <span className="business-context__article-date-el">nd &nbsp;</span>
      );
    else if (day === "3" || day === "23")
      return (
        <span className="business-context__article-date-el">rd &nbsp;</span>
      );
    else
      return (
        <span className="business-context__article-date-el">th &nbsp;</span>
      );
  };
  return (
    <>
      <TasksList tasks={props.tasks} />
      <div className="business-context">
        <header className="business-context__header">
          <div className="business-context__header-box">
            <div className="business-context__header-icon">
              <img src={circleIcon} alt="Business context icon" />
            </div>
            <h3 className="business-context__header-name">BUSINESS CONTEXT</h3>
          </div>
        </header>
        <main className="business-context__main-content">
          <nav>
            <ul className="business-context__list">
              {BusinessContexts.map((el) => {
                if (el.context_status === "new")
                  return (
                    <li
                      className="business-context__list-item  business-context__list-item--new"
                      key={el.id}
                      onClick={() => props.clickOnNew(el.id, taskId)}>
                      <div className="business-context__list-item-info-box">
                        <div className="business-context__list-item-new">
                          NEW
                        </div>
                        <ul className="business-context__list-item-info">
                          <li className="business-context__list-item-author">
                            {el.author}
                          </li>
                          <li className="business-context__list-item-date">{`${renderMonth(
                            el.created_at
                          )} ${renderDayOfMonth(el.created_at)}`}</li>
                        </ul>
                      </div>

                      <h3 className="business-context__list-item-title business-context__list-item-title--new">
                        {el.title}
                      </h3>
                      <p className="business-context__list-item-abstract">{`${el.content.substring(
                        0,
                        90
                      )}...`}</p>
                    </li>
                  );
                else if (el.context_status === "active")
                  return (
                    <li
                      className="business-context__list-item business-context__list-item--active"
                      key={el.id}>
                      <div className="business-context__list-item-info-box">
                        <ul className="business-context__list-item-info">
                          <li
                            className="business-context__list-item-author"
                            key={nanoid()}>
                            {el.author}
                          </li>
                          <li
                            className="business-context__list-item-date"
                            key={nanoid()}>{`${renderMonth(
                            el.created_at
                          )} ${renderDayOfMonth(el.created_at)}`}</li>
                        </ul>
                      </div>

                      <h3 className="business-context__list-item-title">
                        {el.title}
                      </h3>
                      <p className="business-context__list-item-abstract">{`${el.content.substring(
                        0,
                        90
                      )}...`}</p>
                    </li>
                  );
                else if (el.context_status === "read")
                  return (
                    <li
                      className="business-context__list-item"
                      key={el.id}
                      onClick={() => props.clickOnRead(el.id, taskId)}>
                      <div className="business-context__list-item-info-box">
                        <ul className="business-context__list-item-info">
                          <li
                            className="business-context__list-item-author"
                            key={nanoid()}>
                            {el.author}
                          </li>
                          <li
                            className="business-context__list-item-date"
                            key={nanoid()}>{`${renderMonth(
                            el.created_at
                          )} ${renderDayOfMonth(el.created_at)}`}</li>
                        </ul>
                      </div>
                      <h3 className="business-context__list-item-title">
                        {el.title}
                      </h3>
                      <p className="business-context__list-item-abstract">{`${el.content.substring(
                        0,
                        90
                      )}...`}</p>
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
                  <header className="business-context__article-title">
                    <h2 className="business-context__article-title-text">
                      {el.title}
                    </h2>
                  </header>
                  <section className="business-context__article">
                    <header className="business-context__article-header">
                      <div className="business-context__article-author-image-box">
                        <img
                          src={el.avatar}
                          alt="Author"
                          className="business-context__article-author-image"
                        />
                      </div>
                      <h3 className="business-context__article-author">
                        {el.author}
                      </h3>

                      <ul className="business-context__article-info">
                        <li
                          className="business-context__article-dot"
                          key={nanoid()}>
                          <div className="business-context__article-date">
                            {" "}
                            {totalDays > 0 ? (
                              <p className="business-context__article-date-el">
                                {totalDays}
                              </p>
                            ) : (
                              <p></p>
                            )}
                            {renderDaysSpan(totalDays)}
                            {renderDayOfMonth(el.created_at)}
                            {renderDayEndText(renderDayOfMonth(el.created_at))}
                            {` ${renderMonth(el.created_at)} `}
                          </div>
                        </li>

                        <li
                          className="business-context__article-dot"
                          key={nanoid()}>
                          <div className="business-context__article-date">
                            {renderTime(el.created_at)}
                          </div>
                        </li>
                      </ul>
                    </header>
                    <p className="business-context__article-text">
                      {el.content}
                    </p>
                  </section>
                </article>
              );
            else return <article></article>;
          })}
        </main>
      </div>
    </>
  );
}
