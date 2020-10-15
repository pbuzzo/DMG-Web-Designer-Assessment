import React, { Component } from "react";
import "./Toyota4Rav.css";
import "./mobile.css";


class DescriptionContent extends Component {
    render() {   
      return (
        <div>
            <section class="about bg-light">
            <div class="container">
                <div class="grid-2">
                <div class="center">
                    <img
                        class="win-win-section"
                    />
                </div>
                <div class="right">
                    <h3>Performance Features: The 2020 RAV4 and RAV4 Hybrid</h3>
                    <br></br>
                    <p>
                    The daily commute is much more thrilling when powered by the 203-hp Dynamic 
                    Force 2.5L four-cylinder engine of the 2020 Toyota RAV4, paired with its 
                    smooth-shifting 8-speed automatic transmission. Drivers of Hunt Valley and 
                    Cockeysville can choose between front or all-wheel drive for their RAV4, 
                    and have the ability to change between three drive modes: SPORT Mode for 
                    power and punch, ECO Mode for optimum efficiency, and NORMAL Mode for the 
                    perfect balance of both.

                    </p>
                </div>
                </div>
            </div>
        </section>
        <div class="w3-row-padding w3-container">
            <div class="w3-content">
                <div class="w3-twothird">
                
                <p class="w3-padding-32" id="float-copy">
                    &nbsp;&nbsp;&nbsp;&nbsp;The 2020 RAV4 Hybrid is powered by a 2.5L Toyota 
                    Hybrid System II engine that pumps out 219-hp and 149 lb-ft of 
                    torque. It uses a CVT to send power to the wheels, giving it better 
                    fuel economy than the standard gasoline engine. 
                    <br></br><br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;So, even 
                    though you’ll be maxing out on performance, you’ll be minimizing 
                    fuel consumption with the EPA estimated 41 MPG city and 38 MPG highway. 
                    This is a unique power train option for this class and price point, 
                    so there aren’t many vehicles that can match the exceptional 
                    performance and incredible fuel economy that the 2020 RAV4 Hybrid 
                    offers. It’s a no brainer for the penny pincher who desires the 
                    power and reliability of a high-performance vehicle.
                </p>
                </div>

                <div class="w3-third w3-center">
                <img
                    class="performance-section"
                />
                </div>
            </div>
            </div>
            <section class="about bg-light">
                <div class="container">
                    <div class="grid-2">
                    <div class="center">
                        <img
                            class="features-section"
                        />
                    </div>
                    <div class="right">
                        <h3>Design & Technology: The 2020 RAV4 and RAV4 Hybrid</h3>
                        <br></br>
                        <p>
                            The RAV4 Adventure model is equipped 
                            with a Dynamic Torque Vectoring All-Wheel Drive system that disconnects 
                            the wheel that is spinning and adds additional power to the ones that 
                            have traction. It also has Rear Driveline Disconnect to improve fuel 
                            economy by disconnecting power from the rear axle when possible. 
                        </p>
                    </div>
                    </div>
                </div>
            </section>

            <div class="w3-row-padding w3-container">
            <div class="w3-content">
                <div class="w3-third w3-center">
                    <img
                        class="design-section"
                    />
                </div>     
                <div class="w3-twothird">
                    <p id="float-copy">
                        &nbsp;&nbsp;&nbsp;&nbsp;Every 2020 RAV4 has an incredibly smooth ride and controlled handling thanks 
                        to its multi-link rear suspension and longer, wider stance. Plus, 
                        with every All-Wheel Drive gas model, you’ll get Multi-Terrain Select 
                        with four modes: MUD & SAND, ROCK & DIRT, SNOW and NORMAL. That way, 
                        you’ll be easily equipped for whatever surface you’re driving into. 
                        There is no question that the 2020 Toyota RAV4 and RAV4 Hybrid can handle 
                        the steep inclines around​ ​western Maryland​ ​or the tough road conditions 
                        of Baltimore County winters.
                    </p>
                </div>
            </div>
        </div>

        <section class="about bg-light">
            <div class="container">
                <div class="grid-2">
                <div class="center">
                    <img
                        class="safety-section"
                    />
                </div>
                <div class="right">
                    <h3>Safety Features: The 2020 RAV4 and RAV4 Hybrid</h3>
                    <br></br>
                    <p>
                    Safety is first and foremost with Toyota, and it’s demonstrated 
                    in every one of their vehicles. The residents of Baltimore will 
                    appreciate the added standard safety features built into all 
                    2020 RAV4 models. Of course, ​Toyota Safety Sense 2.0​ comes 
                    standard on all trim levels and includes pedestrian detection, 
                    lane departure alert with steering assist, lane tracing assist, 
                    automatic high beams, dynamic radar cruise control, and road sign assist.
                    </p>
                </div>
                </div>
            </div>
        </section>
        <div class="w3-row-padding w3-container">
            <div class="w3-content">
                <div class="w3-twothird">
                
                <p class="w3-padding-32" id="float-copy">
                    &nbsp;&nbsp;&nbsp;&nbsp;The advanced airbag system and 
                    forward collision detection will help keep the driver 
                    and passengers safe in the event of a crash. Traction 
                    and stability control as well as disc brakes all around 
                    are also included. 
                    <br></br><br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;The 2020 RAV4 has Safety Connect®, 
                    which provides emergency assistance, a stolen vehicle 
                    locator, roadside assistance and automatic collision 
                    notification. With all of these features and more, you 
                    can trust the RAV4 to get you and your family to your destination safely.
                </p>
                </div>

                <div class="w3-third w3-center">
                <img
                    class="safety-section-two"
                />
                </div>
            </div>
        </div>
        <hr class="solid"></hr>
        </div>
        )
    }
};

export default DescriptionContent;