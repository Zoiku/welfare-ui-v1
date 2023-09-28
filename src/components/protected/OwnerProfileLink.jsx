import { Link } from "react-router-dom";
import "../../styles/CampaignLink.css";

const OwnerProfileLink = ({ id, label }) => {
  return (
    <Link className="campaign-link" to={`/owner?id=${id}`}>
      <span>{label}</span>
    </Link>
  );
};

export default OwnerProfileLink;
