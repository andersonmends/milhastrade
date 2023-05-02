import React from "react";

export function NewsPage(props) {
  return (
    <div>
      <h1>{props.news.title}</h1>
      <p>{props.news.content}</p>
    </div>
  );
}
