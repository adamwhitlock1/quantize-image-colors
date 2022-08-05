import React, { useEffect, useState } from "react";
import { tw } from "twind";
import { buildRgb } from "./buildRgb";

function CardGuts({ key, mix, colors }) {
  const [mainColor, setMainColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [accentColor, setAccentColor] = useState("");

  useEffect(() => {
    if (colors) {
      let color1 = colors[0].join(".");
      let color2 = colors[1].join(".");
      let color3 = colors[2].join(".");
      setMainColor(color1);
      setSecondaryColor(color2);
      setAccentColor(color3);
    }
  }, [colors, mainColor]);

  const backgroundColor = {
    backgroundColor: buildRgb(mainColor)
  };

  const nuColor = buildRgb(mainColor);

  return (
    <>
      <div
        className={tw`glass max-w-sm rounded overflow-hidden shadow-lg block relative w-800, h-800 hover:box-content card-title`}
      >
        <img
          className={tw`w-full`}
          src={mix.mix_photo}
          alt={mix.mix_name}
        ></img>
        <div
          className={tw`font-bold text-s mb-2 p-2 rounded absolute bg-white top-[0] left-[0]`}
        >
          <div key={`h${mix.id}`} style={backgroundColor}>
            <p>{nuColor}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardGuts;
