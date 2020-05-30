import transparentCircle from "./colors/green/images/transparent_circle.png";
import transparentBlack from "./colors/wedding/images/trans_black.png";
import palteImage from "./colors/food/images/plate_bg.png";

function getTemplateCss(selectedTemplate = "main") {
  let myBackgroundImage;
  const differentLayouts = ["black", "red", "white"];
  if (!differentLayouts.includes(selectedTemplate)) {
    myBackgroundImage = require(`./colors/${selectedTemplate}/images/bg-${selectedTemplate}.jpg`);
  }

  switch (selectedTemplate) {
    case "main":
      return {
        container: {
          backgroundImage: `url(${myBackgroundImage})`,
          backgroundSize: "100% 100%",
          color: "white"
        },
        icon: {
          width: "30%",
          // padding: "4.6% 0.3%",
          height: 0,
          paddingBottom: "30%",
          margin: "1% 0px 2% 3.2%",
          WebkitTextStroke: "1px #5ae3c9",
          WebkitTextFillColor: "transparent",
          backgroundSize: "100% 100%",
          iconText: {
            WebkitTextStrokeColor: "white",
            fontWeight: 300
          }
        },
        image: {
          width: "50%",
          maxWidth: "300px",
          borderRadius: "50%"
        }
      };
    case "beauty":
      return {
        container: {
          backgroundImage: `url(${myBackgroundImage})`,
          backgroundSize: "100% 100%",
          color: "white"
        },
        icon: {
          width: "30%",
          // padding: "4.6% 0.3%",
          height: 0,
          paddingBottom: "30%",
          margin: "1% 0px 2% 3.2%",
          backgroundImage: `url(${transparentBlack})`,
          backgroundPsition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          borderRadius: "200px"
        },
        image: {
          width: "50%",
          maxWidth: "300px",
          borderRadius: "50%"
        }
      };
    case "black":
      return {
        container: {
          backgroundColor: "#1f1f1f",
          color: "white"
        },
        icon: {
          width: "30%",
          // padding: "4.6% 0.3%",
          height: 0,
          paddingBottom: "30%",
          margin: "1% 0px 2% 3.2%",
          backgroundColor: "#444444",
          borderRadius: "200px",
          backgroundSize: "100% 100%"
        },
        image: {
          width: "50%",
          maxWidth: "300px",
          borderRadius: "50%"
        }
      };
    case "red":
      return {
        container: {
          backgroundColor: "#c43e49",
          color: "white"
        },
        icon: {
          listStyle: "none",
          width: "45.5%",
          height: "0",
          paddingBottom: "31%",
          float: "left",
          display: "block",
          margin: "3% 0 0 3%",
          backgroundColor: "#ac303a",
          borderRadius: "200px",
          backgroundSize: "100% 100%"
        },
        image: {
          width: "50%",
          maxWidth: "300px",
          borderRadius: "50%"
        }
      };

    case "white":
      return {
        container: {
          backgroundColor: "white",
          color: "#323232"
        },
        icon: {
          width: "30%",
          // padding: "4.6% 0.3%",
          height: 0,
          paddingBottom: "30%",
          margin: "1% 0px 2% 3.2%",
          border: "1px #333333 solid",
          backgroundSize: "100% 100%",

          borderRadius: "200px"
        },
        image: {
          width: "50%",
          maxWidth: "300px",
          borderRadius: "50%"
        }
      };
    case "green":
      return {
        container: {
          backgroundImage: `url(${myBackgroundImage})`,
          backgroundSize: "100% 100%",
          color: "white"
        },
        icon: {
          width: "30%",
          // padding: "4.6% 0.3%",
          height: 0,
          paddingBottom: "30%",
          margin: "1% 0px 2% 3.2%",
          backgroundImage: `url(${transparentCircle})`,
          backgroundPsition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain"
        },
        image: {
          width: "50%",
          maxWidth: "300px",
          borderRadius: "50%"
        }
      };
    case "wedding":
      return {
        container: {
          backgroundImage: `url(${myBackgroundImage})`,
          backgroundSize: "100% 100%",
          color: "white"
        },
        icon: {
          width: "30%",
          // padding: "4.6% 0.3%",
          height: 0,
          paddingBottom: "30%",
          margin: "1% 0px 2% 3.2%",
          backgroundImage: `url(${transparentBlack})`,
          backgroundPsition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          borderRadius: "200px"
        },
        image: {
          width: "50%",
          maxWidth: "300px",
          borderRadius: "50%"
        }
      };
    case "intro":
      return {
        container: {
          backgroundImage: `url(${myBackgroundImage})`,
          backgroundSize: "100% 100%",
          color: "white"
        },
        icon: {
          width: "30%",
          // padding: "4.6% 0.3%",
          height: 0,
          paddingBottom: "30%",
          margin: "1% 0px 2% 3.2%",
          backgroundImage: `url(${transparentCircle})`,
          backgroundPsition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain"
        },
        image: {
          width: "50%",
          maxWidth: "300px",
          borderRadius: "50%"
        }
      };

    case "food":
      return {
        container: {
          backgroundImage: `url(${myBackgroundImage})`,
          backgroundSize: "100% 100%",
          color: "white"
        },
        icon: {
          width: "30%",
          // padding: "4.6% 0.3%",
          height: 0,
          paddingBottom: "30%",
          margin: "1% 0px 2% 3.2%",
          backgroundImage: `url(${palteImage})`,
          backgroundPsition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          color: "#323232"
        },
        image: {
          width: "50%",
          maxWidth: "300px",
          borderRadius: "50%"
        }
      };

    case "medical":
      return {
        container: {
          backgroundImage: `url(${myBackgroundImage})`,
          backgroundSize: "100% 100%",
          color: "white"
        },
        icon: {
          width: "30%",
          // padding: "4.6% 0.3%",
          height: 0,
          paddingBottom: "30%",
          margin: "1% 0px 2% 3.2%",
          backgroundColor: "#035486",
          borderBottom: "1px #88dafc solid",
          zoom: 1,
          filter: "alpha(opacity=70)",
          opacity: 0.7,
          backgroundSize: "100% 100%"
        },
        image: {
          width: "50%",
          maxWidth: "300px",
          borderRadius: "50%"
        }
      };

    default:
      return {
        container: {
          backgroundImage: `url(${Image})`,
          color: "white"
        },
        icon: {
          width: "30%",
          // padding: "4.6% 0.3%",
          height: 0,
          paddingBottom: "30%",
          margin: "1% 0px 2% 3.2%"
        },
        image: {
          width: "50%",
          maxWidth: "300px",
          borderRadius: "50%"
        }
      };
  }
}

export default getTemplateCss;
