import React, { useEffect, useState } from 'react';
import api from '../services/api';

const AdminPage = () => {
  const [cars, setCars] = useState([]);
  const [model, setModel] = useState('');
  const [pricePerDay, setPricePerDay] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchCars = async () => {
      const response = await api.get('/cars');
      setCars(response.data);
    };
    fetchCars();
  }, []);

  const handleAddCar = async () => {
    const newCar = { model, pricePerDay, imageUrl };
    await api.post('/cars', newCar);
    const response = await api.get('/cars');
    setCars(response.data);
    setModel('');
    setPricePerDay('');
    setImageUrl('');
  };

  const handleDeleteCar = async (carId) => {
    await api.delete(`/cars/${carId}`);
    const response = await api.get('/cars');
    setCars(response.data);
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <div>
        <label>
          Model:
          <input value={model} onChange={e => setModel(e.target.value)} />
        </label>
        <label>
          Price Per Day:
          <input type="number" value={pricePerDay} onChange={e => setPricePerDay(e.target.value)} />
        </label>
        <label>
          Image URL:
          <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
        </label>
        <button onClick={handleAddCar}>Add Car</button>
      </div>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <img src={car.imageUrl} alt={car.model} />
            <h2>{car.model}</h2>
            <p>Price per day: ${car.pricePerDay}</p>
            <button onClick={() => handleDeleteCar(car.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
