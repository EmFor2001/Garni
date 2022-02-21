import React from 'react';
import Scrollspy from 'react-scrollspy';

import img1 from '../../static/1.jpg'
import img5 from '../../static/5.jpg'
import img3 from '../../static/3.jpg'
import img4 from '../../static/4.jpg'

import Layout from '../components/Layout';
import Headereng from '../components/Header_eng';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/overlay.png';
import { Link } from 'gatsby';

const sections = [
  { id: 'one', bg: (img1) },
  { id: 'two', bg: (img5) },
  { id: 'three', bg: (img3) },
  { id: 'four', bg: (img4) },
];
const IndexPage = () => (
  <Layout>
    <Link to="/">PL</Link>
    <Headereng />


    <section id="one" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={'/5.jpg'} alt="img" />
        </span>
        <div className="content">
          <header className="major">
            <h2>What we do?</h2>
          </header>
          <p>
            The Garni company has been providing sewing services for over 20 years. We have a team of qualified specialists and a machine park intended for the production of dresses, blouses, shirts, sleeping bags, pajamas and other products.
          </p>
          
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
          <img src={'/1.jpg'} alt="img" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Our partners</h2>
          </header>
          <p>
            We work with:
          </p>
          <ul className="icons-grid">
            <li>
              <img className="logo" src={'/mohito.jpg'} alt="mohito" />
              {/* <h3>MOHITO</h3> */}
            </li>
            <li>
              <img className="logo" src={'/reserved.jpg'} alt="reserved" />
              {/* <h3>Reserved</h3> */}
            </li>
            <li>
              <img className="logo" src={'/emanuelberg.png'} alt="emanuel berg" />
              {/* <h3>Emanuel Berg</h3> */}
            </li>
            <li>
              <img className="logo" src={'/solar.jpg'} alt="solar" />
              {/* <h3>Solar</h3> */}
            </li>
          </ul>
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
            <h2>Advantages and capabilities</h2>
          </header>
          <p>
            In order to make our company's offer more attractive, in 2018 we opened a second sewing room in Ukraine. We currently employ a total of 100 people in both countries, which allows us to carry out small and large orders.
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
        <header className="major">
          <h2>Contact</h2>
        </header>
        <p>We invite you to contact us and cooperate</p>
        {/* Zmienić maila  */}
        <form action="https://formsubmit.co/garni1@wp.pl" method="POST">
          
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
                    value="Send"
                    className="primary"
                  />
                </li>
              </ul>
            </div>
          </div>
          <input type="hidden" name="_next" value="https://garni.netlify.app/En"></input>
        </form>
        <div className="contact-data">
          <h3>Garni</h3>
          <p>
          Marcin Gańczarczyk <br />
          tel.:+48 501 517 317 <br />
          garni1@wp.pl
          </p>
        </div>
      <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1157.2631003711326!2d18.46471988366539!3d54.5418489653619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda42041b4a32f%3A0x6db4fc359ef51e12!2sGniewska%2024A%2C%2081-047%20Gdynia!5e0!3m2!1spl!2spl!4v1645016724618!5m2!1spl!2spl" height="450" allowfullscreen="" loading="lazy"></iframe>
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
