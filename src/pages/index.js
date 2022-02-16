import React from 'react';
import Scrollspy from 'react-scrollspy';

import img1 from '../../static/1.jpg'
import img2 from '../../static/5.jpg'
import img3 from '../../static/3.jpg'
import img4 from '../../static/4.jpg'

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/overlay.png';
import { Link } from 'gatsby';

const sections = [
  { id: 'one', bg: (img1) },
  { id: 'two', bg: (img2) },
  { id: 'three', bg: (img3) },
  { id: 'four', bg: (img4) },
];
const IndexPage = () => (
  <Layout>
    <Header />

    <section id="one" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={'/1.jpg'} alt="img" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Partnerzy</h2>
          </header>
          <p>
            Aliquam ante ac id. Adipiscing interdum lorem praesent fusce
            pellentesque arcu feugiat. 
          </p>
          <ul className="icons-grid">
            <li>
              <span className="icon major fa-camera-retro" />
              <h3>LPP</h3>
            </li>
            <li>
              <span className="icon major fa-pencil" />
              <h3>Reserved</h3>
            </li>
            <li>
              <span className="icon major fa-code" />
              <h3>Emanuel Berg</h3>
            </li>
            <li>
              <span className="icon major fa-coffee" />
              <h3>Solar</h3>
            </li>
          </ul>
        </div>
        <Scroll type="id" element="two">
          <a href="#two" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="two" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={'/2.jpg'} alt="img" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Czym się zajmujemy</h2>
          </header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatibus officiis perferendis cupiditate inventore explicabo fugiat, cum, corporis quisquam praesentium ducimus magnam recusandae odit culpa mollitia eveniet labore quaerat quis.
          </p>
          
        </div>
        <Scroll type="id" element="three">
          <a href="#three" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="three" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={'/3.jpg'} alt="img" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Zalety i możliwości</h2>
          </header>
          <p>
            Aliquam ante ac id. Adipiscing interdum lorem praesent fusce
            pellentesque arcu feugiat. Consequat sed ultricies rutrum. Sed
            adipiscing eu amet interdum lorem blandit vis ac commodo aliquet
            integer vulputate phasellus lorem ipsum dolor lorem magna consequat
            sed etiam adipiscing interdum.
          </p>
        </div>
        <Scroll type="id" element="footer">
          <a href="#footer" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="footer">
      <div className="container">
      <span className="image fit primary">
        </span>
        <header className="major">
          <h2>Skontaktuj się z nami</h2>
        </header>
        {/* Zmienić maila  */}
        <form action="https://formsubmit.co/your@email.com" method="POST">
          
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-xsmall">
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="4"
              />
            </div>
            <div className="col-12">
              <ul className="actions special">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    className="primary"
                  />
                </li>
              </ul>
            </div>
          </div>
          {/* url do zmiany */}
          <input type="hidden" name="_next" value="https://garni.netlify.app"></input>
        </form>
      </div>
      <Footer />
    </section>

    <Scrollspy
      items={sections.map(s => s.id)}
      currentClassName="active"
      offset={50}
      componentTag={'div'}
    >
      {sections.map(s => {
        return (
          <div
            key={s.id}
            className="main-bg"
            id={`${s.id}-bg`}
            style={{ backgroundImage: `url(${overLayPic}), url(${s.bg})` }}
          />
        );
      })}
    </Scrollspy>
  </Layout>
);

export default IndexPage;
