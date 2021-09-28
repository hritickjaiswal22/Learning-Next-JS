import React from "react";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://www.kletech.ac.in/wp-content/uploads/2021/01/IMG_6221-scaled-2560x1280.jpg",
    address: "Some address",
    description: "Some description",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://www.kletech.ac.in/wp-content/uploads/2021/01/IMG_6221-scaled-2560x1280.jpg",
    address: "Some address",
    description: "Some description",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getServerSideProps(context) {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
