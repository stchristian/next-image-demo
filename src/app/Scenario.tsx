import { Code, Link, LinkProps } from "@nextui-org/react";
import React from "react";

export type ScenarioProps = {
  explanation: string;
  code: string;
  description: string;
  usefulLinks?: LinkProps[];
  component?: React.ReactElement;
};
export function Scenario({ code, explanation, usefulLinks, component = undefined }: ScenarioProps) {
  return (
    <div>
      {typeof component === "undefined" && <div dangerouslySetInnerHTML={{ __html: code }}></div>}
      {component}
      <Code className="mt-4 whitespace-normal">{code}</Code>
      <h2 className="text-lg mt-4">Explanation:</h2>
      {usefulLinks && <h2 className="text-lg mt-4">Useful links:</h2>}
      {usefulLinks?.map((l) => <Link {...l} key={l.href} />)}
      <p dangerouslySetInnerHTML={{ __html: explanation }}></p>
    </div>
  );
}
