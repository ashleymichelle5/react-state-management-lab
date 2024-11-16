import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]
  );

  useEffect(() => {
    const strength =team.reduce((total, fighter) => total + fighter.strength, 0);
    setTotalStrength(strength);

    const agility = team.reduce((total, fighter) => total + fighter.agility, 0);
    setTotalAgility(agility);
  }, [team]);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
    } else {
      alert("Not enough money")
    }
  }; 

  const handleRemoveFighter = (fighterToRemove) => {
    const updateTeam = team.filter(fighter => fighter !== fighterToRemove);
    setTeam(updateTeam);
    setMoney(money + fighterToRemove.price);
  };

  return (
    <div>
      <h1>Zombie Team Manager</h1>
      <div>
        <p>Money: {money}</p>
        <p>Strenght: {strength}</p>
        <p>Agility: {agility}</p>
      </div>
      <div>
        <h2>Available Fighters: </h2>
        <ul>
          {zombieFighters.map((fighter, index) => (
            <li key={index}>
              <img src={fighter.img} alt={fighter.name} />
              <p>{fighter.name}</p>
              <p>{fighter.price}</p>
              <p>{fighter.strength}</p>
              <p>{fighter.agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          ))}
        </ul>
        <div>
          <h2>Your team:</h2>
          {team.length === 0 ? (
            <p>Pick some members</p>
          ) : (
            <ul>
              {team.map((fighter, index) => (
                <li key={index}>
                  <img src={fighter.img} alt={fighter.name} />
                  <p>Name: {fighter.name}</p>
                  <p>Price: {fighter.price}</p>
                  <p>Strength: {fighter.strength}</p>
                  <p>Agility: {fighter.agility}</p>
                  <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
                </li> 
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;
