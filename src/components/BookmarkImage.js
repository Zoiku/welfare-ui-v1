import "../styles/BookmarkImage.css";
import BookmarkButton from "./BookMarkButton";

const BookmarkImage = (props) => {
    return (
        <div className="book-mark-image-component">
            <BookmarkButton color="inherit" fontSize="inherit" />
            <img alt={props.alt} {...props} />
        </div>
    )
}

export default BookmarkImage