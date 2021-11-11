import fitquation from "../images/fitquation.jpg";
import cobblesweb from "../images/cobblesweb.jpg";
import cobblesapp from "../images/cobblesapp.jpg";
import cobblesadmin from "../images/cobblesadmin.jpg";
import codesage from "../images/codesage.jpg";
import abigale from "../images/abigale.jpg";
import tourzim from "../images/tourzim.jpg";
import backend from "../images/backend.jpg";
import mars from "../images/mars.jpg";
import bricks from "../images/bricks.jpg";
import fiddlefitweb from "../images/fiddlefitweb.jpg";
import premierlanding from "../images/premierlanding.jpg";
import bmotors from "../images/bmotors.jpg";
import daymash from "../images/daymash.jpg";
import camera from "../images/camera.jpg";
import ml from "../images/ml.png";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  return (
    <div className="section container">
      <h1 className="heading-primary">Portfolio</h1>
      <div className="section-portfolio">
        <PortfolioItem
          key="cobblesweb"
          heading="Cobbles Website"
          description="ReactJS, GraphQL"
          image={cobblesweb}
        />
        <PortfolioItem
          key="cobblesapp"
          heading="Cobbles App"
          description="iOS (Swift), GraphQL, Metal, Texture"
          image={cobblesapp}
        />
        <PortfolioItem
          key="cobblesbackend"
          heading="Cobbles Backend"
          description="NodeJS, MongoDB, Redis, AWS, GraphQL"
          image={backend}
        />
        <PortfolioItem
          key="cobblesadmin"
          heading="Cobbles Admin"
          description="ReactJS, GraphQL"
          image={cobblesadmin}
        />
        <PortfolioItem
          key="fitquationbackend"
          heading="Fitquation Backend"
          description="NodeJS, Prisma (PostgresSQL), GraphQL, Heroku"
          image={backend}
        />
        <PortfolioItem
          key="fitquationapp"
          heading="Fitquation App"
          description="iOS (Swift), WatchOS (Swift)"
          image={fitquation}
        />
        <PortfolioItem
          key="codesage"
          heading="CodeSage Website"
          description="HTML, CSS, PHP"
          image={codesage}
        />
        <PortfolioItem
          key="abigale"
          heading="Abigale Website"
          description="HTML, CSS, PHP"
          image={abigale}
        />
        <PortfolioItem
          key="marsgame"
          heading="Colonize Mars (Game)"
          description="Unity, C#"
          image={mars}
        />
        <PortfolioItem
          key="tourzim"
          heading="Tour Zim Website"
          description="Wordpress, PHP"
          image={tourzim}
        />
        <PortfolioItem
          key="bricks"
          heading="Smash Bricks (Game)"
          description="Unity, C#"
          image={bricks}
        />
        <PortfolioItem
          key="fiddlefitweb"
          heading="FiddleFit (Website)"
          description="HTML, CSS, Javascript"
          image={fiddlefitweb}
        />
        <PortfolioItem
          key="premierlanding"
          heading="Premier Travel (QR Code)"
          description="ReactJS"
          image={premierlanding}
        />
        <PortfolioItem
          key="bmotors"
          heading="B Motors (Website)"
          description="ReactJS"
          image={bmotors}
        />
        <PortfolioItem
          key="daymash"
          heading="DayMash App"
          description="iOS (Swift), GraphQL"
          image={daymash}
        />
        <PortfolioItem
          key="camera"
          heading="Simple Camera (Library)"
          description="iOS (Swift), AV Foundation"
          image={camera}
        />
        <PortfolioItem
          key="ml"
          heading="Animal Classifier App"
          description="iOS (Swift), Machine Learning"
          image={ml}
        />
      </div>
    </div>
  );
}
