import React, { Component } from "react";
import "./Toyota4Rav.css";
import "./mobile.css";


class ToyotaHeader extends Component {
    render() {   
      return (
            <div>
                <div class="header">
                <div class="sides">
                    <a href="/#" class="logo">2020 TOYOTA RAV4</a>
                </div>
                <nav role="navigation">
                    <div id="menuToggle">

                    <input type="checkbox" />
                    
                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                        <a href="/#"><li>Home</li></a>
                        <a href="/#"><li>Cars</li></a>
                        <a href="/#"><li>Compare Prices</li></a>
                        <a href="/#"><li>Contact Dealership</li></a>
                        <a href="/#"><li>Sale</li></a>
                    </ul>
                    </div>
                </nav>
                <div class="info">
                <h3><a href="#category">Compact SUV</a></h3>
                    <h1>2020 Toyota RAV4</h1>
                    <div class="meta">Received the NHTSA 5-Star Overall Safety Rating</div>
                </div>
                </div>
            </div>
        )
    }
};

export default ToyotaHeader;