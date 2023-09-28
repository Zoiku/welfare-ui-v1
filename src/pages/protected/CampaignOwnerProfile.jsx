import "../../styles/CampaignOwnerProfile.css";
import { Avatar } from "@mui/material";
import { CampaignOfTheDay, ClientHomeSection, CampaignCard } from "./Home";
import CampaignOfTheDayImage from "../../assets/campaign bg/larm-rmah-AEaTUnvneik-unsplash.jpg";
import Marquee from "react-fast-marquee";
import { campaigns } from "../../lists/Campaigns";
import { arraySum } from "../../functions/Misc";
import Slider from "../../components/Slider";
import { ReactComponent as VerifiedAccount } from "../../components/svgs/twitter-verified-badge.svg";
import Number from "../../components/Number";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";

const CampaignDashboardItem = ({ icon, label, value, currency }) => (
  <div className="campaign-owner-dashboard-item">
    <div className="campaign-owner-dashboard-icon-container">{icon}</div>
    <div className="campaign-owner-dashboard-meta">
      <div className="campaign-owner-dashboard-meta-label">{label}</div>
      <div className="campaign-owner-dashboard-meta-value">
        {" "}
        {currency && "$"} {value}
      </div>
    </div>
  </div>
);

const CampaignOwnerProfile = () => {
  return (
    <div className="campaign-owner-profile-page">
      <div className="campaign-owner-profile-info">
        <div className="campaign-owner-avatar-container">
          <Avatar className="campaign-owner-avatar">J</Avatar>
        </div>
        <div className="campaign-owner-meta">
          <div className="campaign-owner-name-checkmark">
            <span className="campaign-owner-name">John Doe</span>
            <span className="campaign-owner-checkmark">
              <VerifiedAccount
                className="campaign-owner-checkmark-svg"
                style={{ width: 20, height: 20 }}
              />
            </span>
          </div>
          <div className="campaign-owner-account-type">Individual</div>
          <div className="campaign-owner-location">Ghana</div>
        </div>
      </div>

      <div className="campaign-owner-dashboard">
        <div className="desktop-view">
          <div className="campaign-owner-dasboard-items">
            <CampaignDashboardItem
              icon={
                <BarChartRoundedIcon className="campaign-owner-dashboard-icon" />
              }
              label={"Total Campaigns"}
              value={20}
            />
            <CampaignDashboardItem
              currency
              icon={
                <TimelineRoundedIcon className="campaign-owner-dashboard-icon" />
              }
              label={"Generated Donation"}
              value={<Number value={1000} currency />}
            />
            <CampaignDashboardItem
              currency
              icon={
                <AutoGraphRoundedIcon className="campaign-owner-dashboard-icon" />
              }
              label={"Total Contribution"}
              value={<Number value={2000} currency />}
            />
          </div>
        </div>

        <div className="mobile-view">
          <Slider
            slides={[
              <CampaignDashboardItem
                icon={
                  <BarChartRoundedIcon className="campaign-owner-dashboard-icon" />
                }
                label={"Total Campaigns"}
                value={50}
              />,
              <CampaignDashboardItem
                icon={
                  <TimelineRoundedIcon className="campaign-owner-dashboard-icon" />
                }
                label={"Generated Donation"}
                value={<Number value={1000} currency />}
              />,
              <CampaignDashboardItem
                icon={
                  <AutoGraphRoundedIcon className="campaign-owner-dashboard-icon" />
                }
                label={"Total Contribution"}
                value={<Number value={1000} currency />}
              />,
            ]}
          />
        </div>
      </div>

      <div>
        <ClientHomeSection title={"Current Campaign"}>
          <CampaignOfTheDay
            id={1}
            title={"Help John Doe pursue a Master's Education"}
            imageSrc={CampaignOfTheDayImage}
            donors={10}
            expected={2000}
            raised={1000}
            about={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi numquam minima non reiciendis nesciunt maxime, rem optio ullam accusantium ratione officiis sit sunt ad excepturi mollitia ex facilis quia. Aperiam numquam animi tempora quasi, quibusdam deserunt corporis. Sunt consequatur asperiores dignissimos odio voluptatibus quibusdam eum sequi corporis saepe aliquam! Iste!"
            }
          />
        </ClientHomeSection>
      </div>
      <div>
        <ClientHomeSection
          title={"Latest Campaigns"}
          titleHelper={"See All"}
          titleHelperLink={"/campaigns?owner=1"}
        >
          <Marquee
            className="campaign-cards trending-cards"
            speed={20}
            gradient={false}
            pauseOnHover
          >
            {campaigns.map((campaign, index) => (
              <CampaignCard
                key={index}
                owner={campaign.owner}
                id={campaign.id}
                deadline={campaign.deadline}
                title={campaign.title}
                imageSrc={campaign.imageSrc}
                donors={campaign.donations.length}
                expected={campaign.requested}
                recieved={arraySum(
                  campaign.donations.map((donation) => donation.amount)
                )}
              />
            ))}
          </Marquee>
        </ClientHomeSection>
      </div>
    </div>
  );
};

export default CampaignOwnerProfile;
