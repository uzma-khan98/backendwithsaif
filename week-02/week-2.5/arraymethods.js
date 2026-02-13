// ?.map, .forEach(), .filter, .find



//* .map() method to modify an array
//* simple array
let stationaryItems = ["pencil", "ruler", "eraser", "scale", "pointer", "ballpen", "pouch"];
stationaryItems.map((item,index,arr) => {
  // console.log(item);
  // const upperItems = item.toUpperCase();
  // console.log(upperItems, index, arr);
  newItems = arr[index] + "-for use";
  // console.log("New items are:", newItems);
})

// * complex array
let allVideos = [
  {
    id: 100,
    title:"Mr Bean Adventures"
  },
  {
    id: 101,
    title: "Pak vs India"
  },
  {
    id: 102,
    title: "Jack and Tom"
  },
  {
    id: 103,
    title:"Psychology"
  },
]
// allVideos.map((singleVideo) => {
//   console.log(singleVideo);
// })
// * OR
allVideos.forEach((singleVideo) => {
  // console.log(singleVideo);
})

// * .filter()-returns a new array that contains only filtered items,satisfying the condition
// let newArray = stationaryItems.filter((item) => item.length === 6)
// console.log(newArray);

// * applied .filter() on allVideos-array to delete a specific video from array
allVideos = allVideos.filter((singleVideo) => {
 return singleVideo.id !== 100;
})
console.log(allVideos);
