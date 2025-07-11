import React from 'react';
import { OrderDetails } from './OrderDetails';

const App: React.FC = () => {
  return (
    <div>
      <h1>Order Summary</h1>
      {/* Try digital order with no shipping address */}
      <OrderDetails orderId="1" />
      <hr />
      {/* Physical order with shipping address */}
      <OrderDetails orderId="2" />
    </div>
  );
};

export default App;
