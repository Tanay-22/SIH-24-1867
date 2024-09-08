import { Carousel } from "flowbite-react";
import React from "react";
import AlertForm from "../../components/AlertForm";
import ResourcesLinks from "../../components/ResourceLink";
import HomePageForms from "../../components/HomepageForms";

export default function Home() {
  return (
    <div className="mt-8">

      <div className="h-[500px] w-full">
        <Carousel pauseOnHover slideInterval={2000}>
          <img src="/disaster.jpg" alt="Disaster 1" />
          <img src="/disaster2.jpg" alt="Disaster 2" />
          <img src="/disaster3.jpg" alt="Disaster 3" />
          <img src="/disaster4.webp" alt="Disaster 4" />
        </Carousel>
      </div>

      <AlertForm />
      <HomePageForms />
      <ResourcesLinks />

    </div>
  );
}
