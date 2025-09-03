import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import ImageSlider from "./ImageSlider/imageslider";
import WhyChooseUs from "./Why Choose Us/why_choose_us";
import LogoCarousel from "./Logo/LogoCarousel";
import Upload from "./Upload/upload";
import OurJob from "./Our_Job/OurJob";
import Ask_Question from "./Ask_Question/Ask_Question";
import OurClient from "./Client/ourClient";
import AnyJob from "./AnyJob/AnyJob";

function Home() {
  return (
    <div>
        <Header />
        <ImageSlider/>
        <LogoCarousel/>
        <WhyChooseUs/>
        <Upload/>
        <OurJob/>
        <Ask_Question/>
        <OurClient/>
        <AnyJob/>
        <Footer/>
    </div>
    
  );
}

export default Home;
