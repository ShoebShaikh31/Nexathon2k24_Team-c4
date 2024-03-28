import React from "react";
import { useParams } from "react-router-dom";

const formatPrice = (price) => {
  if (price.toString().length === 7) {
    return `${(price / 100000).toFixed(2)} Lacs`;
  } else if (price.toString().length === 8) {
    return `${(price / 10000000).toFixed(2)} Crore`;
  } else {
    return price;
  }
};

const FlatDetail = () => {
  const { slug } = useParams();

  const flatDetails = [
    {
      name: "JP Codename Highway Touch",
      price: 9900000,
      location: "Andheri East",
      "images-links":
        "https://assets.nobroker.in/media/building/8a9fdc8284b364740184b39a07de2c72/images/8a9fdc8284b364740184b39a07de2c72_project_image_aKBFrsqM1c1697458927664_68835_iris_medium.jpg",
      slug: "jp-codename-highway-touch",
    },
    {
      name: "Lodha Woods",
      price: 21400000,
      location: "Kandivali East",
      "images-links":
        "https://is1-3.housingcdn.com/4f2250e8/1dc9872e11eeb865cc9fbc4d8dc01cc7/v0/medium/lodha_woods-kandivali_east-mumbai-lodha_group.jpeg",
      slug: "lodha-woods",
    },
    {
      name: "Empire Towers",
      price: 12100000,
      location: "Goregaon East",
      "images-links":
        "https://lh3.googleusercontent.com/Me5xMe3HkFQ0oSee7cNVEVk3xdMtym86q9NjOxOHVh1a8UoKgjppW31G3Z4D0ELLGScYtHwR2YNPdn3TQMxS=w3840-h3840-c-rw-v3",
      slug: "empire-towers",
    },
    {
      name: "JP North Barcelona",
      price: 6848000,
      location: "Mira Road",
      "images-links":
        "https://is1-3.housingcdn.com/4f2250e8/50b5aa03a9892ed10dea9b1df9c1f41e/v0/medium/jp_north_barcelona-mira_road_east-mumbai-jp_infra_%28mumbai%29_pvt_ltd.jpg",
      slug: "jp-north-barcelona",
    },
    {
      name: "Shapoorji Pallonji The Canvas Residences",
      price: 22033496,
      location: "Sewri",
      "images-links":
        "https://static.squareyards.com/resources/images/mu…lonji-the-canvas-residences-project-flagship1.jpg",
      slug: "shapoorji-pallonji-the-canvas-residences",
    },
    {
      name: "GHP Mars Suncity",
      price: 11038000,
      location: "Powai",
      "images-links":
        "https://static.squareyards.com/resources/images/mumbai/tn-projectflagship/tn-ghp-mars-suncity-project-flagship1.jpg",
      slug: "ghp-mars-suncity",
    },
    {
      name: "Shapoorji Pallonji Virar Palm Grove",
      price: 5686000,
      location: "Virar West",
      "images-links":
        "https://static.squareyards.com/resources/images/mumbai/tn-projectflagship/tn-shapoorji-pallonji-virar-palm-grove-project-flagship1.jpg",
      slug: "shapoorji-pallonji-virar-palm-grove",
    },
    {
      name: "Lodha Vikhroli",
      price: 15300000,
      location: "Vikhroli West",
      "images-links":
        "https://static.squareyards.com/resources/images/mumbai/tn-projectflagship/tn-lodha-vikhroli-project-flagship1.jpg",
      slug: "lodha-vikhroli",
    },
    {
      name: "Paradigm Antalya",
      price: 8600000,
      location: "Oshiwara",
      "images-links":
        "https://static.squareyards.com/resources/images/mumbai/tn-projectflagship/tn-paradigm-antalya-project-flagship1-1129.jpg",
      slug: "paradigm-antalya",
    },
    {
      name: "Chandak 34 Park Estate",
      price: 12500000,
      location: "Goregaon West",
      "images-links":
        "https://static.squareyards.com/resources/images/mumbai/tn-projectflagship/tn-chandak-34-park-estate-project-flagship1.jpg",
      slug: "chandak-34-park-estate",
    },
    {
      name: "Origin Wisteria Square",
      price: 6500000,
      location: "Mira Road",
      "images-links":
        "https://static.squareyards.com/resources/images/mumbai/tn-projectflagship/tn-origin-wisteria-square-project-flagship1.jpg",
      slug: "origin-wisteria-square",
    },
    {
      name: "Raghav Paradise",
      price: 10100000,
      location: "Borivali East",
      "images-links":
        "https://static.squareyards.com/resources/images/mumbai/tn-projectflagship/tn-raghav-paradise-project-flagship1.jpg",
      slug: "raghav-paradise",
    },
    {
      name: "Mayfair Sara Virar",
      price: 3580000,
      location: "Virar West",
      "images-links":
        "https://static.squareyards.com/resources/images/mumbai/tn-projectflagship/tn-mayfair-sara-virar-project-flagship1.jpg",
      slug: "mayfair-sara-virar",
    },
    {
      name: "MICL Aaradhya Prime Park",
      price: 6800000,
      location: "Mira Road",
      "images-links":
        "https://static.squareyards.com/resources/images/mumbai/tn-projectflagship/tn-micl-prime-park-project-flagship1.jpg",
      slug: "micl-aaradhya-prime-park",
    },
    {
      name: "Mayfair Housing Virar Gardens",
      price: 3660000,
      location: "Virar West",
      "images-links":
        "https://static.squareyards.com/resources/images/mumbai/tn-projectflagship/tn-mayfair-housing-virar-gardens-project-flagship.jpg",
      slug: "mayfair-housing-virar-gardens",
    },
    {
      name: "Lodha The Park Side",
      price: 63674000,
      location: "Worli",
      "images-links":
        "https://static.squareyards.com/resources/images/mumbai/tn-projectflagship/tn-lodha-the-park-side-project-flagship1.jpg",
      slug: "lodha-the-park-side",
    },
  ];

  const flat = flatDetails.find((flat) => flat.name === slug);

  if (!flat) {
    return <div>Flat not found</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img
            className="img-fluid"
            style={{ height: "100%", width: "100%" }}
            src={flat["images-links"]}
            alt="flat"
          />{" "}
        </div>
        <div className="col-lg-6">
          <h1>{flat.name}</h1>
          <h2>Price: {formatPrice(flat.price)}</h2>
          <h4>Location: {flat.location}</h4>
          <h4>2 BHK</h4>
          <h4>1000 sqt ft</h4>
        </div>
      </div>
    </div>
  );
};

export default FlatDetail;
