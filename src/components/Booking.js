import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import api from '../services/api';
import getCurrentUsername from '../services/user';

const BookingPage = () => {
  const { carId } = useParams();
  const history = useHistory();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleBooking = async () => {
    const booking = {
      startDate,
      endDate,
    };
    const response = await api.post(`/bookings/'${carId}/${getCurrentUsername}`, booking);
    history.push(`/confirmation/${response.data.code}`);
  };

  return (
    <div>
      <h1>Book a Car</h1>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
      </label>
      <button onClick={handleBooking}>Submit Booking</button>
    </div>
  );
};

export default BookingPage;
