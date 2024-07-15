import { Link } from "react-router-dom";
import "./featured.css";
const Featured = ({ homeTitleRef }) => {
  return (
    <div className="block block-vinpearl-content block-homepage-exp-block">
      <div className="block-content">
        <div className="exp-block">
          <div className="home-container">
            <h2 className="homepage-tit wow animate__animated animate__fadeInUp">
              Outstanding Location
            </h2>
            <div className="exp-content wow animate__animated animate__fadeInUp">
              <div className="exp-item exp-item-1 _741x500">
                <div className="img-wrapper_1">
                  <img
                    className="img1"
                    src="https://duynhon2106-001-site1.dtempurl.com/Uploads/c1217359-7b4d-4cff-b009-e0d11e016bd6.png"
                    alt=""
                  />
                </div>
                <div className="info-wrapper">
                  <div className="exp-item-tit eb-garamond three_dots_1">
                    New Added Court 🎉
                  </div>
                  <div className="exp-item-des three_dots_1">
                    Bring the best experience!
                  </div>
                  <div className="exp-item-cta">
                    <Link to="/courts" className="eb-garamond three_dots_1">
                      Discovery!
                    </Link>
                  </div>
                </div>
              </div>
              <div className="exp-item exp-item-2 _409x500" ref={homeTitleRef}>
                <div className="img-wrapper_2">
                  <img
                    className="img1"
                    src="https://duynhon2106-001-site1.dtempurl.com/Uploads/7cda1327-8c78-4ab1-985a-c59763f07463.png"
                    alt=""
                  />
                </div>
                <div className="info-wrapper"></div>
              </div>
              <div className="exp-item exp-item-3 _409x500">
                <div className="img-wrapper_2 ">
                  <img
                    className="img2"
                    src="./src/assets/img/image32.png"
                    alt=""
                  />
                </div>
                <div className="info-wrapper">
                  <div className="exp-item-tit eb-garamond three_dots_1">
                    Promotion 😉
                  </div>
                  <div className="exp-item-des three_dots_1">
                    Comfortable space with modern equipment!
                  </div>
                  <div className="exp-item-cta">
                    <Link to="/courts" className="eb-garamond three_dots_1">
                      Discovery!
                    </Link>
                  </div>
                </div>
              </div>
              <div className="exp-item exp-item-4 _741x500">
                <div className="img-wrapper_1">
                  <img
                    className="img2"
                    src="./src/assets/img/image4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
