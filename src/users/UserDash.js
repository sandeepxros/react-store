import { useReducer } from "react";
import { CgProfile } from "react-icons/cg";
import ProfileSettings from "./dash-actions/ProfileSettings";
import MyOrders from "./dash-actions/MyOrders";
import Coupon from "./dash-actions/Coupon";
import CustomerSupport from "./dash-actions/CustomerSupport";
import Notifications from "./dash-actions/Notifications";
import ReviewAndRating from "./dash-actions/ReviewAndRating";
import Wishlist from "./dash-actions/Wishlist";

const initialState = <ProfileSettings />;
const reducer = (state, action) => {
  switch (action) {
    case "profile":
      state = <ProfileSettings />;
      return state;
    case "orders":
      state = <MyOrders />;
      return state;
    case "coupon":
      state = <Coupon />;
      return state;
    case "customerSupport":
      state = <CustomerSupport />;
      return state;
    case "notification":
      state = <Notifications />;
      return state;
    case "review":
      state = <ReviewAndRating />;
      return state;
    case "wishlist":
      state = <Wishlist />;
      return state;
    default:
      return state;
  }
};
export default function UserDash() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="container-fluid">
        <div className="col-12 bg-light text-center p-5">
          <CgProfile size="3em" color="hotpink" />
          <span>Hello, Sandeep Kumar</span>
        </div>
        <div className="container bg-dark">
          <div className="row">
            <div className="col-4 bg-light position-sticky">
              <ul className="list-group">
                <li
                  className="list-group-item list-group-item-action"
                  onClick={() => dispatch("orders")}
                >
                  My Order
                </li>
                <li
                  className="list-group-item list-group-item-action"
                  onClick={() => dispatch("profile")}
                >
                  Profile Setting
                </li>
                <li
                  className="list-group-item list-group-item-action"
                  onClick={() => dispatch("coupon")}
                >
                  My Coupon
                </li>
                <li
                  className="list-group-item list-group-item-action"
                  onClick={() => dispatch("review")}
                >
                  My Review & Ratings
                </li>
                <li
                  className="list-group-item list-group-item-action"
                  onClick={() => dispatch("notification")}
                >
                  All Notifications
                </li>
                <li
                  className="list-group-item list-group-item-action"
                  onClick={() => dispatch("wishlist")}
                >
                  My Wishlist
                </li>
                <li
                  className="list-group-item list-group-item-action"
                  onClick={() => dispatch("customerSupport")}
                >
                  Customer Support
                </li>
                <li className="list-group-item list-group-item-action">
                  Logout
                </li>
              </ul>
            </div>
            <div className="col-8 bg-light">{state}</div>
          </div>
        </div>
      </div>
    </>
  );
}
