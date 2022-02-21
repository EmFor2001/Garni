import React from 'react';
import Scroll from './Scroll';

export default function Headereng() {
  return (
    <section id="header">
      <header className="major">
        <h1>Garni</h1>
        <p>Sewing</p>
      </header>
      <div className="container">
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="#one" className="button primary">
                Let's begin
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
    </section>
  );
}
