import { assets } from "@/assets/assets";
import Subscription from "@/components/shared/Subscription";
import Title from "@/components/shared/Title";

const About = () => {
  return (
    <div className="container__width">
      <div className="border-t border-gray-200 pt-6 sm:pt-8">
        <div className="flex flex-col gap-8">
          <div className="flex justify-center">
            <Title title1="about" title2="us" />
          </div>
          <div className="flex flex-col sm:flex-row gap-[5%] space-y-8">
            {/* left side */}
            <div className="w-full sm:w-1/2">
              <img src={assets.about_img} alt="" />
            </div>
            {/* right side */}
            <div className="w-full sm:w-1/2 flex flex-col justify-center gap-4">
              <p className="text-gray-500">
                Forever was born out of a passion for innovation and a desire to
                revolutionize the way people shop online. Our journey began with
                a simple idea: to provide a platform where customers can easily
                discover, explore, and purchase a wide range of products from
                the comfort of their homes.
              </p>
              <p className="text-gray-500">
                Since our inception, we've worked tirelessly to curate a diverse
                selection of high-quality products that cater to every taste and
                preference. From fashion and beauty to electronics and home
                essentials, we offer an extensive collection sourced from
                trusted brands and suppliers.
              </p>
              <p className="flex flex-col">
                <span className="font-bold">Our Mission</span>
                <span className="text-gray-500">
                  Our mission at Forever is to empower customers with choice,
                  convenience, and confidence. We're dedicated to providing a
                  seamless shopping experience that exceeds expectations, from
                  browsing and ordering to delivery and beyond.
                </span>
              </p>
            </div>
          </div>
          {/* why choose us */}
          <div className="flex flex-col gap-8 my-12 sm:mt-20">
            <Title title1="why" title2="choose us" />
            <div className="flex flex-col sm:flex-row justify-between">
              <div className="flex flex-col gap-4 border border-gray-200 p-8 lg:p-12">
                <p className="uppercase font-bold">quality assurance:</p>
                <p className="text-sm text-gray-500">
                  We meticulously select and vet each product to ensure it meets
                  our stringent quality standards.
                </p>
              </div>
              <div className="flex flex-col gap-4 border border-gray-200 p-8 lg:p-12">
                <p className="uppercase font-bold">Convenience:</p>
                <p className="text-sm text-gray-500">
                  With our user-friendly interface and hassle-free ordering
                  process, shopping has never been easier.
                </p>
              </div>
              <div className="flex flex-col gap-4 border border-gray-200 p-8 lg:p-12">
                <p className="uppercase font-bold">
                  Exceptional Customer Service:
                </p>
                <p className="text-sm text-gray-500">
                  Our team of dedicated professionals is here to assist you the
                  way, ensuring your satisfaction is our top priority.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Subscription />
      </div>
    </div>
  );
};

export default About;
