import React from "react";

const SVGComponent = ({ svgString }) => {
  const extractSVGAndPathProperties = (svgString) => {
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
    const svgElement = svgDoc.querySelector("svg");
    if (!svgElement) {
      return null;
    }

    const convertAttributes = (attributes) => {
      const reactAttributes = {};
      for (const [key, value] of Object.entries(attributes)) {
        let reactKey = key;
        switch (key) {
          case "stroke-linecap":
            reactKey = "strokeLinecap";
            break;
          case "stroke-linejoin":
            reactKey = "strokeLinejoin";
            break;
          case "stroke-width":
            reactKey = "strokeWidth";
            break;
          case "clip-rule":
            reactKey = "clipRule";
            break;
          case "class":
            reactKey = "className";
            break;
          case "fill-rule":
            reactKey = "fillRule";
            break;
          default:
            reactKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            break;
        }
        reactAttributes[reactKey] = value;
      }
      return reactAttributes;
    };

    const getAttributes = (element) => {
      const attributes = {};
      for (const attr of element.attributes) {
        attributes[attr.name] = attr.value;
      }
      return convertAttributes(attributes);
    };

    const svgProperties = getAttributes(svgElement);

    const extractNestedElements = (parentElement) => {
      return Array.from(parentElement.children).flatMap((child) => {
        if (child.tagName.toLowerCase() === "path") {
          return [getAttributes(child)];
        } else {
          return extractNestedElements(child);
        }
      });
    };

    const pathPropertiesArray = extractNestedElements(svgElement);

    return {
      svg: svgProperties,
      paths: pathPropertiesArray,
    };
  };

  const svgData = extractSVGAndPathProperties(svgString);
  if (!svgData) {
    return null;
  }

  const { svg, paths } = svgData;

  return (
    <svg {...svg}>
      {paths.map((pathProps, index) => (
        <path key={index} {...pathProps} />
      ))}
    </svg>
  );
};

export default SVGComponent;
