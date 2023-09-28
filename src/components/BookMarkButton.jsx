import { useState } from "react";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import { IconButton } from "@mui/material";

const BookmarkButton = (props) => {
  const [state, setState] = useState(false);
  const toggle = () => {
    const newState = !state;
    setState(newState);
  };

  return (
    <>
      <IconButton className="book-mark-icon" onClick={toggle}>
        {state ? (
          <BookmarkRoundedIcon {...props} />
        ) : (
          <BookmarkBorderRoundedIcon {...props} />
        )}
      </IconButton>
    </>
  );
};

export default BookmarkButton;
