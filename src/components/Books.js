import React, {Component} from 'react'
import {Card, Icon} from 'semantic-ui-react'
import '../styles/global.css';
import {Link} from "react-router-dom";

class Books extends Component {

  render() {
    return (
      <div className="post">
        <Card
          image=''
          header={
            <Link to='book'>
            {'123'}
            </Link>}
          meta={'3'}
          description={'text'}
        />
      </div>
    );
  }
}

export default Books;
