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
        { goatCards }
      </div>
    );
  }
}

export default GoatCorral;
