import React from "react";

const SearchBarSimplified = () => {
  return (
    <nav
      style={{
        position: "absolute",
        left: "50%",
        top: "45%",
        transform: "translate(-50%, 0)",
      }}
    >
      <div className="grid grid-cols-12 w-128 h-12">
        <input
          placeholder="Enter Country, State, Suburb, or Zip"
          className="col-start-1 col-end-7 bg-slate-200 p-2 text-sm rounded-l-md"
        ></input>
        <button
          type="button"
          className="col-start-7 col-end-9 cursor-pointer bg-pawler-primary px-2 py-1 border-black-500 border-r-1 hover:bg-pawler-primaryHover"
        >
          <p className="text-sm">Find Dogs</p>
        </button>
        <button
          type="button"
          className="col-start-9 col-end-11 text-sm cursor-pointer bg-pawler-primary px-2 py-1 hover:bg-pawler-primaryHover"
        >
          <p className="text-sm">Find Cats</p>
        </button>
        <button
          type="button"
          className="col-start-11 col-end-13 text-sm cursor-pointer bg-pawler-primary px-2 py-1 rounded-r-md hover:bg-pawler-primaryHover"
        >
          <p className="flex justify-center">
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
    </nav>
  );
};

export { SearchBarSimplified };
