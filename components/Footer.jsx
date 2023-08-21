import Link from "next/link";
import Image from "next/image";
import { footerLogo } from "@/public/images";
import { footerLinks, socialMedia } from "@/constants/constants.index";
import { copyrightSign } from "@/public/icons";

const Footer = () => {
  return (
    <footer className="bg-black padding-x padding-t pb-8">
      <div className="max-container">
        <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col items-start">
              <Link href="/">
                <Image src={footerLogo} width={150} height={46} />
              </Link>
              <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
                Get shoes ready for the new term at your nearest Nike store.
                Find your perfect size in store. Get rewards!
              </p>
              <div className="flex items-center gap-5 mt-8">
                {socialMedia.map((item) => (
                  <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full mt-4 mb-4">
                    <Image
                      src={item.src}
                      alt={item.name}
                      width={25}
                      height={25}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
              {footerLinks.map((section) => (
                <div key={section}>
                  <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                    {section.title}
                  </h4>
                  <ul>
                    {section.links.map((link) => (
                      <li
                        key={link.name}
                        className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                      >
                        <Link href="/">{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <Image
              src={copyrightSign}
              alt="copyright"
              width={20}
              height={20}
              className="rounded-full m-0"
            />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
