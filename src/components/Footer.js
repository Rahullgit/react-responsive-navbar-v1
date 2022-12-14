import React from "react";
import SimpleReactFooter from "simple-react-footer";

function Footer() {
  const description =
    "According to wikipedia, the cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.";
  const title = "CODIANT";
  const columns = [
    {
      title: "Resources",
      resources: [
        {
          name: "Career",
          link: "/career",
        },
        {
          name: "Company",
          link: "/company",
        },
        {
          name: "Industries",
          link: "/industries",
        },
        {
          name: "Products",
          link: "/products",
        },
        {
          name: "Service",
          link: "/service",
        },
        {
          name: "Soluction",
          link: "/soluction",
        },
      ],
    },
    {
      title: "Legal",
      resources: [
        {
          name: "Privacy",
          link: "/privacy",
        },
        {
          name: "Terms",
          link: "/terms",
        },
      ],
    },
    {
      title: "Visit",
      resources: [
        {
          name: "Locations",
          link: "/locations",
        },
        {
          name: "Culture",
          link: "/culture",
        },
      ],
    },
  ];
  return (
    <div>
      {/* this is footer down below */}

      <SimpleReactFooter
        description={description}
        title={title}
        columns={columns}
        linkedin="fluffy_cat_on_linkedin"
        facebook="fluffy_cat_on_fb"
        twitter="fluffy_cat_on_twitter"
        instagram="fluffy_cat_live"
        youtube="UCFt6TSF464J8K82xeA?"
        pinterest="fluffy_cats_collections"
        copyright="black"
        iconColor="black"
        backgroundColor="bisque"
        fontColor="black"
        copyrightColor="darkgrey"
      />
    </div>
  );
}

export default Footer;
