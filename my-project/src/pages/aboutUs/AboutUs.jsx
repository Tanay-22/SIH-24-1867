import { Timeline } from 'flowbite-react'
import React from 'react'
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

export default function AboutUs() {
  return (
    <div className='flex justify-center items-center mt-8'>
      <Timeline className='m-10'>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>September 2024</Timeline.Time>
          <Timeline.Title>Who Are We?</Timeline.Title>
          <Timeline.Body>
                <b>Sanrakshak</b> is an innovative platform designed to provide real-time disaster information by pulling live data <br></br>
                from social media and news sources. Our goal is to enhance community safety by offering up-to-date details on <br></br>
                current, past, and upcoming disasters. We also provide critical safety tips, contact numbers, and location information <br></br>
                through our advanced AI, ensuring that users are well-informed and prepared.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>September 2024</Timeline.Time>
          <Timeline.Title>What Makes Us Different from Others?</Timeline.Title>
          <Timeline.Body>
                <b>Sanrakshak</b> distinguishes itself with its comprehensive approach to disaster management. We integrate live data from <br/>
                multiple sources to offer the latest disaster updates, complemented by an interactive dashboard that visualizes <br/>
                real-time data and tracks historical and future events. Our platform's AI capabilities provide valuable safety tips, <br/>
                emergency contact details, and precise location information, making us a unique and reliable resource for disaster awareness.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>September 2024</Timeline.Time>
          <Timeline.Title>Why Choose Us?</Timeline.Title>
          <Timeline.Body>
                Choosing <b>Sanrakshak</b> means accessing a robust and dynamic disaster management tool. Our platform combines real-time <br/>
                data aggregation with AI-driven insights to deliver accurate and timely information. With features like an interactive <br/>
                dashboard and comprehensive safety resources, Sanrakshak is committed to supporting community preparedness and enhancing <br/>
                safety during emergencies.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
    </div>
  )
}
