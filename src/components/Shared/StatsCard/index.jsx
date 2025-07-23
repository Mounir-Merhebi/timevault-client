import "./index.css";
import { useNavigate, Link } from "react-router-dom";

const StatsCard = ({status, number, username}) => {

const navigate = useNavigate();

return(
    <> 
      <div class="db-stat-card">
         <div class="db-stat-label">{status}</div>
         <div class="db-stat-number">{number}</div>
      </div>
     </>
            
    );
 };

 export default StatsCard;
