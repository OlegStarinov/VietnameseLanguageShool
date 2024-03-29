import React from "react";
import H2 from "../../../ui-library/H2";
import { converstation } from "../../../store/static";
import Section from "../../main/section/Section";
const pictureItem = converstation.baner.map((item) => (
  <div key={item.id}>
    <H2
      children={item.title}
      fontsizeprimary="h2-font-size-primary"
      fontfamilysecondary="font-[KGLifeisMessy]"
      fontcolorsecondary={item.color}
    />
    <img
      src={item.src}
      className="md:mt-auto md:mb-auto w-32 ml-auto mr-auto pt-10"
      alt="icon promoution listen, practice, understand"
      loading="lazy"
    />
    <p className="text-xl text-stone-500 font-semibold   pt-10">{item.text}</p>
  </div>
));
function Baner() {
  return (
    <Section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 text-center pt-20">
        {pictureItem}
      </div>
    </Section>
  );
}

export default Baner;
