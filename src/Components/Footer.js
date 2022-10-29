import React from "react";

const Footer = () => {
  return (
    <div>
      <Footer container={true}>
        <Footer.Copyright to="/" by="NextCoder" year={2022} />
        <Footer.LinkGroup>
          <Footer.Link>About</Footer.Link>
          <Footer.Link>Privacy Policy</Footer.Link>
          <Footer.Link>Licensing</Footer.Link>
          <Footer.Link>Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
};

export default Footer;
