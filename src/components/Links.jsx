import React from 'react';
import icon from '../Assets/Icon.svg';
import slack from '../Assets/slack.svg';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div className='links'>
      <a href='https://twitter.com/Die_Feuhrer' id='btn__zuri' target='_blank' rel='noreferrer' className='nav__links'>Twitter Link</a>
      <a href='https://training.zuri.team/' id='btn__zuri' target='_blank' rel='noreferrer' className='nav__links'>Zuri Team</a>
      <a href='https://books.zuri.team/' title='Get quality books on coding and design here!' id='books' target='_blank' rel='noreferrer' className='nav__links'>Zuri Books</a>
      <a href='https://books.zuri.team/python-for-beginners?ref_id=Winchestre' title='The best python books for you on your tech journey' id='book__python' target='_blank'  rel='noreferrer'className='nav__links'>Python Books</a>
      <a href='https://background.zuri.team/' title='We run background checks on developer and designers' id='pitch' target='_blank' rel='noreferrer' className='nav__links'>Background Check for Coders</a>
      <a href='https://books.zuri.team/design-rules' title='Get a free copy of our design book' id='book__design' target='_blank' rel='noreferrer' className='nav__links'>Design Books</a>
      <Link to='/contact' id='contact' target='_blank' rel='noreferrer' className='nav__links'>Contact Me</Link>

      <div className="socials">
        <a href='https://hng9.slack.com/team/Winchestre/' target= '_blank' rel='noreferrer'><img src={ slack } alt=''/></a>
        <a href='https://github.com/Winchestre' target= '_blank' rel='noreferrer'><img src={ icon } alt=''/></a>
      </div>
    </div>
  )
}

export default Links