"use client";
import { Button, Chip, Link, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import { Scenario, ScenarioProps } from "../Scenario";
import Image from "next/image";
import cargoImg from "../../../public/cargo.jpg";

const scenarios: Array<ScenarioProps> = [
  {
    description: "Basic",
    explanation:
      "Next.js will automatically determine the width and height of your image based on the imported file. These values are used to prevent Cumulative Layout Shift while your image is loading. It will not resize your image however. Try to load this scenario while emulating a mobile viewport in devtools! The same image will be loaded so the time to download the file does not change.",
    code: `<Image src={cargoImg} alt="cargo"></Image>`,
    component: <Image src={cargoImg} alt="cargo"></Image>,
  },
  {
    description: "Optimized",
    explanation:
      "The sizes attributes is a string, similar to a media query, that provides information about how wide the image will be at different breakpoints. The value of sizes will greatly affect performance for images using fill or which are styled to have a responsive size. 100vw means that the image fills the full width of the viewport. Go to the element inspector and see that for every viewport size it generated an optimized and resized image",
    code: `<Image src={cargoImg} alt="cargo" sizes="100vw"></Image>`,
    component: <Image src={cargoImg} alt="cargo" sizes="100vw"></Image>,
  },
];

export default function NextImage() {
  const [selectedScenario, setSelectedScenario] = useState<ScenarioProps | undefined>();

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-5xl py-8"> The NextJS image component</h1>
        <Button as={Link} href="/">
          Go back
        </Button>
      </div>

      <p className="mb-4">
        Images account the biggest portion of the typical website's page weight (the byte size of the page including
        html, images, css, js...). We can optimize them by generating multiple sizes for the same image and using the
        srcset and sizes attributes as we've seen before. We could generate the more modern WebP image format. It would
        be nice also to handle lazy loading. But implementing this requires a lot of coding. The <i>Image</i> component
        of Next is here to rescue.
      </p>
      <div>
        <Chip color="warning" className="mb-4">
          To see the loading of images, set the network throttling in devtools to Fast 3G
        </Chip>
      </div>
      <Select
        label="Select a scenario"
        className="max-w-xs mb-4"
        onChange={(ev) => setSelectedScenario(scenarios.find((el) => el.description === ev.target.value))}
      >
        {scenarios.map((scenario, i) => (
          <SelectItem key={scenario.description} value={scenario.description}>
            {scenario.description}
          </SelectItem>
        ))}
      </Select>
      {selectedScenario && <Scenario {...selectedScenario} />}
    </>
  );
}
