import React, { useEffect, useState } from 'react';

// INCORRECT: Order interface assumes shippingAddress is always present
interface Address {
  line1: string;
  city: string;
  country: string;
}

interface Order {
  id: string;
  productType: 'DIGITAL' | 'PHYSICAL';
  total: number;
  // shippingAddress assumed always present but sometimes omitted for digital
  shippingAddress: Address;
}

// Simulated API fetcher
function fetchOrder(orderId: string): Promise<any> {
  // Emulate: digital order missing shippingAddress
  if (orderId === '1') {
    return Promise.resolve({
      id: '1',
      productType: 'DIGITAL',
      total: 42.0
      // shippingAddress missing!
    });
  }
  // Physical order with address
  return Promise.resolve({
    id: '2',
    productType: 'PHYSICAL',
    total: 84.5,
    shippingAddress: {
      line1: '123 Main St',
      city: 'Boston',
      country: 'USA'
    }
  });
}

export const OrderDetails: React.FC<{ orderId: string }> = ({ orderId }) => {
  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchOrder(orderId)
      // developer forced cast to Order to avoid TS error:
      .then((resp: any) => setOrder(resp as any as Order))
      .catch(() => setError('Failed to load order'));
  }, [orderId]);

  if (error) return <div data-testid="error">{error}</div>;
  if (!order) return <div>Loading...</div>;

  return (
    <div data-testid="order-details">
      <div>
        <b>Order ID:</b> {order.id}
      </div>
      <div>
        <b>Type:</b> {order.productType}
      </div>
      <div>
        <b>Total:</b> ${order.total}
      </div>
      <div>
        <b>Shipping Address:</b>
        <div>City: {order.shippingAddress.city}</div>
        <div>Country: {order.shippingAddress.country}</div>
      </div>
    </div>
  );
};
