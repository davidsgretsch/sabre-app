import React from 'react';
import { string } from 'prop-types';
import './styles.css';

const TitleApp = props => {
  const { title } = props;

  return <h2 className="title is-2">{title}</h2>;
}

TitleApp.propTypes = {
  title: string.isRequired
};

export default TitleApp;
