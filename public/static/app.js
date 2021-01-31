
///NAV BAR 

function menu() { 
  var element = document.getElementById("hiddenMenuDiv");
  if (element.style.display === "block") {
      element.style.display = "none";
  } else {
      element.style.display = "block";
  }
}


//// UPCOMING EVENTS

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
//document.getElementById('upcomingevents').innerHTML = val;



//// FIELDNOTESCMS

const url2 = 'https://spreadsheets.google.com/feeds/cells/1fXSkt5Jsv2_QQZaXbsoAQH7KbGhjdNURe_KHYilzN0w/1/public/full?alt=json'

function Get(url2){
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET",url2,false);
  Httpreq.send(null);
  return Httpreq.responseText;          
}

var sheet = JSON.parse(Get(url2))


var post1title = sheet.feed.entry[9].content.$t
var post1description = sheet.feed.entry[11].content.$t

var post2title = sheet.feed.entry[16].content.$t
var post2description = sheet.feed.entry[18].content.$t

var post3title = sheet.feed.entry[23].content.$t
var post3description = sheet.feed.entry[25].content.$t


console.log(sheet)

let val2 =`

<div id="note1" class="h-full flex flex-col w-5/6 flex-shrink-0 border border-black ml-8">
    <div id="miniheader" class="h-1/4 border-b border-black ">
      <div class="px-4 py-4">
        <h1 class="font-bold text-lg">${post1title}</h1>
      </div>
    </div>
    <div id="minitext" class="h-3/4 bg-white text-xs overflow-auto">
      <div class="px-4 py-6 ">
        <p>${post1description}</p>
      </div>
    </div>
</div>
<div id="note2" class="h-full flex flex-col w-5/6 flex-shrink-0 border border-black ml-8">
    <div id="miniheader" class="h-1/4 border-b border-black ">
      <div class="px-4 py-4">
        <h1 class="font-bold text-lg">${post2title}</h1>
      </div>
    </div>
    <div id="minitext" class="h-3/4 bg-white text-xs overflow-auto">
      <div class="px-4 py-6 ">
        <p>${post2description}</p>
      </div>
    </div>
</div>
<div id="note2" class="h-full flex flex-col w-5/6 flex-shrink-0 border border-black ml-8">
    <div id="miniheader" class="h-1/4 border-b border-black ">
      <div class="px-4 py-4">
        <h1 class="font-bold text-lg">${post3title}</h1>
      </div>
    </div>
    <div id="minitext" class="h-3/4 bg-white text-xs overflow-auto">
      <div class="px-4 py-6 ">
        <p>${post3description}</p>
      </div>
    </div>
</div>
<!-- Spacer -->
<div class="invisible h-full flex flex-col w-1/6 flex-shrink-0">
</div>

`

document.getElementById('fn').innerHTML = val2;
