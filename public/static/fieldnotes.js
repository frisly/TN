//MENU
function menu() { 
  var element = document.getElementById("hiddenMenuDiv");
  if (element.style.display === "block") {
      element.style.display = "none";
  } else {
      element.style.display = "block";
  }
}



// FIELDNOTESCMS

const url = 'https://spreadsheets.google.com/feeds/cells/1fXSkt5Jsv2_QQZaXbsoAQH7KbGhjdNURe_KHYilzN0w/1/public/full?alt=json'

function Get(url){
  var Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET",url,false);
  Httpreq.send(null);
  return Httpreq.responseText;          
}

var sheet = JSON.parse(Get(url))


var post1visibility = sheet.feed.entry[8].content.$t
var post1title = sheet.feed.entry[9].content.$t
var post1embbed = sheet.feed.entry[10].content.$t
var post1description = sheet.feed.entry[11].content.$t
var post1link = sheet.feed.entry[12].content.$t
var post1linktext = sheet.feed.entry[13].content.$t


var post2visibility = sheet.feed.entry[15].content.$t
var post2title = sheet.feed.entry[16].content.$t
var post2embbed = sheet.feed.entry[17].content.$t
var post2description = sheet.feed.entry[18].content.$t
var post2link = sheet.feed.entry[19].content.$t
var post2linktext = sheet.feed.entry[20].content.$t


var post3visibility = sheet.feed.entry[22].content.$t
var post3title = sheet.feed.entry[23].content.$t
var post3embbed = sheet.feed.entry[24].content.$t
var post3description = sheet.feed.entry[25].content.$t
var post3link = sheet.feed.entry[26].content.$t
var post3linktext = sheet.feed.entry[27].content.$t


var post4visibility = sheet.feed.entry[29].content.$t
var post4title = sheet.feed.entry[30].content.$t
var post4embbed = sheet.feed.entry[31].content.$t
var post4description = sheet.feed.entry[32].content.$t
var post4link = sheet.feed.entry[33].content.$t
var post4linktext = sheet.feed.entry[34].content.$t



console.log(sheet)



document.getElementById("blog").innerHTML = `

<div id="p1" class="w-5/6  md:w-1/2 flex-col ${post1visibility} self-center mb-10">
    <!--POSTTITLE-->
      <h1 class="font-bold text-xl lg:text-2xl mb-4 uppercase text-left leading-tight">${post1title}</h1>
    <!--POSTIMAGE/VIDEO-->
      <div class="w-11/12 mb-6 self-center">${post1embbed}</div>
    <!--POST DESCRIPTION-->
      <div class="h-auto mb-4 self-center">
        <p class="text-sm lg:text-base">${post1description}</p>
      </div>
    <!--POST LINK-->
      <div class="h-auto flex flex-row mb-4 justify-end">
        <a href="${post1link}" class="h-auto mb-4 text-sm hover:text-blue-500">${post1linktext}</a>
      </div>
</div>

<div id="p2" class="w-5/6  md:w-1/2 flex-col ${post2visibility} self-center mb-10">
    <!--POSTTITLE-->
      <h1 class="font-bold text-xl lg:text-2xl mb-4 uppercase text-left leading-tight">${post2title}</h1>
    <!--POSTIMAGE/VIDEO-->
      <div class="w-11/12 mb-6 self-center">${post2embbed}</div>
    <!--POST DESCRIPTION-->
      <div class="h-auto mb-4 self-center">
        <p class="text-sm lg:text-base">${post2description}</p>
      </div>
    <!--POST LINK-->
      <div class="h-auto flex flex-row mb-4 justify-end">
        <a href="${post2link}" class="h-auto mb-4 text-sm hover:text-blue-500">${post2linktext}</a>
      </div>
</div>

<div id="p3" class="w-5/6  md:w-1/2 flex-col ${post3visibility} self-center mb-10">
    <!--POSTTITLE-->
      <h1 class="font-bold text-xl lg:text-2xl mb-4 uppercase text-left leading-tight">${post3title}</h1>
    <!--POSTIMAGE/VIDEO-->
      <div class="w-11/12 mb-6 self-center">${post3embbed}</div>
    <!--POST DESCRIPTION-->
      <div class="h-auto mb-4 self-center">
        <p class="text-sm lg:text-base">${post3description}</p>
      </div>
    <!--POST LINK-->
      <div class="h-auto flex flex-row mb-4 justify-end">
        <a href="${post3link}" class="h-auto mb-4 text-sm hover:text-blue-500">${post1linktext}</a>
      </div>
</div>

<div id="p4" class="w-5/6  md:w-1/2 flex-col ${post4visibility} self-center mb-10">
    <!--POSTTITLE-->
      <h1 class="font-bold text-xl lg:text-2xl mb-4 uppercase text-left leading-tight">${post4title}</h1>
    <!--POSTIMAGE/VIDEO-->
      <div class="w-11/12 mb-6 self-center">${post4embbed}</div>
    <!--POST DESCRIPTION-->
      <div class="h-auto mb-4 self-center">
        <p class="text-sm lg:text-base">${post4description}</p>
      </div>
    <!--POST LINK-->
      <div class="h-auto flex flex-row mb-4 justify-end">
        <a href="${post4link}" class="h-auto mb-4 text-sm hover:text-blue-500">${post4linktext}</a>
      </div>
</div>

<div id="p4" class="w-5/6  md:w-1/2 flex-col ${post4visibility} self-center mb-10">
    <!--POSTTITLE-->
      <h1 class="font-bold text-xl lg:text-2xl mb-4 uppercase text-left leading-tight">${post4title}</h1>
    <!--POSTIMAGE/VIDEO-->
      <div class="w-11/12 mb-6 self-center">${post4embbed}</div>
    <!--POST DESCRIPTION-->
      <div class="h-auto mb-4 self-center">
        <p class="text-sm lg:text-base">${post4description}</p>
      </div>
    <!--POST LINK-->
      <div class="h-auto flex flex-row mb-4 justify-end">
        <a href="${post4link}" class="h-auto mb-4 text-sm hover:text-blue-500">${post4linktext}</a>
      </div>
</div>

<div id="p4" class="w-5/6  md:w-1/2 flex-col ${post4visibility} self-center mb-10">
    <!--POSTTITLE-->
      <h1 class="font-bold text-xl lg:text-2xl mb-4 uppercase text-left leading-tight">${post4title}</h1>
    <!--POSTIMAGE/VIDEO-->
      <div class="w-11/12 mb-6 self-center">${post4embbed}</div>
    <!--POST DESCRIPTION-->
      <div class="h-auto mb-4 self-center">
        <p class="text-sm lg:text-base">${post4description}</p>
      </div>
    <!--POST LINK-->
      <div class="h-auto flex flex-row mb-4 justify-end">
        <a href="${post4link}" class="h-auto mb-4 text-sm hover:text-blue-500">${post4linktext}</a>
      </div>
</div>

`