import { LoginSharp } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Paypal = () => {
  const price = useSelector(selectPrice);
  const paypal = useRef();

  useEffect(() => {
    paypal
      .Buttons({
        createOrder: (data, actions, error) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Netflix subscription",
                amount: {
                  currency_code: "EUR",
                  value: price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => console.log(err),
      })
      .render(paypal.current);
  }, []);

  return <div ref={paypal}>Paypal</div>;
};

export default Paypal;
