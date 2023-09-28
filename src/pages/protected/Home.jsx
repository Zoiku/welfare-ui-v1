import "../../styles/ClientHome.css";
import education from "../../assets/card images/graduation hats-rafiki.svg";
import housing from "../../assets/card images/Houses-cuate.svg";
import medicalaid from "../../assets/card images/Hospital building-cuate.svg";
import employment from "../../assets/card images/Hiring-cuate.svg";
import Progress from "../../components/Progress";
import Marquee from "react-fast-marquee";
import { campaigns } from "../../lists/Campaigns";
import { arraySum, getRandomElementFromArray } from "../../functions/Misc";
import { Link, useNavigate } from "react-router-dom";
import BookmarkImage from "../../components/BookmarkImage";
import CampaignLink from "../../components/protected/CampaignLink";
import Slider from "../../components/Slider";
import OwnerProfileLink from "../../components/protected/OwnerProfileLink";

export const ClientHomeSection = ({
  children,
  title,
  titleHelper,
  titleHelperLink,
}) => (
  <div className="client-home-section">
    <div className="client-home-section-title">
      <div className="client-home-section-title-text">{title}</div>
      {titleHelper && titleHelperLink && (
        <Link className="client-home-section-title-helper" to={titleHelperLink}>
          {titleHelper}
        </Link>
      )}
    </div>
    <div className="client-home-section-body">{children}</div>
  </div>
);

export const CampaignOfTheDay = ({
  id,
  title,
  imageSrc,
  donors,
  expected,
  raised,
  about,
  owner,
}) => (
  <div className="campaign-of-the-day-card">
    <div className="campaign-of-the-day-card-inner campaign-of-the-day-card-image">
      <BookmarkImage src={imageSrc} />
    </div>
    <div className="campaign-of-the-day-card-inner campaign-of-the-day-card-body">
      <div className="campaign-of-the-day-card-title">
        <CampaignLink id={id} label={title} />
      </div>
      <div className="campaign-of-the-day-card-body-inner">
        <div className="campaign-of-the-day-about">
          <div className="campaign-of-the-day-about-owner">
            <OwnerProfileLink id={1} label={owner} />
          </div>
          <div className="campaign-of-the-day-about-body">{about}</div>
        </div>
        <div className="campaign-of-the-day-progress">
          <Progress
            donors={donors}
            expected={expected}
            received={raised}
            deadline={new Date()}
          />
        </div>
      </div>
    </div>
  </div>
);

const WelfareCategoryCard = ({ id, imageSrc, label }) => {
  const navigate = useNavigate();
  const navigateTo = (id) => () => navigate(`/campaigns?filter=${id}`);
  return (
    <div onClick={navigateTo(id)} className="welfare-category">
      <div className="welfare-category-image">
        <img src={imageSrc} alt="" />
      </div>
      <div className="welfare-category-label">
        <div className="welfare-category-label-text">{label}</div>
      </div>
    </div>
  );
};

export const CampaignCard = ({
  id,
  imageSrc,
  title,
  donors,
  expected,
  owner,
  recieved,
  deadline,
}) => {
  return (
    <div className="campaign-card">
      <div className="campaign-card-image">
        <BookmarkImage src={imageSrc} alt={title} />
      </div>
      <div className="campaign-card-body">
        <div className="campaign-card-body-title">
          <CampaignLink shortend label={title} id={id} />
        </div>
        <div className="campaign-card-body-owner">
          <OwnerProfileLink label={owner} id={1} />
        </div>
        <div className="campaign-card-body-progress">
          <Progress
            donors={donors}
            expected={expected}
            received={recieved}
            deadline={deadline}
          />
        </div>
      </div>
    </div>
  );
};

const ClientHome = () => {
  const campaignOfTheDay = getRandomElementFromArray(campaigns);

  return (
    <main className="client-home-page">
      <div className="client-home-page-inner">
        <div className="dashboad-sections">
          <ClientHomeSection title={"Campaign of the Day"}>
            <CampaignOfTheDay
              id={campaignOfTheDay.id}
              title={campaignOfTheDay.title}
              imageSrc={campaignOfTheDay.imageSrc}
              donors={campaignOfTheDay.donations.length}
              expected={campaignOfTheDay.requested}
              owner={campaignOfTheDay.owner}
              raised={arraySum(
                campaignOfTheDay.donations.map((donation) => donation.amount)
              )}
              about={campaignOfTheDay.about}
            />
          </ClientHomeSection>

          <ClientHomeSection
            title={"Categories"}
            titleHelper={"See all"}
            titleHelperLink={"/campaigns"}
          >
            <div className="welfare-categories">
              <WelfareCategoryCard
                id={3}
                label={"Healthcare"}
                imageSrc={medicalaid}
              />
              <WelfareCategoryCard
                id={2}
                label={"Unemployment"}
                imageSrc={employment}
              />
              <WelfareCategoryCard
                id={1}
                label={"Education"}
                imageSrc={education}
              />
              <WelfareCategoryCard
                id={0}
                label={"Housing"}
                imageSrc={housing}
              />
            </div>
          </ClientHomeSection>

          <ClientHomeSection
            title={"Your Bookmarks"}
            titleHelper={"See All"}
            titleHelperLink={"/campaigns?show=1"}
          >
            <div className="campaign-bookmarked-cards desktop-view">
              <Slider
                className={"campaign-cards"}
                slidesPerView={3}
                slides={campaigns.slice(0, 3).map((campaign, index) => (
                  <CampaignCard
                    key={index}
                    deadline={campaign.deadline}
                    owner={campaign.owner}
                    id={campaign.id}
                    title={campaign.title}
                    imageSrc={campaign.imageSrc}
                    donors={campaign.donations.length}
                    expected={campaign.requested}
                    recieved={arraySum(
                      campaign.donations.map((donation) => donation.amount)
                    )}
                  />
                ))}
              />
            </div>
            <div className="campaign-bookmarked-cards mobile-view">
              <Slider
                className={"campaign-cards"}
                slidesPerView={1}
                slides={campaigns.slice(0, 3).map((campaign, index) => (
                  <CampaignCard
                    key={index}
                    id={campaign.id}
                    title={campaign.title}
                    imageSrc={campaign.imageSrc}
                    donors={campaign.donations.length}
                    expected={campaign.requested}
                    deadline={campaign.deadline}
                    recieved={arraySum(
                      campaign.donations.map((donation) => donation.amount)
                    )}
                  />
                ))}
              />
            </div>
          </ClientHomeSection>

          <ClientHomeSection
            title={"Trending Campaigns"}
            titleHelper={"See all"}
            titleHelperLink={"/campaigns?sort=trending"}
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
    </main>
  );
};

export default ClientHome;
