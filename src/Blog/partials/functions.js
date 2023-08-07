import { useState } from "react";

const useFunction = () => {
  const arr = [];
  const [time, setTime] = useState();
  const [content, setContent] = useState();
  const [date, setDate] = useState();
  const [search, setSearch] = useState("");

  //   getting and storing the intial date
  const getDate = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    setTime({ year, month, day, hour, min });
  };

  // getting textContent of the InputDiv and storing them
  const handleContentChange = (e) => {
    const content_child = e.target.childNodes;
    content_child.forEach((child) => {
      arr.push(child.textContent);
    });
    setContent(arr);
  };

  // modifying the date gotten from "getDate()" and providing users the time span of a post
  function handleModifiedDate(blogs) {
    if (blogs) {
      const { year, month, day, hour, min } = blogs.time;
      let date = new Date();
      let modifiedyear = date.getFullYear();
      let modifiedmonth = date.getMonth() + 1;
      let modifiedmin = date.getMinutes();
      let modifiedhour = date.getHours();
      let modifiedday = date.getDate();
      const newMonth = modifiedmonth - month;
      const newDay = modifiedday - day;
      const newMinute = modifiedmin - min;
      const newHour = modifiedhour - hour;

      modifiedyear > year
        ? setDate(`${day}-${month}-${year}`)
        : newMonth === 1
        ? setDate(`${newMonth} month ago`)
        : modifiedmonth > month
        ? setDate(`${newMonth} months ago`)
        : newDay === 1
        ? setDate(`${newDay} day ago`)
        : modifiedday > day
        ? setDate(`${newDay} days ago`)
        : newHour === 1
        ? setDate(`${newHour} hour ago`)
        : modifiedhour > hour
        ? setDate(`${newHour} hours ago`)
        : newMinute === 1
        ? setDate(`${newMinute} minute ago`)
        : modifiedmin > min
        ? setDate(`${newMinute} minutes ago`)
        : modifiedmin === min
        ? setDate("Just now")
        : console.log("none worked");
    }
  }

  // handle search function
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //   returning the functions
  return {
    getDate,
    time,
    handleContentChange,
    content,
    handleModifiedDate,
    date,
    search,
    handleSearch,
  };
};

export default useFunction;
