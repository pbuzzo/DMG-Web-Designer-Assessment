import React, { Component } from "react";
import "./Toyota4Rav.css";
import "./mobile.css";
import TrimFeatures from "./TrimFeatures";
import DescriptionContent from "./DescriptionContent";
import IntroContent from "./IntroContent";
import ToyotaHeader from "./ToyotaHeader";

class Toyota4Rav extends Component {
    render() {   
      return (
        <html>
            <body>
                <ToyotaHeader />
                <IntroContent />
                <DescriptionContent />
                <TrimFeatures />

            </body>
        </html>
      )
    }
};

export default Toyota4Rav;