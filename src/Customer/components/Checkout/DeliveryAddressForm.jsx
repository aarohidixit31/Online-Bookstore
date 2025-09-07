import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const DeliveryAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      streetAddress: data.get('address'),
      city: data.get('city'),
      state: data.get('state'),
      zipCode: data.get('zip'),
      mobile: data.get('phoneNumber'),
    };
    console.log("address", address);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* LEFT SIDE: Address Card */}
      <div className="w-full lg:w-1/2 border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll p-5">
        <AddressCard />
        <div className="flex justify-start mt-4">
        <Button
          sx={{ mt: 2, bgcolor: 'rgb(145 85 253)' }}
          size="large"
          variant="contained"
          className="mt-4 self-start"
        >
          Deliver Here
        </Button>
        </div>
      </div>

      {/* RIGHT SIDE: Form */}
      <div className="w-full lg:w-1/2 border rounded-s-md shadow-md p-5">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
            <TextField
              required
              id="address"
              name="address"
              label="Address"
              fullWidth
              multiline
              rows={4}
              autoComplete="street-address"
              className="col-span-1 sm:col-span-2"
            />
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="address-level2"
            />
            <TextField
              required
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              autoComplete="address-level1"
            />
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal-code"
              fullWidth
              autoComplete="postal-code"
            />
            <TextField
              required
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              fullWidth
              autoComplete="tel"
            />
            <div className="col-span-1 sm:col-span-2">
              <Button
                sx={{ py: 1.5, mt: 2, bgcolor: 'rgb(145 85 253)' }}
                size="large"
                variant="contained"
                type="submit"
                fullWidth
              >
                Deliver Here
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryAddressForm;
