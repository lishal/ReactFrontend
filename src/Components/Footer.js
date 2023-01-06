import React from "react";

export default function Footer() {
  let date = new Date();
  date = date.getFullYear();

  return (
    <div className="footer_watford">
      <div className="footer_img">
        <img
          src={process.env.PUBLIC_URL + "/Images/footer.jpg"}
          alt="Watford Footer"
          className="w-100 bg-image hover-overlay"
        />
      </div>
      <div className="footer-overlay-front">
        <div className="footer_layer1 row mx-3">
            <div className="footer_section1 fs-5 fw-bolder col md-3 my-3">
                Watford Community
            </div>
            <div className="footer_section2 col md-3 my-3">
                <div className="footer_section_header fs-5 fw-bolder my-3 mx-4">
                    Social Media
                </div>
                <ul >
                  <a href="" className="my-1"><li>Facebook</li></a>
                  <a href="" className="my-1"><li>Instagram</li></a>
                  <a href="" className="my-1"><li>Google</li></a>
                </ul>
            </div>
            <div className="footer_section3 col md-3 my-3">
              <div className="footer_section_header fs-5 fw-bolder my-3 mx-4">
                Powered By:
              </div>
                <ul>
                  <a className="my-1" href="mailto:lbhari188@gmail.com"><li>Lishal Bhari</li></a>
                  <a className="my-1" href="mailto:lbhari188@gmail.com"><li>Nitesh Sah</li></a>
                </ul>
            </div>
        </div>
        <div className="footer_layer2 col text-center fs-6 fw-bolder d-flex align-items-center">
          Copyright © {date} - All Rights Protected!
        </div>
      </div>
    </div>
  );
}
