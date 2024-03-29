import React from 'react';
import Icon1 from '../../images/5.svg';
import Icon2 from '../../images/weatherApp.png';
import Icon3 from '../../images/workoutapp.png';
import Icon4 from '../../images/screenshot.png';
import Icon7 from '../../images/eCommerce.png';
import Icon5 from '../../images/f1-app.png';
import Icon6 from '../../images/screenshotapp.png';
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesH1,
  ServicesH2,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='portfolio'>
      <ServicesH1>My Projects</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://f1-fanzone.herokuapp.com/'
          >
            <ServicesIcon src={Icon6} />
          </a>
          <ServicesH2>F1 Fanzone</ServicesH2>
          <ServicesP>
            A fullstack MERN app with mutliple APIs, showing live driver/team
            points, up coming races, weather and user auth!
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://peaceful-falls-30555.herokuapp.com/homepage'
          >
            <ServicesIcon src={Icon4} />
          </a>
          <ServicesH2>Workout Tracker</ServicesH2>
          <ServicesP>
            A MERN application where you can log your workouts, or adjust
            percentages
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://the-weather-app1.netlify.app/'
          >
            <ServicesIcon src={Icon2} />
          </a>
          <ServicesH2>Weather App</ServicesH2>
          <ServicesP>
            WeatherApp built in ReactJS, using the openweatherapi.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://workout-app-e245d.web.app/'
          >
            <ServicesIcon src={Icon3} />
          </a>
          <ServicesH2>WorkoutApp V2</ServicesH2>
          <ServicesP>Another workout app using Firebase and React</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://f1-stat-app.netlify.app/'
          >
            <ServicesIcon src={Icon5} />
          </a>
          <ServicesH2>F1 Stats App</ServicesH2>
          <ServicesP>
            F1 Stat tracking app, using an api, the stats are up to date. Built
            in React
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://camourapparel.herokuapp.com/'
          >
            <ServicesIcon src={Icon7} />
          </a>
          <ServicesH2>eCommerce Store</ServicesH2>
          <ServicesP>eCommerce store built using MERN stack.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
