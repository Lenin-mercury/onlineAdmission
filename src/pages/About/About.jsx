import React from 'react';

import Carousel from '../../components/Carousel/Carousel';

import Slide1 from '../../img/1.jpg';
import Slide2 from '../../img/2.jpg';
import Slide3 from '../../img/3.jpg';

import "./about.scss"

const About = () => {
    return (
        <>

            <div className="about__carousel">
                <Carousel 
                        Slide1={Slide1}
                        Slide2={Slide2}
                        Slide3={Slide3}
                        imgheight="carousel-img-45vh"
                />
            </div>

            <section className="about row">
               <div className="about__1 col-3">
                
                    <h1>Facts</h1>
                    <hr/>
                      <ul className="about__list">

                          <li>  <i className="fas fa-arrow-right"></i> In Focus
                         </li>

                          <li>  <i className="fas fa-arrow-right"></i> Academic Environments
                          </li>

                          <li>  <i className="fas fa-arrow-right"></i> Diversity of Students
                          </li>

                      </ul>
                 
               </div>

               <div className="about__2 col-6">
                 <h1>College in Focus</h1>
                 <hr/>
                 <div>
                     <h3>
                     Academic Environment
                     </h3>
                     <p>
                     Foreign faculty, flexible and dynamic curriculum, exciting research and global connections are the features that set SRM apart. Students have a wide choice of cutting edge programs including nanotechnology, genetic engineering, remote sensing and GIS, embedded systems or computer forensics to choose from. Most of these courses are offered in close collaboration with foreign universities. Even at UG level specialized engineering programs like Artificial Intelligence, Big Data Analytics, IoT etc. are offered. All the programs offered are approved by UGC and applicable Statutory Councils like AICTE etc.
                     </p>
                 </div>
                 <div>
                     <h3>
                     Diversity of Students
                     </h3>
                     <p>
                     70% of students are from outside Tamil Nadu, with students from USA, Europe, China and other countries.
                     </p>
                 </div>

                 <div>
                     <h3>
                    Semester Abroad Program
                     </h3>
                     <p>
                     Over 200 students sponsored to more than 35 foreign universities like MIT, Carnegie Mellon, UC Davis, Warwick and Western Australia every year. 
                     </p>
                 </div>
                 <div>
                     <h3>
                    Semester Abroad Program
                     </h3>
                     <p>
                     Over 200 students sponsored to more than 35 foreign universities like MIT, Carnegie Mellon, UC Davis, Warwick and Western Australia every year. 
                     </p>
                 </div>

               </div>

               <div className="about__3 col-3">
                 <h1>CAMPUSES</h1>
                <hr/>
                <ul className="about__list">

                    <li>  <i className="fas fa-arrow-right"></i> Adayar
                   </li>

                    <li>  <i className="fas fa-arrow-right"></i> Anna Nagar
                    </li>

                    <li>  <i className="fas fa-arrow-right"></i> Vadapalani
                    </li>

                </ul>

               </div>

            </section>

        </>
    );
};

export default About;