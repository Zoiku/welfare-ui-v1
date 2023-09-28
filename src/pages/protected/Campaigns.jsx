import "../../styles/Campaigns.css";
import { useEffect, useState } from "react";
import {
  campaigns as campaignsList,
  campaignsSort,
  campaignsViews,
  categories,
} from "../../lists/Campaigns";
import Chip from "@mui/material/Chip";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import Progress from "../../components/Progress";
import campaignImageSrc from "../../assets/campaign bg/larm-rmah-AEaTUnvneik-unsplash.jpg";
import { arraySum } from "../../functions/Misc";
import { filtering } from "../../functions/Filtering";
import nodata from "../../assets/misc/no data.svg";
import CampaignLink from "../../components/protected/CampaignLink";
import OwnerProfileLink from "../../components/protected/OwnerProfileLink";
import { ArrowDropDown } from "@mui/icons-material";
import Menu from "../../components/Menu";

const CampaignItem = ({
  id,
  imageSrc,
  deadline,
  title,
  owner,
  donors,
  expected,
  recieved,
}) => {
  return (
    <div className="campaign-item">
      <div className="campaign-item-image">
        <img src={imageSrc} alt={title} />
      </div>
      <div className="campaign-item-body">
        <div className="campaign-item-body-inner">
          <div className="campaign-item-meta">
            <div className="campaign-item-title">
              <CampaignLink label={title} id={id} />
            </div>
            <div className="campaign-item-owner">
              <OwnerProfileLink label={owner} id={1} />
            </div>
          </div>
          <div className="campaign-progress">
            <Progress
              donors={donors}
              expected={expected}
              received={recieved}
              deadline={deadline}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const CampaignResultsMenuButton = ({ handleClickMenu, selected }) => (
  <div onClick={handleClickMenu} className="campaign-results-menu-button">
    <span>{selected}</span>
    <ArrowDropDown fontSize="inherit" />
  </div>
);
const CampaignResultItems = ({ label, children }) => (
  <div className="campaign-result-item">
    <div className="campaign-result-item-label">{label}</div>
    <div className="campaign-result-item-body">{children}</div>
  </div>
);
const Campaigns = () => {
  const [campaigns, setCampaigns] = useState(campaignsList);
  const urlParams = new URLSearchParams(window.location.search);
  const filterID = urlParams.get("filter")
    ? parseInt(urlParams.get("filter"))
    : null;
  const [selectedFilter, setSelectedFilter] = useState(filterID);
  const handleSelectFilter = (index) => () => {
    if (index === selectedFilter) {
      setSelectedFilter(null);
    } else {
      setSelectedFilter(index);
    }
  };
  const [selectedCampaignType, setSelectCampaignType] = useState(0);
  const handleSelectCampaignType = (index) => () => {
    setSelectCampaignType(index);
    setCampaignTypeMenuAnchorEl(null);
  };
  const [campaignTypeMenuAnchorEl, setCampaignTypeMenuAnchorEl] =
    useState(null);
  const openShowCampaignTypeMenu = Boolean(campaignTypeMenuAnchorEl);
  const handleClickCampaignTypeMenu = (event) => {
    setCampaignTypeMenuAnchorEl(event.currentTarget);
  };
  const handleCloseCampaignTypeMenu = () => {
    setCampaignTypeMenuAnchorEl(null);
  };
  const [selectedSort, setSelectedSort] = useState(0);
  const handleSelectSort = (index) => () => {
    setSelectedSort(index);
    setSortMenuAnchorEl(null);
  };
  const [sortMenuAnchorEl, setSortMenuAnchorEl] = useState(null);
  const openSortMenu = Boolean(sortMenuAnchorEl);
  const handleClickSortMenu = (event) => {
    setSortMenuAnchorEl(event.currentTarget);
  };
  const handleCloseSortMenu = () => {
    setSortMenuAnchorEl(null);
  };
  useEffect(() => {
    const filteredCampaigns = filtering(campaignsList, selectedFilter);
    setCampaigns(filteredCampaigns);
  }, [selectedFilter]);

  return (
    <main className="campaigns-page">
      <div className="campaign-filter-container">
        <div className="campaign-filter-rows">
          {categories.map((category, index) => (
            <Chip
              key={index}
              label={category}
              variant="outlined"
              className={
                selectedFilter === index
                  ? "campaign-filter campaign-filter-selected"
                  : "campaign-filter"
              }
              onDelete={
                selectedFilter === index ? handleSelectFilter(index) : undefined
              }
              onClick={handleSelectFilter(index)}
              deleteIcon={
                <DeleteForeverRoundedIcon className="campaing-filter-delete-icon" />
              }
            />
          ))}
        </div>
      </div>

      <div className="campaign-items-section">
        {campaigns ? (
          campaigns.length > 0 ? (
            <div className="campaign-items-container">
              <div className="campaign-results-meta">
                <CampaignResultItems label={"View"}>
                  <CampaignResultsMenuButton
                    handleClickMenu={handleClickCampaignTypeMenu}
                    selected={campaignsViews[selectedCampaignType].label}
                  />
                </CampaignResultItems>
                <CampaignResultItems label={"Sort by"}>
                  <CampaignResultsMenuButton
                    handleClickMenu={handleClickSortMenu}
                    selected={campaignsSort[selectedSort].label}
                  />
                </CampaignResultItems>
              </div>
              <div className="campaign-items">
                {campaigns
                  .sort((a, b) => campaignsSort[selectedSort].action(a, b))
                  .map((campaign, index) => (
                    <CampaignItem
                      key={index}
                      deadline={campaign.deadline}
                      id={campaign.id}
                      title={campaign.title}
                      owner={campaign.owner}
                      donors={campaign.donations.length}
                      expected={campaign.requested}
                      imageSrc={campaignImageSrc}
                      recieved={arraySum(
                        campaign.donations.map((donation) => donation.amount)
                      )}
                    />
                  ))}
              </div>
            </div>
          ) : (
            <div className="campaign-items-404">
              <div className="campaign-items-404-image">
                <img src={nodata} alt="" />
              </div>
            </div>
          )
        ) : (
          <div className="campaign-items-404">
            <div className="campaign-items-404-image">
              <img src={nodata} alt="" />
            </div>
          </div>
        )}
      </div>
      <Menu
        position={"left"}
        open={openShowCampaignTypeMenu}
        anchorEl={campaignTypeMenuAnchorEl}
        onClose={handleCloseCampaignTypeMenu}
      >
        {campaignsViews.map((view, index) => (
          <div
            onClick={handleSelectCampaignType(index)}
            key={index}
            className={
              index === selectedCampaignType
                ? "menu-item menu-item-selected"
                : "menu-item"
            }
          >
            {view.label}
          </div>
        ))}
      </Menu>
      <Menu
        position={"left"}
        open={openSortMenu}
        anchorEl={sortMenuAnchorEl}
        onClose={handleCloseSortMenu}
      >
        {campaignsSort.map((sort, index) => (
          <div
            onClick={handleSelectSort(index)}
            key={index}
            className={
              index === selectedSort
                ? "menu-item menu-item-selected"
                : "menu-item"
            }
          >
            {sort.label}
          </div>
        ))}
      </Menu>
    </main>
  );
};

export default Campaigns;
