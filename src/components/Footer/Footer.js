import "./Footer.scss";
import { ReactComponent as YoutubeSVG } from "../../assets/yt.svg";
import { ReactComponent as InstagramSVG } from "../../assets/ig.svg";
import { ReactComponent as TwitterSVG } from "../../assets/twtr.svg";
import { ReactComponent as FacebookSVG } from "../../assets/fb.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className="footer-list">
            <div className="heading">Elite Gym</div>
            <div className="list">
              <a className="footer-link">About Us</a>
              <a className="footer-link">Awards</a>
              <a className="footer-link">Contact Us</a>
            </div>
          </div>
          <div className="footer-list">
            <div className="heading">Facilities</div>
            <div className="list">
              <a className="footer-link">Find Facilities</a>
              <a className="footer-link">Membership rules</a>
              <a className="footer-link">Gym Opening Times</a>
            </div>
          </div>
          <div className="footer-list">
            <div className="heading">Corporate</div>
            <div className="list">
              <a className="footer-link">Become a Franchisee</a>
              <a className="footer-link">Corporate Membership</a>
              <a className="footer-link">Property Information</a>
              <a className="footer-link">Careers</a>
              <a className="footer-link">Press</a>
            </div>
          </div>
          <div className="footer-list">
            <div className="heading">Legal</div>
            <div className="list">
              <a className="footer-link">Membership Agreement</a>
              <a className="footer-link">Accessibility</a>
              <a className="footer-link">Health & Safety</a>
              <a className="footer-link">Privacy & Cookie Policy</a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="copyright">
            &copy; Elite Gym 2022. All Rights Reserved.
          </div>
          <div className="socials">
            <a>
              <YoutubeSVG />
            </a>
            <a>
              <InstagramSVG />
            </a>
            <a>
              <FacebookSVG />
            </a>
            <a>
              <TwitterSVG />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
