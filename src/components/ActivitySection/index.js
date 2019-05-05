import React from "react";
import ActivityCard from "../../components/ActivityCard";
import { ActivitySectionStyle } from "./style";

const image_list = [
  // image should be >=3
  "tech-talk",
  "open-class",
  "pekan-ristek",
  "internal-class",
  "ristek-visit",
  "alumni-gath"
];

class ActivitySection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temporary_index: 0,
      card_index: 0,
      screen_width: 0,
      image_number: image_list.length,
      multiplier: 0,
      max_movement: 0,
      ticker: true
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    this.interval = setInterval(() => this.tick(), 4500);
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    clearInterval(this.interval);
  }

  importAll = files => {
    const images = {};
    files.keys().map(item => {
      images[item.replace("./", "")] = files(item);
    });

    return images;
  };

  tick() {
    const state = this.state;
    if (
      (state.card_index < state.max_movement || state.card_index === 0) &&
      state.ticker
    ) {
      this.nextCarousel();
    }

    if (!state.ticker) {
      this.previousCarousel();
    }

    if (state.card_index >= state.max_movement) {
      this.setState({ ticker: false });
    }

    if (state.card_index <= 0) {
      this.setState({ ticker: true });
    }
  }

  updateWindowDimensions() {
    const card_index = this.state.card_index;
    const image_num = card_index > 3 ? card_index - 4 : 0;
    const temporary_index = this.state.temporary_index;

    const current_width = window.innerWidth;
    const multiplier =
      current_width > 1624
        ? 499
        : current_width < 1000 && current_width > 700
        ? 524
        : current_width > 1000 && current_width < 1624
        ? 300
        : 274;
    const index = window.innerWidth > 1000 ? image_num : temporary_index;
    const max_movement =
      window.innerWidth > 1000 ? image_num - 3 : image_num - 1;
    this.setState({
      width: window.innerWidth,
      card_index: index,
      multiplier,
      max_movement
    });
  }

  nextCarousel = () => {
    const state = this.state;
    let index = state.card_index;
    const image_num = state.image_number;
    const max_movement =
      window.innerWidth > 1000 ? image_num - 3 : image_num - 1;
    index = index < max_movement ? index + 1 : index;

    return this.setState({
      card_index: index,
      temporary_index: index,
      max_movement
    });
  };

  previousCarousel = () => {
    const index = this.state.card_index;
    const previous = index > 0 ? index - 1 : 0;

    return this.setState({
      card_index: previous,
      temporary_index: index
    });
  };

  calculateMovement = () => {
    const index = this.state.card_index;

    return index * this.state.multiplier;
  };

  render() {
    const images = this.importAll(
      require.context("../../assets/", false, /\.(png|jpe?g|svg)$/)
    );

    return (
      <ActivitySectionStyle>
        <div className="flex column centerize whole bgWhite ">
          <div className="flex centerize maxWidth topper-text-container ">
            <div className="text-wrapper">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h1> Ristek's Activities</h1>
            </div>
          </div>
          <div className="flex centerize carousel-container">
            <div className="flex carousel-wrapper">
              <div className="flex centerize button-container">
                <div className="button left" onClick={this.previousCarousel} />
              </div>
              <div className="carousel">
                <div
                  className="carousel-wrapper"
                  style={{
                    transform: `translateX(-${this.calculateMovement()}px)`
                  }}
                >
                  {image_list.map(image => (
                    <ActivityCard
                      image={images[`${image}.jpg`]}
                      title={image.replace(/[^a-zA-Z ]/g, " ")}
                      key={{ image }}
                    />
                  ))}
                </div>
              </div>
              <div className="flex centerize button-container">
                <div className="button right" onClick={this.nextCarousel} />
              </div>
            </div>
          </div>
        </div>
      </ActivitySectionStyle>
    );
  }
}

export default ActivitySection;
