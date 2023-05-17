import { createElement } from "react";
import { content } from "../Content";
import { MdArrowForward, MdCall, MdDesignServices } from "react-icons/md";
import { CgPerformance } from "react-icons/cg";
import { BiDevices } from "react-icons/bi";

const Services = () => {
  const { services, servicestow } = content;
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h3 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h3>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 shadow rounded-xl text-center p-6 flex-1 "
            >
              {/* <img src={content.logo} alt="Tunisian Web developer" className="mx-auto" loading="lazy" /> */}
              <h4 className="grid place-content-center">{createElement(content.logo)}</h4>
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">{content.para}</p>
            </div>
          ))}
        </div>

        <h3 className="subtitle mt-12" data-aos="fade-down">
          {servicestow.subtitle}
        </h3>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {servicestow.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 shadow rounded-xl text-center p-6 flex-1 "
            >
              {/* <img src={content.logo} alt="Tunisian Web developer" className="mx-auto" loading="lazy" /> */}
              <h4 className="grid place-content-center">{createElement(content.logo)}</h4>
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
