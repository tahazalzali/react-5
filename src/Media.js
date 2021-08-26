import React from 'react';
import { Media } from 'reactstrap';

const Media1 = (props) => {
  return (
    <Media className='m-3'>
      <Media left href="/">
        <Media object src={props.image} alt={props.designation} />
      </Media>
      <Media body>
        <Media heading>
          {props.name}
        </Media>
        <Media className='mb-3'>
        {props.designation}
        </Media>
        {props.description}
      </Media>
    </Media>
  );
};

export default Media1;