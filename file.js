const videos = [
    {
        thumbnail: "Images/img6.jpeg",
        video: "videos/Bootstrap.mp4",
        title: "Learn how to manage your time efficiently",
        profile:"Images/pro8.jpeg",
        channelName:"RoseLove TV",
        numViews: "593k views",
        length: "2 weeks ago"    
    },
    {
        thumbnail: "Images/img8.png",
        video: "videos/Bootstrap.mp4",
        title: "How to get free videos for your mockup",
        profile:"Images/pro3.jpeg",
        channelName:"CamairTV",
        numViews: "93k views",
        length: "2 weeks ago"    
    },
    {
        thumbnail: "Images/im5.jpeg",
        video: "videos/Bootstrap.mp4",
        title: "How to get free videos for your mockup",
        profile:"Images/pro1.jpeg",
        channelName:"Destiny TV",
        numViews: "193k views",
        length: "2 weeks ago"    
    },
    {
        thumbnail: "Images/img4.jpeg",
        video: "videos/Bootstrap.mp4",
        title: "How to get free videos for your mockup",
        profile:"Images/pro1.jpeg",
        channelName:"Destiny TV",
        numViews: "193k views",
        length: "2 weeks ago"    
    },
    {
        thumbnail: "Images/pro7.jpeg",
        video: "videos/Bootstrap.mp4",
        title: "How to get free videos for your mockup",
        profile:"Images/pro1.jpeg",
        channelName:"Destiny TV",
        numViews: "193k views",
        length: "2 weeks ago"    
    },
    {
        thumbnail: "Images/pro1.jpeg",
        video: "videos/Bootstrap.mp4",
        title: "How to get free videos for your mockup",
        profile:"Images/img4.jpeg",
        channelName:"Destiny TV",
        numViews: "193k views",
        length: "2 weeks ago"    
    },

];

const Vmap = document.getElementById('video-cart');
var showinerHtml = videos.map((item)=>{
    return `
    <div class="video-cart">
    <a href="list.html">   
    <div class="image-sec" style="position:relative">
      <img src="${item.thumbnail}" alt="form" class="image">  
      <video  controls="true" autoplay="autoplay" loop="true" muted defaultmuted playsinline class="video">
        <source src="${item.video}" type="video/mp4">
      </video>
</div>
<div class="img-title">
    <div>
        <img src="${item.profile}" alt="logo" style="width:40px; border-radius:50%; height:40px;"/>
    </div>
   <div>
    <h3 class="title">${item.title}</h3>
    <div class="tv-title">
        <span>${item.channelName}</span>
        <div class="views">
            <span>${item.numViews}</span>
            <span>&bull; ${item.length}</span>
        </div>
    </div>
   </div>
</div>
</a>
</div>
    `
});
Vmap.innerHTML = showinerHtml;

let menu = document.getElementById('menu');
const menuClose = document.getElementById('menu-close');
let sideShow = document.querySelector(".toggle");
let sidebar = document.querySelector(".side-bar-container");
const main = document.querySelector(".main-section");
menu.addEventListener('click', ()=>{
    sidebar.style.display = "none";
    sideShow.style.visibility = "visible"
    menuClose.style.display = "block"
    menu.style.display = "none"
    main.style.width = ""
    main.style.transition = "ease-out"
});
menuClose.addEventListener('click', ()=>{
    sidebar.style.display = "block";
    sideShow.style.visibility = "hidden"
    menuClose.style.display = "none"
    menu.style.display = "block"
    main.style.width = "83%"
    main.style.transition = "ease-in"
});

const roll = document.querySelector(".scroll");
const arrows = document.querySelectorAll('.icons');
const tabs = document.querySelectorAll(".scroll div")

const arrowleft = getElementById("angle-left");

//removing active classes
const removeActiveClasses = () =>{
    tabs.forEach(tab=>{
   tab.classList.remove("active");
    })
}

//adding active classes
tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        removeActiveClasses();
    tab.classList.add("active");
    })
})


//arrows
arrows.forEach((icon)=>{
icon.addEventListener('click', ()=>{
  if(icon.id === "angle-left")
  return roll.scrollLeft += -350;

    })
})

