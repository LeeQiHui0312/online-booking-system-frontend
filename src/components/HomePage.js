import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const HomePage = () => {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    carType: '',
    minPrice: '',
    maxPrice: '',
  });

  useEffect(() => {
    const fetchCars = async () => {
      const response = await api.get('/cars');
      setCars(response.data);
    };
    fetchCars();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredCars = cars.filter(car => {
    return (
      (!filters.minPrice || car.dailyPrice >= filters.minPrice) &&
      (!filters.maxPrice || car.dailyPrice <= filters.maxPrice)
    );
  });

  return (
    <div>
      <h1>Available Cars</h1>
      <div>
        <label>
          Min Price:
          <input type="number" name="minPrice" value={filters.minPrice} onChange={handleFilterChange} />
        </label>
        <label>
          Max Price:
          <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} />
        </label>
      </div>
      <ul>
        {filteredCars.map(car => (
          <li key={car.id}>
            <h2>{car.name}</h2>
            <h2>{car.code}</h2>
            <p>Daily price: ${car.dailyPrice}</p>
            <Link to={`/book/${car.id}`}>Book Now</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
