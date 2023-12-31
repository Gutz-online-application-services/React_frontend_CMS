import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { MotionWrap, AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonials.scss";
function Testimonials() {
  const [brands, setBrand] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    async function getTestimonials() {
      const getTestimonials = await client.fetch('*[_type == "testimonials"]');
      setTestimonials(getTestimonials);
    }

    async function getBrands() {
      const getBrands = await client.fetch('*[_type == "brands"]');
      setBrand(getBrands);
    }

    getBrands();
    getTestimonials();
  }, []);

  const test = testimonials[currentIndex];
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(test.imageUrl)} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-test">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1,
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1,
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
          <div className="app__testimonial-brands app__flex">
            {brands.map((brand) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, type: "tween" }}
                key={brand.id}
              >
                <img src={urlFor(brand.imgUrl)} alt={brand.name} />
              </motion.div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default AppWrap(
  MotionWrap(Testimonials, "app__testimonial"),
  "testimonials",
  "app__primarybg",
);
