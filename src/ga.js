import ReactGA from "react-ga4";
import UAParser from "ua-parser-js";

// Initialize Google Analytics
// ReactGA.initialize("G-WQDB39QG2D");
ReactGA.initialize("G-T6X4MJSN59");

// Function to get device type
function getDeviceType() {
  const parser = new UAParser();
  const deviceType = parser.getDevice().type;

  if (deviceType === "mobile") return "Mobile";
  if (deviceType === "tablet") return "Tablet";
  // If no type is detected, assume desktop
  return "Desktop";
}

// Function to send pageview with device type
export function sendPageview(path) {
  const deviceType = getDeviceType();
  ReactGA.set({ device_type: deviceType });
  ReactGA.send({
    hitType: "pageview",
    page: path,
    title: ` Page Title ${path}`,
    custom_map: { 'dimension1': 'device_type' }
  });
}
