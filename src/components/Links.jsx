import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../Assets/Icon.svg';
import slack from '../Assets/slack.svg';

const Links = () => {
  return (
    <div className='links'>
      <Link to='https://twitter' id='btn__zuri' target='_blank'>Twitter Link</Link>
      <Link to={{ pathname:'https://training.zuri.team/' }} id='btn__zuri' target='_blank'>Zuri Team</Link>
      {/* <a href='https://training.zuri.team/' exact id='btn__zuri' target='_blank'>Zuri Team</a> */}
      <Link to='https://books.zuri.team/' id='books' target='_blank'>Zuri Books</Link>
      <Link to='https://books.zuri.team/python-for-beginners?ref_id=<slackusername>' id='book__python' target='_blank'>Python Books</Link>
      <Link to='https://background.zuri.team/' id='pitch' target='_blank'>Background Check for Coders</Link>
      <Link to='https://books.zuri.team/design-rules' id='book__design' target='_blank'>Design Books</Link>
      <div className="socials">
        <img src={ slack } />
        <img src={ icon } />
      </div>
    </div>
  )
}

export default Links