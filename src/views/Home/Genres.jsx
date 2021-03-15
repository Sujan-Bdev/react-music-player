import React from 'react';
import {Button} from 'antd'

const Genres = () => {
    return (
      <div className="home-genres">
        <div className="charts__title">
          <h3 className="charts__title--main">Genres</h3>
          <Button size="small" className = "btn--list">see all</Button>
        </div>

        <div className="genres__list">
          <div className="genres__item">Dance Beat</div>
          <div className="genres__item">Jazz</div>
          <div className="genres__item">Rock</div>
          <div className="genres__item">Korean Pop</div>
          <div className="genres__item">Classical</div>
          <div className="genres__item">Hip Hop</div>
        </div>
      </div>
    );
}

export default Genres
