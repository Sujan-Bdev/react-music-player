import React from "react";
import { Button, Space, Carousel } from "antd";
import { AiFillHeart, AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const TrendingHits = () => {
  const carouselSetting = {
    autoplay: true,
    dotPosition: "right",
    effect: "fade",
    dots: true,
    arrows: true,
    nextArrow: <AiOutlineDown  fill = "black"/>,
    prevArrow: <AiOutlineUp  fill = "black" />,
  };
  return (
    <div className="container">
      <div className="home__trending-list">
        <h3 className="home__trending--title">Trending New Hits</h3>
        <Carousel {...carouselSetting}>
          <div className="trending-song">
            <h1 className="trending-song__title">The Havana</h1>
            <h3 className="trending-song__artist">Camila Cabello</h3>
            <Space>
              <Button type="primary" shape="round">
                {" "}
                Listen Now{" "}
              </Button>
              <Button shape="circle" icon={<AiFillHeart />} />
            </Space>
          </div>

          <div className="trending-song">
            <h1 className="trending-song__title">Perfect</h1>
            <h3 className="trending-song__artist">Ed Sheeran</h3>
            <Space>
              <Button type="primary" shape="round">
                {" "}
                Listen Now{" "}
              </Button>
              <Button type="ghost" shape="circle" icon={<AiFillHeart />} />
            </Space>
          </div>

          <div className="trending-song">
            <h1 className="trending-song__title">SunFlower</h1>
            <h3 className="trending-song__artist">Post Malone</h3>
            <Space>
              <Button type="primary" shape="round">
                {" "}
                Listen Now{" "}
              </Button>
              <Button type="ghost" shape="circle" icon={<AiFillHeart />} />
            </Space>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TrendingHits;
