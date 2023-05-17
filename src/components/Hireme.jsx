import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14 ">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h3 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h3>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={Hireme.image1}
            alt="Tunisian Web developer"
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
            loading="lazy"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="Tunisian Web developer"
            className="max-w-sm md:hidden"
            loading="lazy"
          />
          <div
            data-aos="fade-left"
            className="border-2 mb-4 border-dark_primary p-6 shadow-sm rounded-xl sm:min-w-[22rem]"
          >
            <div className="leading-7" dangerouslySetInnerHTML={{__html: Hireme.para}}></div>
            {/* <br />
            <button className="btn bg-dark_primary text-white hover:bg-sky-700 hover:text-white">
              {Hireme.btnText}
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
