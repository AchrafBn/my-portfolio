import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,

  description,
  previewUrl,
  tools,
}) => {
  return (
    <div
      className="h-52 md:h-72 rounded-xl relative group"
      style={{
        background: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay justify-center items-center  text-center absolute rounded-xl top-0 left-0 w-full h-full bg-[#f2f2f2] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-90 transition-all duration-500 ">
        <div>
          <h5 className="text-lg md:text-2xl text-balticSea  font-semibold mb-2">
            {title}
          </h5>
          <p className="mx-4 text-sm md:text-base font-medium text-balticSea">
            {description}
          </p>

          <div className="my-2">
            {tools.map((name) => (
              <>
                <span className=" text-white  bg-violet-900  text-xs md:text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full">
                  {name}
                </span>
              </>
            ))}
          </div>
          <Link
            className={`my-2 text-center inline-flex items-center justify-center   text-balticSea border-balticSea hover:bg-zinc-200 rounded-md border-2 px-3 py-1 text-md cursor-pointer`}
            href={previewUrl}
            target="_blank"
          >
            Visit
            <ArrowTopRightOnSquareIcon
              aria-hidden="true"
              className="w-6 h-5 ml-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
