import { ShareLink,DownArrow } from "../icons";
import "../styles/header.css";

export function Header() {
  return (
    <header className="header-container">
      <h1>Company Logo</h1>
      <div>
        <div className="button-container">
          <button className="button">
            Menu
            <DownArrow />
          </button>
          <button className="button">Contact Us</button>
          <button className="share-link">
            <ShareLink /> Share Link
          </button>
        </div>
      </div>
    </header>
  );
}
