import { useState, useEffect } from "react";
import { Popover, ArrowContainer } from "react-tiny-popover";
import { AdvancedImage, placeholder, responsive } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { scale } from "@cloudinary/url-gen/actions/resize";
import { server } from "../../config";
import { useRouter } from "next/router";

const BreedPopover = (target, json) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "daneq",
    },
  });

  const [popoverOpen, setPopoverOpen] = useState(false);

  const close = () => {
    setPopoverOpen(false);
  };

  const myImage = cld.image("v1645348012/" + json.breed.image);
  myImage.resize(scale().width(300).height(300));
  myImage.format("auto").quality("60");

  return (
    <Popover
      className="bg-white/60 backdrop-blur-md"
      isOpen={popoverOpen}
      positions={["top", "bottom", "left", "right"]}
      onClickOutside={close}
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor={"white"}
          arrowSize={10}
          className="popover-arrow-container"
          arrowClassName="popover-arrow"
        >
          <div
            className="bg-white/60 backdrop-blur-md p-4 ml-20 z-10 rounded-xl max-w-xs drop-shadow-md"
            onBlur={close}
          >
            <AdvancedImage
              cldImg={myImage}
              plugins={[placeholder({ mode: "blur" })]}
            />
            <h1 className="mt-2">{json.breed.name}</h1>
            <p className="text-xs mt-2">{json.breed.description}</p>
            <h1 className="text-xs text-neutral-600 mt-2">Personality</h1>
            <div className="flex gap-1 mt-1 flex-wrap">
              {json.breed.traits.map((trait) => {
                return (
                  <p
                    key={`${trait}`}
                    className="text-xs bg-pawler-primary rounded-full px-2 max-h-5 cursor-default"
                  >
                    {trait.name}
                  </p>
                );
              })}
            </div>
            <div className="text-xs">
              <h1 className="text-neutral-600 mt-2">Traits</h1>
              <p>Size {json.breed.size}</p>
              <p>Shedding {json.breed.shedding_amt}</p>
              <p>Coat {json.breed.coat_length}</p>
              <p>Excerise Needs {json.breed.exercise_needs}</p>
            </div>
          </div>
        </ArrowContainer>
      )}
    >
      <button onClick={() => setPopoverOpen(!popoverOpen)}>{target}</button>
    </Popover>
  );
};

export default BreedPopover;
