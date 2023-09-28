import { Link } from "react-router-dom";
import "../../styles/CampaignLink.css";

const CampaignLink = ({ id, label, shortend }) => {
  return (
    <Link
      className={
        shortend ? "campaign-link campaign-link-shortened" : "campaign-link"
      }
      to={`/campaign?id=${id}`}
    >
      {label}
    </Link>
  );
};

export default CampaignLink;
