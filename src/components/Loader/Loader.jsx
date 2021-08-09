import { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

export default class Spinner extends Component {
  render() {
    return (
      <div className={styles.spinnerContainer}>
        <Loader
          type="ThreeDots"
          color="rgb(154, 0, 52)"
          height={80}
          width={80}
          timeout={3000}
        />
      </div>
    );
  }
}
