import React from 'react';
import GenericHeader from './GenericHeader';
import Footer from './Footer';
import Hotel from '../assets/portfolio/hotel.PNG';
import Webbrain from '../assets/portfolio/webbrain.PNG';
import Bootstrap from '../assets/portfolio/bootstrap.PNG';
import Budget from '../assets/portfolio/budget.PNG';
import { Link } from 'react-router-dom';

const links = [
  {
    link: 'https://dashboard.trailer-test.nightwell-logistics.com/',
    name: 'Trailer Prime',
  },
  { link: 'https://loadfetcher.com/', name: 'loadfetcher' },
  { link: 'https://borbaraka.netlify.app/', name: 'borbaraka' },
  { link: 'https://rapidboard-q3tidrazma-uk.a.run.app/', name: 'rapidboard' },
  { link: 'https://wbba.netlify.app/', name: 'web brain design' },
  { link: 'https://bill-hotel-site.netlify.app/', name: 'hotel rooms' },
  {
    link: 'https://dispatch-report-maker.netlify.app/',
    name: 'driver expenses report maker',
  },
  {
    link: 'https://chat-app-socket-io.netlify.app/',
    name: 'simple socket chat app',
  },
];

export default function Portfolio({ display }) {
  return (
    <>
      {!display && <GenericHeader title='PORTFOLIO' page='Portfolio ' />}
      <section id='portfolio' className='center'>
        <div className='portfolio'>
          <h3>MY RECENT COMPLETED PROJECTS</h3>
          {links.map((l) => (
            <div style={{ marginBottom: '10px' }} key={l.link}>
              <a
                href={l.link}
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: 'rgb(101 74 207)' }}
              >
                {l.name}
              </a>
            </div>
          ))}

          <p>
            These are just some projects you are seeing, I have way more
            projects I had practiced.
          </p>
          <p>1. Webbrain</p>
          <p>2. Hotel Reservation </p>
          <p>3. Bootstrap Portfolio </p>
          <p>4. Budget App </p>
        </div>
        <div className='imgWrapper'>
          <div className='imgParent'>
            <a
              className='displayWebsite portfolioBtn biggerFont'
              target='blank'
              href='https://wbba.netlify.app/'
            >
              App Website
            </a>
            <a className='displayCode portfolioBtn biggerFont'>
              non public &#x21;
            </a>
            <Link
              to='/portfolio/webbrain'
              className='portfolioBtn displayDetails biggerFont'
            >
              Project Details
            </Link>
            <img
              className='imgPortf'
              src={Webbrain}
              alt='hotel reservation site'
            />
          </div>
          <div className='imgParent'>
            <a
              className='displayWebsite portfolioBtn biggerFont'
              target='blank'
              href='https://bill-hotel-site.netlify.app/'
            >
              App Website
            </a>
            <a
              className='displayCode portfolioBtn biggerFont'
              target='blank'
              href='https://github.com/Bill0197/hotel-reservation'
            >
              Source Code
            </a>
            <Link
              to='/portfolio/hotel'
              className='portfolioBtn displayDetails biggerFont'
            >
              Project Details
            </Link>
            <img
              className='imgPortf'
              src={Hotel}
              alt='hotel reservation site'
            />
          </div>
          <div className='imgParent'>
            <a
              className='displayWebsite portfolioBtn biggerFont'
              target='blank'
              href='https://khabibullosaydullaev.netlify.app/'
            >
              App Website
            </a>
            <a
              className='displayCode portfolioBtn biggerFont'
              target='blank'
              href='https://github.com/Bill0197/bootstrap-the-updated-one'
            >
              Source Code
            </a>
            <Link
              to='/portfolio/bootstrap'
              className='portfolioBtn displayDetails biggerFont'
            >
              Project Details
            </Link>
            <img
              className='imgPortf'
              src={Bootstrap}
              alt='portfolio site with bootstrap'
            />
          </div>
          <div className='imgParent'>
            <a
              className='displayWebsite portfolioBtn biggerFont'
              target='blank'
              href='https://bill-budget.netlify.app/'
            >
              App Website
            </a>
            <a
              className='displayCode portfolioBtn biggerFont'
              target='blank'
              href='https://github.com/Bill0197/bill-budget'
            >
              Source Code
            </a>
            <Link
              to='/portfolio/budget'
              className='portfolioBtn displayDetails biggerFont'
            >
              Project Details
            </Link>
            <img className='imgPortf' src={Budget} alt='budget site' />
          </div>
        </div>
      </section>
      {!display && (
        <div className='fullWidth'>
          <Link to='/' className='center bannerBtn'>
            back to home
          </Link>
        </div>
      )}
      {!display && <Footer />}
    </>
  );
}
