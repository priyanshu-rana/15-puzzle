import { FC, memo } from "react";
import { BsGithub, BsLinkedin } from "react-icons/all";

type CreditsProps = {};

const Credits: FC<CreditsProps> = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between  font-mono p-8 bg-black  ">
      <div>
        <h1 className="text-white text-xl sm:text-4xl font-bold">
          Connect me at
        </h1>
        <ul className="text-white list-disc ml-8">
          <li>
            <a
              href="https://priyanshurana.in"
              className="hover:scale-110"
              target={"_blank"}
            >
              priyanshurana.in
            </a>
          </li>
          <li className="flex  space-x-4 mt-4">
            <BsGithub className="w-8 h-8 hover:scale-110" />
            <BsLinkedin className="w-8 h-8 hover:scale-110" />
          </li>
        </ul>
      </div>
      <div className="sm:px-16 sm:mt-0 mt-8">
        <h1 className="text-white text-xl sm:text-4xl font-bold">Credits</h1>
        <ul className="text-gray-200 list-disc ml-8">
          <li>CodePen</li>
          <li>Coding Tech</li>
        </ul>
      </div>
    </div>
  );
};

Credits.defaultProps = {};

export default memo(Credits);
