import React from 'react';
import Goat from '../Goat/Goat';

class GoatCorral extends React.Component {
  render() {
    const { goats } = this.props;

    const goatCards = goats.map((goat) => (
      <Goat key={goat.id} goat={goat} />
    ));

    return (
      <div>
        <h3>GET YOUR GOAT</h3>
        <div className="d-flex flex-wrap container">
          { goatCards }
        </div>
      </div>
    );
  }
}

export default GoatCorral;
