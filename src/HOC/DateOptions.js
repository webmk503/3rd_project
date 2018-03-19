import React, { PureComponent } from 'react';

function dateOptions(Component) {
  return class extends PureComponent {

    displayName: 'DateOptions';

    options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };

    render() {
      return <Component options={this.options} {...this.props} />;
    }
  }
}

export default dateOptions;
