// import content
import { useEffect } from "react";
import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            Web{" "}
            <span className="text-dark_primary">developer</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5 w-full sm:w-1/2 sm:max-w-none custom-max-width" data-aos="fade-down">
          <h2 className="flex justify-start">{hero.title}</h2>
          <br />
          <div className="text-xl">
            {hero.shortDescription}
          </div>
          {/* <div className="flex justify-end">
            <button className="btn">{hero.btnText}</button>
          </div> */}
          <hr className="m-4 border-slate-100" />
          <div className="text-center p-4">
            <div className="mb-4">{hero.downloadText}</div>
            <a href="/cv/CV-Ghouma-Mohamed-developpeur-web-full-stack.pdf" target="_blank" className="btn inline-block bg-sky-700 text-white hover:bg-white hover:text-dark_primary" rel="nofollow">{hero.downloadBtn}</a>
          </div>
          <hr className="m-4 border-slate-100" />
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="Tunisian Web developer"
            className="h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
