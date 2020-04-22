const events = {
  title: 'Hello',
  subline: 'w/ Lupe Maravillosa',
  link: 'https://www.youtube.com'
}

console.log(events.link);


let val = `
<a href="${events.link}"><div id="event1" class=" border-solid border-2 border-red-200 m-2 h-16">
<h1 class="text-white mt-1 ml-4 font-bold">${events.title}</h1>

</div></a>
<a href="${events.link}">
<div id="event2" class="border-solid border-2 border-yellow-200 m-2 h-16">
<h1 class="text-white mt-1 ml-4 font-bold">${events.title}</h1>
</div>
</a>
<a href="${events.link}">
<div id="event2" class="border-solid border-2 border-blue-200 m-2 h-16"></div>
</a>

`


document.getElementById('upcomingevents').innerHTML = val;