import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';

const orderStatusList = [
  { label: 'On The Way', value: 'on_the_way' },
  { label: 'Delivered', value: 'delivered' },
  { label: 'Cancelled', value: 'cancelled' },
  { label: 'Returned', value: 'returned' }
];

const orders = [
  {
    img: "https://covers.openlibrary.org/b/isbn/9781476738024-L.jpg",
    title: "A Man Called Ove",
    author: "Fredrik BackMan",
    price: "₹1099",
    status: "delivered",
    delivery: "Expected Delivery On Mar 03",
  },
  {
    img: "https://covers.openlibrary.org/b/isbn/9781250217288-L.jpg",
    title: "The house in the Cerulean Sea",
    author: "T.J. Klune",
    price: "₹499",
    status: "on_the_way",
    delivery: "Expected Delivery On Mar 03",
  },
  {
    img: "https://covers.openlibrary.org/b/isbn/9780735220683-L.jpg",
    title: "Eleanor Oliphant Is Completely Fine",
    author: "Gail Honeyman",
    price: "₹1099",
    status: "cancelled",
    delivery: "Expected Delivery On Mar 03",
  },
];

const OrderCard = () => {
  const [selectedStatus, setSelectedStatus] = useState([]);

  const handleCheckboxChange = (value) => {
    if (selectedStatus.includes(value)) {
      setSelectedStatus(selectedStatus.filter((status) => status !== value));
    } else {
      setSelectedStatus([...selectedStatus, value]);
    }
  };

  const filteredOrders =
    selectedStatus.length > 0
      ? orders.filter((order) => selectedStatus.includes(order.status))
      : orders;

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Box className="shadow-md p-6 rounded-md sticky top-5 bg-white">
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Filters
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            ORDER STATUS
          </Typography>
          <Box className="space-y-3">
            {orderStatusList.map(({ label, value }) => (
              <label
                key={value}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedStatus.includes(value)}
                  onChange={() => handleCheckboxChange(value)}
                />
                <span className="text-sm">{label}</span>
              </label>
            ))}
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={9}>
        {filteredOrders.map(({ img, title, author, price, delivery}, idx) => (
          <Box
            key={idx}
            className="flex justify-between items-center shadow-md p-4 mb-6 rounded-md"
          >
            <Box className="flex items-center space-x-4 w-1/3 text-left">
              <img
                src={img}
                alt={title}
                className="w-20 h-20 object-cover rounded"
              />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  {title}
                </Typography>
                <Typography variant="caption" className="opacity-50">
                  Author: {author}
                </Typography>
              </Box>
            </Box>

            <Typography variant="body1" fontWeight="bold" className="w-20 text-center">
              {price}
            </Typography>

            <Box className="w-1/3 text-left">
              <Typography variant="body2" fontWeight="bold" className="text-green-600" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <AdjustIcon fontSize="small" />
                {delivery}
              </Typography>
              
            </Box>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default OrderCard;
