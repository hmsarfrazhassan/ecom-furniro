import React from "react";
import img1 from "@/assets/images/desc-img1.png";
import img2 from "@/assets/images/desc-img2.png";

const Description = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="w-11/12 md:w-10/12 lg:w-8/12 mb-10 mx-auto">
        <p className="text-[#9F9F9F]">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p className="text-[#9F9F9F]">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-90 w-full p-2 bg-[#F9F1E7] rounded-md">
          <img src={img1} alt="product image" />
        </div>
        <div className="h-90 w-full p-2 bg-[#F9F1E7] rounded-md">
          <img src={img2} alt="product image" />
        </div>
      </div>
    </div>
  );
};

export default Description;
