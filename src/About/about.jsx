import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about__main">
      <div className="about__title-flex">
        <span className="bracket"> {'{'}</span>{' '}
        <div className="about__title-bracket-flex">
          <h1 className="about__title">O projektu</h1>
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At corrupti
            temporibus aliquam est vel mollitia alias laudantium asperiores nemo
            neque nisi veniam, adipisci ut, distinctio ipsum deserunt cum
            consectetur. Et? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nemo facere fugiat et nihil, tempore eos excepturi odio aut
            eveniet corporis. Porro asperiores nostrum nobis repellat, impedit
            quos culpa nihil veniam. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Nesciunt alias asperiores nam cum ipsa provident!
            Nulla, qui facere, optio modi aut consequuntur nesciunt asperiores
            similique nisi expedita consequatur voluptatem repellat.
          </p>
        </div>
      </div>
      <div className="about__columns-flex">
        <div className="about__columns"></div>
        <div className="about__columns"></div>
        <div className="about__columns"></div>
      </div>
    </div>
  );
};
export default About;
