import "../styles/Progress.css";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import WorkspacesRoundedIcon from "@mui/icons-material/WorkspacesRounded";
import QueryBuilderRoundedIcon from "@mui/icons-material/QueryBuilderRounded";
import { styled } from "@mui/material/styles";
import Number from "./Number";
import CountdownTimer from "../components/CountdownTimer";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 5,
  borderRadius: 1,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "var(--bg-gray-5)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 1,
    backgroundColor: "var(--bg-green-10)",
  },
}));

const ProgressBarFooterItem = ({ icon, value, label }) => (
  <div className="progress-bar-footer-item green-key">
    <div className="progress-bar-footer-item-icon">{icon}</div>
    <div className="progress-bar-footer-item-value">
      <span>{value}</span> <span>{label}</span>
    </div>
  </div>
);

const ProgressBarFooter = ({ donors, deadline }) => (
  <div className="progress-bar-footer">
    <ProgressBarFooterItem
      label={"Donors"}
      icon={<WorkspacesRoundedIcon fontSize="inherit" />}
      value={donors}
    />
    <ProgressBarFooterItem
      label={"Days remaining"}
      icon={<QueryBuilderRoundedIcon fontSize="inherit" />}
      value={<CountdownTimer deadline={deadline} />}
    />
  </div>
);

const Progress = ({ expected, received, donors, deadline }) => {
  const progress = parseInt((received / expected) * 100);

  return (
    <div className="progress-container">
      <div className="progress-text black-key">
        <span>
          $<Number value={received} currency />
        </span>{" "}
        from{" "}
        <span>
          $<Number value={expected} currency />
        </span>{" "}
        raised{" "}
        <span>
          (<Number value={progress} percentage />)
        </span>
      </div>
      <div>
        <BorderLinearProgress variant="determinate" value={progress} />
      </div>

      <div>
        <ProgressBarFooter donors={donors} deadline={deadline} />
      </div>
    </div>
  );
};

export default Progress;
