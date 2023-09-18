
// var crsr = document.querySelector(".cursor")
// var body = document.querySelector("body");

// body.addEventListener("mousemove",function(dets){
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";

// })

var arr = [
  {
    dp:"https://images.unsplash.com/photo-1527692282582-538da08c9d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGhvdCUyMG1vZGVsc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1694439368032-230a1bad9617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    dp:"https://images.unsplash.com/photo-1625794795682-93354e59a87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fG1vZGVsc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1546017847-9e2177fe4958?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGhvdCUyMG1vZGVsc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    dp:"https://images.unsplash.com/photo-1617253123627-f7e8ddf6a831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxtb2RlbHN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1532347922424-c652d9b7208e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGhvdCUyMG1vZGVsc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    dp:"https://images.unsplash.com/photo-1618374845648-162318f1e486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxtb2RlbHN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1617339860647-358f07e44823?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGhvdCUyMG1vZGVsc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    dp:"https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGhvdCUyMG1vZGVsc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1517805686688-47dd930554b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    dp:"https://images.unsplash.com/photo-1516195851888-6f1a981a862e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fG1vZGVsc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1517805686688-47dd930554b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    dp:"https://images.unsplash.com/photo-1615998555898-b116056b22a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fG1vZGVsc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1615668476535-c18c47a2a852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fG1vZGVsc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    dp:"https://images.unsplash.com/photo-1569210538317-4d53f92a0e21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fG1vZGVsc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://plus.unsplash.com/premium_photo-1677185630234-2939126ae86b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fG1vZGVsc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  }
];
var stories = document.querySelector(".stories");
var clutter ="";
arr.forEach(function(elm,indx){
 clutter += `<div class="story">
 <img id="${indx}" src="${elm.dp}" alt="">
</div>`


});

stories.innerHTML= clutter;

stories.addEventListener("click",function(dets){
  document.querySelector(".fullscreen").style.display="block";
  document.querySelector(".fullscreen").style.backgroundImage=`url(${arr[dets.target.id].story})`
  setTimeout(function(){
  document.querySelector(".fullscreen").style.display="none";
    
  }, 3000);
})
