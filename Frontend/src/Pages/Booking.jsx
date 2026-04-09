import { useLocation } from "react-router-dom";
import BookingForm from "../Components/BookingForm/BookingForm";
function Booking(){
 const location = useLocation();
  const product = location.state;
  return (
    <BookingForm/>
  );
}


export default Booking;