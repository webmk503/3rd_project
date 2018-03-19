import Loader from 'react-loader-spinner'
import React, { PureComponent} from 'react';

class LoaderView extends PureComponent {

  render(){
    return <Loader type="Audio" color="#8c0615" height={80} width={80}/>;
  }
}
export default LoaderView;
