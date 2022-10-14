import React from "react";
import Card from "./Card";

const Cardlist = ({ ads }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "120px" }}>
      {ads.map((ad, i) => {
        return (
          <Card
            key={i}
            imageUrl={ad.imageUrl}
            primaryText={ad.primaryText}
            headline={ad.headline}
            description={ad.description}
            name={ad.companyId.name}
            url={ad.companyId.url}
          />
        );
      })}
    </div>
  );
};

export default Cardlist;
