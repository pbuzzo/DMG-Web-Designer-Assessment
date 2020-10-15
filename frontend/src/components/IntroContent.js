import React, { Component } from "react";
import "./Toyota4Rav.css";
import "./mobile.css";


class IntroContent extends Component {
    render() {   
      return (
          <div>
                <section class="content">
                    <div class="stars-div">
                        <img
                            src="https://beginningboutique.files.wordpress.com/2017/04/five-golden-stars-vector-illustration-isolated-white-background-61815796.jpg"
                            class="stars"
                            alt="5 Star Rating"
                        />
                    </div>
                    <p> 
                        Maryland drivers value reliability, performance, and comfort in a new crossover, 
                        which is why the Toyota RAV4 is such a popular choice. This year in 2020, the 
                        RAV4 goes even further with the introduction of the TRD Off-Road model. This 
                        performance-oriented trim is outfitted with enhanced features like all-terrain 
                        tires, a TRD Off-Road suspension kit with red coil springs, and other signature 
                        TRD add-ons that will allow you to tackle any terrain with ease.<br></br><br></br>
                        If your focus is fuel efficiency, then the newly redesigned 2020 ​RAV4 Hybrid​ will 
                        fulfill your wildest dreams. It’s the fastest RAV4 yet, with an EPA estimated 40 MPG combined. 
                        There are a total of ten trim levels on the 2020 Toyota RAV4 that fit different 
                        lifestyles and budgets, so come on in to DMG Toyota to find yours!
                    </p>
                </section>
          </div>

        )
    }
};

export default IntroContent;