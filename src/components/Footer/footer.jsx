import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

export default function footer() {
  return (
    <footer class="site-footer clearfix">
      <div class="footer-social">
        <ul class="footer-social-links">
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:rima.linaburgyte@gmail.com">
              rima.linaburgyte@gmail.com
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            <a href="callto:+37061382253">
              +37061382253
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <a href="#">
              Vilnius, Lithuania
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rima-linaburgytė-a08586b0" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
