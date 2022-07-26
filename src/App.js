/* import logo from './logo.svg'; */
import './App.css';
import * as React from 'react';

function App() {
  const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];

  const weekday = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][new Date().getDay()];
  // console.log('day is' + weekday);

  return (
    <div className='wrapper'>
      <Header />

      <div className='white-bg'>
        <div className='bar-chart'>
          <div className='bar-chart-title strong med'>
            Spending - Last 7 days
          </div>
          {data.map((item) => {
            const isToday = item.day === weekday ? [186, 34, 60] : [10, 79, 65];

            return (
              <MyBar day={item.day} amount={item.amount} color={isToday} height={2.5}/>
            )
          })}
        </div>

        <hr />

        <Bottom />
      </div>

      <Footer />
      
    </div>
  );
}

const Header = () => {
  return (
    <div className='header'>
      <div className='header-text white'>
        <p className='tiny white'>My balance</p>
        <p className='strong med'>$921.48</p>
      </div>
      <svg id='symbol' width="72" height="48" viewBox="0 0 72 48" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#382314" cx="48" cy="24" r="24"/><circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23"/></g></svg>
    </div>
  );
}



const MyBar = ({day, amount, color, height}) => {
  const [isShown, setIsShown] = React.useState(false);
  const divStyle = {
    backgroundColor: isShown ? `hsla(${color[0]}, ${color[1]}%, ${color[2]}%, 0.6)` : `hsla(${color[0]}, ${color[1]}%, ${color[2]}%, 1)`,
    height: `${amount * height}px`
  };

  return (
    <div key={day + '-text'} className='bar-and-text tiny light light-brown'>
      {isShown && (
        <div className='bar-amount tiny strong white'>
          ${amount}
        </div>
      )}
      <div className='bar' key={day + '-bar'}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        style={divStyle}>
      </div>
      <div className='bar-text-day brown'>
        {day}
      </div>
    </div>
  )
}


const Bottom = () => {
  return (
    <div className='bottom'>
      <div className='left-text brown'>
        <p className='total-this-month tiny light light-brown'>Total this month</p>
        <p className='number-total strong large'>$478.33</p>
      </div>
      <div className='right-text tiny light light-brown'>
        <p className='strong brown'>+2.4%</p>
        <p>from last month</p>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">wxyzzz</a>.
    </div>
  )
}

export default App;
