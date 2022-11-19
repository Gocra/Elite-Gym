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
              <a className="footer-link" href="">
                About Us
              </a>
              <a className="footer-link" href="">
                Awards
              </a>
              <a className="footer-link" href="">
                Contact Us
              </a>
            </div>
          </div>
          <div className="footer-list">
            <div className="heading">Facilities</div>
            <div className="list">
              <a className="footer-link" href="">
                Find Facilities
              </a>
              <a className="footer-link" href="">
                Membership rules
              </a>
              <a className="footer-link" href="">
                Gym Opening Times
              </a>
            </div>
          </div>
          <div className="footer-list">
            <div className="heading">Corporate</div>
            <div className="list">
              <a className="footer-link" href="">
                Become a Franchisee
              </a>
              <a className="footer-link" href="">
                Corporate Membership
              </a>
              <a className="footer-link" href="">
                Property Information
              </a>
              <a className="footer-link" href="">
                Careers
              </a>
              <a className="footer-link" href="">
                Press
              </a>
            </div>
          </div>
          <div className="footer-list">
            <div className="heading">Legal</div>
            <div className="list">
              <a className="footer-link" href="">
                Membership Agreement
              </a>
              <a className="footer-link" href="">
                Accessibility
              </a>
              <a className="footer-link" href="">
                Health & Safety
              </a>
              <a className="footer-link" href="">
                Privacy & Cookie Policy
              </a>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="copyright">&copy; Elite Gym 2022</div>
          <div className="socials">
            <a href="">
              <YoutubeSVG />
            </a>
            <a href="">
              <InstagramSVG />
            </a>
            <a href="">
              <FacebookSVG />
            </a>
            <a href="">
              <TwitterSVG />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
