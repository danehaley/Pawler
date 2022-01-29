import React from "react";

type SearchBarProps = {
  className: string;
};

const SearchBarSimplified = ({ className }: SearchBarProps) => {
  return (
    <nav
      className="bg-white/20 backdrop-blur-sm rounded-lg drop-shadow-md"
      style={{
        position: "absolute",
        left: "50%",
        top: "45%",
        transform: "translate(-50%, 0)",
      }}
    >
      <div className="grid grid-cols-12 w-128 h-12 drop-shadow-md">
        <input
          placeholder="Enter Country, State, Suburb, or Zip"
          className="col-start-1 col-end-7 bg-gray-600/20 p-2 text-sm rounded-l-xl shadow-inner outline-none text-white placeholder:text-gray-300 ring-1 ring-slate-900/5"
        ></input>
        <button
          type="button"
          className="col-start-7 col-end-9 cursor-pointer bg-pawler-primary px-2 py-1 border-black-500 border-r-1 hover:bg-pawler-primaryHover ring-1 ring-slate-900/10"
        >
          <p className="text-sm antialiased">Find Dogs</p>
        </button>
        <button
          type="button"
          className="col-start-9 col-end-11 text-sm cursor-pointer bg-pawler-primary px-2 py-1 hover:bg-pawler-primaryHover ring-1 ring-black/10"
        >
          <p className="text-sm antialiased">Find Cats</p>
        </button>
        <button
          type="button"
          className="col-start-11 col-end-13 text-sm cursor-pointer bg-pawler-primary px-2 py-1 rounded-r-xl hover:bg-pawler-primaryHover ring-1 ring-slate-900/10"
        >
          <p className="flex justify-center antialiased">
            Find
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </p>
        </button>
      </div>
      <div className="grid grid-cols-12"></div>
    </nav>
  );
};

export { SearchBarSimplified };
