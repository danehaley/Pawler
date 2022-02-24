import { useContext } from "react";
import AppContext from "./AppContext";
import React from "react";

function CallContext() {
  const context = useContext(AppContext);
  return context;
}

function AppContextProvider({ children }) {
  const dateToday = new Date();

  const value = {
    appName: "Pawler",
    appUrl: "http://localhost:3000",
    appVer: "0.0.1",
    appYear: dateToday.getFullYear(),
    createdBy: "Dane Dobra",
    createdByEmail: "danehaley22@gmail.com",
    ipsum:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae mi eget mauris dignissim rhoncus. Integer ullamcorper diam mi, nec consectetur lectus tristique vel. Aenean aliquet fermentum pulvinar. Duis sit amet convallis urna, condimentum sagittis lorem. Quisque neque nunc, vestibulum in pharetra et, efficitur non ex. Duis vitae leo non risus rhoncus euismod. Phasellus elementum elit sit amet metus tempus scelerisque. Ut eget velit mauris. Nullam non pharetra est. Phasellus convallis mauris tellus, et viverra turpis semper id. Praesent massa orci, bibendum nec accumsan quis, auctor nec tellus. Cras enim magna, blandit blandit suscipit in, ultrices et nibh. Ut porta, diam gravida eleifend sollicitudin, odio sem laoreet quam, quis pellentesque mi libero at urna. Mauris nisl orci, semper finibus sodales non, sagittis in nulla. Duis et lectus nec dolor bibendum eleifend eu in risus. Integer in mi pulvinar, fermentum purus vel, mattis libero. Aenean consequat nibh in turpis faucibus malesuada. Vestibulum accumsan, ante ut lobortis faucibus, risus nibh gravida quam, id ultricies elit sapien non sapien. In lobortis justo et turpis rutrum varius. Cras sapien dui, venenatis ac interdum et, efficitur eget lacus. Nam turpis dolor, venenatis vel finibus nec, malesuada a elit. Vestibulum congue ex justo, in malesuada ante porttitor vitae. Maecenas quam velit, finibus vel augue eu, dignissim malesuada felis. Mauris tempor aliquam neque a facilisis. Vestibulum vulputate suscipit diam a finibus. Aenean quis luctus libero.",
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { CallContext, AppContextProvider };
