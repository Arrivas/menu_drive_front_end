import { PayPalButtons } from '@paypal/react-paypal-js';

interface PaypalProps {
  amount: any;
}

const Paypal: React.FC<PaypalProps> = ({ amount }) => {
  return (
    <div className="relative">
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={async (data: any, actions: any) => {
          return await actions.order.capture().then((details: any) => {
            console.log(details);
          });
        }}
        onError={(err) => console.log(err)}
      />
    </div>
  );
};

export default Paypal;
