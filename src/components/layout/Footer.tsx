import { styles } from "../../constants/styles";
import { socialLinks } from "../../constants";

const Footer = () => {
  return (
    <footer className={`${styles.paddingX} bg-primary text-white py-5`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-4 sm:mb-0">
          <p className="text-[15px] font-bold cursor-pointer">
            Abhishek&nbsp;
            <span className="sm:block hidden text-[#915EFF]">Tiwari</span>
          </p>
        </div>
        <ul className="flex">
          {socialLinks.map((socialLink) => (
            <li key={socialLink.id} className="">
              <a
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-secondary"
              >
                <img src={socialLink.icon} alt="" className="w-[70%]  object-contain"/>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* copyright, shoutout for opensource code and images */}
      <div className="text-center mt-5">
        <p className="text-[12px]">
          &copy; {new Date().getFullYear()} Abhishek Tiwari. All Rights
          Reserved. LinkedIn & Github icons are from <a href="https://icons8.com/icons" className="text-[#915EFF]">ICON8</a>, Portfolio code by <a href="https://github.com/ladunjexa/Threejs-3D-Portfolio" className="text-[#915EFF]">Threejs-3D-Portfoilo</a>
        </p>
            </div>
    </footer>
  );
};

export default Footer;
