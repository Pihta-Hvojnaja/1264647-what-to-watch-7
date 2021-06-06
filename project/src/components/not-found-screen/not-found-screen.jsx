
import React from 'react';
import { Link } from 'react-router-dom';


function NotFoundScreen() {
  return (
    <div className="user-page">
      <section className="user-page__title">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </div>
  );
}


export default NotFoundScreen;
