import "./index.css";
import { useNavigate, Link } from "react-router-dom";

const LockedCapsule = () => {

const navigate = useNavigate();

return(
       <div>
               <div class="lc-capsule-card">
                    <div class="lc-capsule-status">waiting</div>
                    <h3 class="lc-capsule-title">My 2026 Goals</h3>
                    <div class="lc-capsule-date">Opens January 1, 2026</div>
                    <p class="lc-capsule-preview">"A message to my future self"</p>
                    <div class="lc-capsule-location">Lebanon, Saida</div>
                    <div class="lc-capsule-meta">
                        <span>Time remaining</span>
                    </div>
                    <div class="lc-capsule-meta">
                        <span>179 days</span>
                        <span>11 hours</span>
                        <span>46 minutes</span>
                    </div>
                        <div class="lc-capsule-actions">
                        <button class="lc-capsule-btn">Delete</button>
                </div>
                 </div>
        </div>
     
    );
 };

 export default LockedCapsule;
