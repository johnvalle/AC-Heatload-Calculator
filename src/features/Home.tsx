import { FormEvent, useState } from 'react';

import './styles.css';

export const Home = () => {
  const [applianceCount, setApplianceCount] = useState({
    fridge: 0,
    ledTV: 0,
    lights: 0
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <div
          className="room"
          style={{ width: '500px', height: '250px', border: '1px solid black', position: 'relative' }}>
          <div className="window" style={{ position: 'absolute' }}></div>
          <div className="door" style={{ position: 'absolute' }}></div>
        </div>
      </div>
      <main>
        <form onSubmit={handleSubmit}>
          <div>
            <label>What is the room size?</label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input type="number" name="length" placeholder="Enter length in sq.m." min="1" />
              <input type="number" name="width" placeholder="Enter width in sq.m." min="1" />
            </div>
          </div>
          <div>
            <label htmlFor="occupants">What is the usual number of people staying in the room?</label>
            <input type="number" name="occupants" placeholder="Enter number of people" min="1" />
          </div>
          <div>
            <label htmlFor="isHitBySunlight">Is the room hit by direct sunlight?</label>
            <input type="checkbox" name="isHitBySunlight" />
          </div>
          <div>
            <label htmlFor="isInKitchen">Is the room in a kitchen or has an open kitchen?</label>
            <input type="checkbox" name="isInKitchen" />
          </div>
          <hr />
          <h3>Check the following appliances that are inside the room</h3>
          <div>
            <label htmlFor="">Refrigerator:</label>
            <button type="button">+</button>
            <span>{applianceCount.fridge}</span>
            <button type="button">-</button>
          </div>
          <div>
            <label htmlFor="">LED TV:</label>
            <button
              type="button"
              onClick={() => setApplianceCount({ ...applianceCount, ledTV: (applianceCount.ledTV += 1) })}>
              +
            </button>
            <span>{applianceCount.ledTV}</span>
            <button
              type="button"
              onClick={() => setApplianceCount({ ...applianceCount, ledTV: (applianceCount.ledTV -= 1) })}>
              -
            </button>
          </div>
          <input type="submit" />
        </form>
      </main>
      <aside></aside>
    </div>
  );
};
