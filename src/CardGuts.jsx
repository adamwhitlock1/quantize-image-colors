import React, { useEffect, useState } from "react";
import { tw } from "twind";
import { buildRgb } from "./buildRgb";
import useImageColor from "./useImageColor";
import { Link } from "react-router-dom";

function CardGuts({ key, mix }) {
  const [mainColor, setMainColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [accentColor, setAccentColor] = useState("");

  const [colors, setColors] = useState(null);

  const deriveColors = useImageColor();

  const imageSrcUrl = `https://picsum.photos/id/${mix.id}/300/300`;

  useEffect(() => {
    const getColors = async () => {
      const colors = await deriveColors(imageSrcUrl);
      setColors(colors);
    };

    getColors();
  }, []);

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

  return (
    <>
      <div
        className={tw`glass max-w-sm rounded overflow-hidden shadow-lg block relative w-800, h-800 hover:box-content card-title mb-4`}
      >
        <img className={tw`w-full`} src={imageSrcUrl} alt={mix.author}></img>
        <div
          className={tw`font-bold text-s mb-2 p-2 rounded absolute bg-white top-[0] left-[0] mt-2 ml-2`}
        >
          <div style={{ backgroundColor: buildRgb(mainColor) }}>
            <p>{buildRgb(mainColor)}</p>
          </div>
          <div style={{ backgroundColor: buildRgb(secondaryColor) }}>
            <p>{buildRgb(mainColor)}</p>
          </div>
          <div style={{ backgroundColor: buildRgb(accentColor) }}>
            <p>{buildRgb(accentColor)}</p>
          </div>
        </div>
        <Link
          to={`/details/${mix.id}`}
          className={tw`text-underline`}
          state={{ colors: { mainColor, secondaryColor, accentColor } }}
        >
          VIEW DETAILS ->{" "}
        </Link>
      </div>
    </>
  );
}

export default CardGuts;
