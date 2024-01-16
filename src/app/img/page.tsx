"use client";
import { Button, Chip, Link, Select, SelectItem, Code } from "@nextui-org/react";
// import { Select, SelectItem } from "@nextui-org/select";
import { ReactNode, useMemo, useState } from "react";
import { ScenarioProps, Scenario } from "../Scenario";

const scenarios: Array<ScenarioProps> = [
  {
    description: "Worst case scenario",
    explanation:
      "<i>&lt;img /&gt;</i> with missing width and height. Look how this text changed position after the image got fully loaded. This is what we call cumulative layout shift",
    code: `<img src="/cargo.jpg"></img>`,
  },
  {
    description: "Little bit better",
    explanation: `Width and height specified according to the real image size. Isn't this a bit blurry? If not that means you're on a low pixel density screen. The browser will occupy an area of 800 x 533 for the image but this is in CSS pixels which is different from real device pixels!`,
    code: `<img src="/cargo_800.jpg" width="800" height="533"></img>`,
  },
  {
    description: "For high resolution devices",
    explanation: `If you were on a mac, now the image should be more clearer!`,
    code: `<img src="/cargo_1600.jpg" width="800" height="533"></img>`,
  },
  {
    description: "Random width and height",
    explanation: `When you choose a random width and height, the browser will render the image with the specified width while maintaining the aspect ratio of the original image!`,
    code: `<img src="/cargo_1600.jpg" width="324" height="512"></img>`,
  },
  {
    description: "Srcset and sizes",
    explanation: `You can specify multiple image sources in the srcSet attribute. Here I specified 2 images. This gives just info to the browser that hey, I prepared different sizes for you in case! You should also specify sizes attribute which will define when the browser should load them. If you don't specify sizes the behaviour will be different based on the browser you use. So, with these attributes in place, the browser will: Look at its device width. Work out which media condition in the sizes list is the first one to be true. Look at the slot size given to that media query. Load the image referenced in the srcset list that has the same size as the slot or, if there isn't one, the first image that is bigger than the chosen slot size.`,
    code: `<img
    src="/cargo.jpg" 
    alt="Cargo" 
    srcSet="/cargo_800.jpg 800w, /cargo.jpg 5464w"
    width="800"
    height="533" 
    sizes="(max-width: 800px) 800px, 5464px"
    className="mb-8 w-full"
  />`,
    usefulLinks: [
      {
        children: "Responsive images",
        href: "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",
      },
    ],
  },
];

export default function ImgElement() {
  const [selectedScenario, setSelectedScenario] = useState<ScenarioProps | undefined>();

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-5xl py-8"> The good old &lt;img&gt; element</h1>
        <Button as={Link} href="/">
          Go back
        </Button>
      </div>
      <p className="mb-4">
        By specifying the width and height attributes for the <i>&lt;img&gt;</i> element, the browser will reserve space
        in the document layout for the image before it is fully loaded. This helps prevent layout shifts. The width and
        height you specify is in CSS pixels.
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
