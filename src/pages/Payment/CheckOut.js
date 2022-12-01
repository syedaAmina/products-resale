import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getClientSecret, updateOrder } from "../../apis/productApiCall";
import { Context } from "../../context/Context";
import toast from "react-hot-toast";
const Checkout = ({ productInfo, orderId }) => {
  const { user } = Context();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transitionId, setTransitionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!elements || !stripe) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError);
    }

    if (paymentIntent) {
      setTransitionId(paymentIntent.id);
    }

    if (error) {
      setCardError(error);
    } else {
      setCardError("");
    }
  };

  useEffect(() => {
    const getClientKey = async () => {
      const data = await getClientSecret(productInfo.newPrice);
      data && setClientSecret(data);
    };
    getClientKey();
  }, [productInfo.newPrice]);

  useEffect(() => {
    const updateOrderIndb = async () => {
      if (transitionId) {
        const data = await updateOrder(orderId, transitionId);
        data && navigate("/dashboard/myOrders");
        toast.success("Payment Sucess");
      }
    };
    updateOrderIndb();
  }, [transitionId, orderId, navigate]);

  return (
    <form onSubmit={handleSubmit} className="p-5">
      <CardElement className="px-5 py-5 rounded w-full bg-white" />
      <button
        type="submit"
        disabled={!stripe}
        className="my-3 px-4 py-4 bg-slate-900 text-white rounded w-full"
      >
        Pay Now
      </button>

      {cardError && <p className="my-3 text-red-500">{cardError}</p>}
    </form>
  );
};

export default Checkout;
