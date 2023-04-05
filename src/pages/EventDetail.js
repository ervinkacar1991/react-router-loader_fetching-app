import React from "react";
import { json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetail = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetail;

export const loader = async ({ params }) => {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`
  );
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected events" },
      { status: 500 }
    );
  } else {
    const event = await response.json();
    return event;
  }
};
