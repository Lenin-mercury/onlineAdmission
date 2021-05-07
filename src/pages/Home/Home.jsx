import React from 'react';
import './home.scss';

import Card from '../../components/Card/Card';
import Carousel from '../../components/Carousel/Carousel';

import Slide1 from '../../img/1.jpg';
import Slide2 from '../../img/2.jpg';
import Slide3 from '../../img/3.jpg';

import img4 from '../../img/a.jpg';
import img5 from '../../img/b.jpg';
import img6 from '../../img/c.jpg';

const Home = () => {
    return (
       <> 
        <section className="home__carousel">
        <Carousel 
            Slide1={Slide1}
            Slide2={Slide2}
            Slide3={Slide3}
            imgheight="carousel-img-85vh"
        />
       

        </section>
        <section className="home__academics ">

            <h1 className="home__academics--header">
                Academics
            </h1>

            <p className="home__academics--subheader">
                School and Faculties
            </p>
                <div className="home__academics--content row">
                    <div className="col-6">
                        <h1 className="home__heading">Engineering</h1>
                        <p className="home__para">We have long been at the forefront of breakthrough research and innovation. We offer several degree programs, major, minor and specializations, as well as research opportunities, to follow</p>

                    </div>
                    <div className="col-6">
                    <img src={img4} alt="eng" className="home__academics--image" />
                    </div>
                </div>
                <div className="home__academics--content row">
                <div className="col-6">
                    <img src={img5} alt="eng" className="home__academics--image" />
                    </div>

                    <div className="col-6 ">
                        <h1 className="home__heading">Medicines</h1>
                        <p className="home__para">We have long been at the forefront of breakthrough research and innovation. We offer several degree programs, major, minor and specializations, as well as research opportunities, to follow</p>
                    </div>
                </div>
                <div className="home__academics--content row">
                    <div className="col-6">
                        <h1 className="home__heading">Management</h1>
                        <p className="home__para">We have long been at the forefront of breakthrough research and innovation. We offer several degree programs, major, minor and specializations, as well as research opportunities, to follow</p>

                    </div>
                    <div className="col-6">
                    <img src={img6} alt="eng" className="home__academics--image" />
                    </div>
                </div>
        </section>

        <section className="home__research">
            <h1 className="home__academics--header"> Research </h1>
            <p className="home__academics--subheader">
                School and Faculties
            </p>
            <div className="home__research--content row">
               
                <Card 
                    title="Data Science" 
                    url={img4} 
                    urltitle="Data Science Image"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione blanditiis voluptas explicabo et labore facilis quasi accusantium adipisci rem, eos dolore, necessitatibus aperiam repudiandae aut quae natus itaque. Dolorem, porro."
                />
                
                <Card 
                    title="Nanotechnology Research" 
                    url={img5} 
                    urltitle="Data Science Image"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione blanditiis voluptas explicabo et labore facilis quasi accusantium adipisci rem, eos dolore, necessitatibus aperiam repudiandae aut quae natus itaque. Dolorem, porro."
                />

                <Card 
                    title="Earthquake Research Cell" 
                    url={img6} 
                    urltitle="Data Science Image"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione blanditiis voluptas explicabo et labore facilis quasi accusantium adipisci rem, eos dolore, necessitatibus aperiam repudiandae aut quae natus itaque. Dolorem, porro."
                />


            </div>
           
        </section>
       </>
    );
};

export default Home;