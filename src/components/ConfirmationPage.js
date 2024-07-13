import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const ConfirmationPage = () => {
  const { bookingCode } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      const response = await api.get(`/bookings/${bookingCode}`);
      setBooking(response.data);
    };
    fetchBooking();
  }, [bookingCode]);

  if (!booking) return <div>Loading...</div>;

  return (
    <div>
      <h1>Booking Confirmation</h1>
      <p>Booking Code: {booking.bookingCode}</p>
      <p>Customer Name: {booking.user.username}</p>
      <p>Vehicle No.: {booking.car.carCode}</p>
      <p>Total price: ${booking.totalPrice}</p>
      <p>Rental Period: {booking.startDate} to {booking.endDate}</p>
    </div>
  );
};

export default ConfirmationPage;
