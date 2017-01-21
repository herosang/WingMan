import styles from './css/header.scss';
import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className = {styles.headerContainer}>
        WingMan
      </div>
    )
  }
}
