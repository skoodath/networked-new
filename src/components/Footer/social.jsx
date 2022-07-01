import React from "react";
import {
  SocialLinks,
  SocialItems,
  TwitterIcon,
  LinkedIcon,
  InstaIcon,
  VimeoIcon,
} from "../../styles/footer.style";

const SocialMedia = () => {
  return (
    <SocialLinks>
      <SocialItems>
        <li>
          <a
            href="https://twitter.com/networkED_in"
            title="Click to visit Network Ed Twitter page"
          >
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/networkedkids/"
            title="Click to visit Network Ed Instagram page"
          >
            <InstaIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/networkedkids"
            title="Click to visit Network Ed LinkedIn page"
          >
            <LinkedIcon />
          </a>
        </li>
        <li>
          <a href="/credit" title="Click to visit Network Ed Vimeo page">
            <VimeoIcon />
          </a>
        </li>
      </SocialItems>
    </SocialLinks>
  );
};

export default SocialMedia;
