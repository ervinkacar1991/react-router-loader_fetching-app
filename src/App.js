import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Events, { loader as eventsLoader } from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import Error from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { index: true, element: <HomePage /> },

        {
          path: "events",
          element: <EventsRoot />,
          children: [
            {
              index: true,
              element: <Events />,
              loader: eventsLoader,
            },
            { path: ":eventId", element: <EventDetail /> },
            { path: "new", element: <NewEvent /> },
            { path: ":eventId/edit", element: <EditEvent /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
