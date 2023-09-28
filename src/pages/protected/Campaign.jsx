import "../../styles/Campaign.css";
import { campaigns } from "../../lists/Campaigns";
import { Avatar, AvatarGroup, Chip } from "@mui/material";
import Button from "../../components/Button";
import Number from "../../components/Number";
import BookmarkImage from "../../components/BookmarkImage";
import { arraySum, difference } from "../../functions/Misc";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
import TrackChangesRoundedIcon from "@mui/icons-material/TrackChangesRounded";
import OwnerProfileLink from "../../components/protected/OwnerProfileLink";
import CountdownTimer from "../../components/CountdownTimer";

const CampaignProgressTracker = ({ icon, label, value }) => (
  <div className="campaign-progress-tracker">
    <div className="campaign-progress-tracker-inner">
      <div className="campaign-progress-tracker-icon">{icon}</div>
    </div>
    <div className="campaign-progress-tracker-inner campaign-progress-tracker-meta">
      <div className="campaign-progress-tracker-label">{label}</div>
      <div className="campaign-progress-tracker-value">
        $<Number value={value} currency />
      </div>
    </div>
  </div>
);

const Campaign = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const campaignID = urlParams.get("id") ? parseInt(urlParams.get("id")) : null;
  const campaign = campaigns.find((campaign) => campaign.id === campaignID);

  return (
    <main className="campaign-page">
      <div className="campaign-image">
        <BookmarkImage src={campaign.imageSrc} alt="" />
      </div>
      <div className="campaign-title">{campaign.title}</div>
      <div className="campaign-donors">
        <div className="campaign-donors-avatar-group-container">
          <div className="campaign-donors-inner campaign-donors-avatar-group">
            <AvatarGroup max={4}>
              {campaign.donations.map((_, index) => (
                <Avatar key={index} />
              ))}
            </AvatarGroup>
          </div>
          <div className="campaign-donors-inner campaign-donors-label">
            <div>{campaign.donations.length} Donations</div>
          </div>
        </div>
        <div>
          <Chip
            className="campaign-time-remaining"
            label={
              <div>
                <CountdownTimer deadline={campaign.deadline} /> Days remaining
              </div>
            }
          />
        </div>
      </div>
      <div className="campaign-owner">
        By <OwnerProfileLink label={campaign.owner} id={1} />
      </div>
      <div className="campaign-about">{campaign.about}</div>
      <div className="campaign-progress-trackers">
        <CampaignProgressTracker
          icon={<ModeStandbyIcon fontSize="inherit" />}
          label={"Target"}
          value={campaign.requested}
        />
        <CampaignProgressTracker
          icon={<TrackChangesRoundedIcon fontSize="inherit" />}
          label={"Remaning"}
          value={difference(
            campaign.requested,
            arraySum(campaign.donations.map((donation) => donation.amount))
          )}
        />
      </div>
      <div>
        <Button label={"Donate"} theme={"010"} variant={"contained"} />
      </div>
    </main>
  );
};

export default Campaign;
