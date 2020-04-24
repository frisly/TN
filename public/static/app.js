const url = 'https://spreadsheets.google.com/feeds/cells/1-SPWaneXIZ46CgGp8xcTTlgHcs1jNgEv-K1tz0-gqsY/1/public/full?alt=json'

function Get(url){
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET",url,false);
  Httpreq.send(null);
  return Httpreq.responseText;          
}

var sheet = JSON.parse(Get(url))

var event1title = sheet.feed.entry[4].content.$t
var event1link = sheet.feed.entry[5].content.$t
var event2title = sheet.feed.entry[7].content.$t
var event2link = sheet.feed.entry[8].content.$t
var event3title = sheet.feed.entry[10].content.$t
var event3link = sheet.feed.entry[11].content.$t


console.log(sheet)


let val = `
<a href="${event1link}">
    <div id="event1" class=" flex border-solid border-2 border-red-200 m-2 h-16 ">
      <h1 class="text-white mt-1 ml-4 font-bold self-center lg:text-xl">${event1title}</h1>
    </div>
</a>
<a href="${event2link}">
<div id="event2" class="border-solid flex border-2 border-yellow-200 m-2 h-16">
<h1 class="text-white mt-1 ml-4 font-bold self-center lg:text-xl">${event2title}</h1>
</div>
</a>

<a href="${event3link}">
<div id="event2" class="flex border-solid border-2 border-blue-200 m-2 h-16">
<h1 class="text-white mt-1 ml-4 font-bold self-center lg:text-xl">${event3title}</h1></div>
</a>

`
document.getElementById('upcomingevents').innerHTML = val;



function menu() { 
  var element = document.getElementById("hiddenMenuDiv");
  if (element.style.display === "block") {
      element.style.display = "none";
  } else {
      element.style.display = "block";
  }
}