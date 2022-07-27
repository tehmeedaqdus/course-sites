var tl = gsap.timeline({defaults:{duration: .7, ease: Back.easeOut.config(2), opacity: 0}})
var tl0 = gsap.timeline({defaults:{duration: .7, ease: Back.easeOut.config(2), opacity: 0}})

var tl2 = gsap.timeline({defaults:{duration: 1.5, delay:1}})
var tl3 = gsap.timeline({defaults:{duration: 1.5}})

tl.from("#Group_5", {delay: 1, scale: 0, transformOrigin: 'center'}, "=.1")
    .from("#Group_13", {scaleX:0})
    .from("#Group_18", {scaleX:0})
    .from("#Group_23", {scaleX:0})

    // reviewsjs
    const reviews = [
        {
          id: 1,
          name: "susan smith",
          job: "web developer",
          img:
            "./images/avatar2.jpg",
          text:
            "Your first book was extremely helpful for me because, like yourself, I also started off as a pixel-pusher and I liked to make things look pretty without thinking too much of how design really functions. Your book has really helped me to fine-tune my skills in design!Also, courses + tutorials are really PRO quality.",
        },
        {
          id: 2,
          name: "anna johnson",
          job: "web designer",
          img:
            "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          text:
            "If you want to make something beautiful, this is where to start. This is not a programming course, and this is not just a design course. Meng removes that line all together and simply teaches the art of making. From keyboard shortcuts to color theory,Everything you learn here you will use immediately  ",
        },
        {
          id: 3,
          name: "peter jones",
          job: "intern",
          img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
          text:
            "This is amazing what you did. It opens up a whole new world with things that you can learn and develop. Pricing is very affordable and the quality of the website and tutorials are so neat! Keep up with a good work!The quizzes and certificates are  awesome to see it in the platform for students to show their work.",
        },
        {
          id: 4,
          name: "bill anderson",
          job: "web developer",
          img:
            "https://images.unsplash.com/flagged/photo-1576635926157-a2e8edeb0012?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzQxfHxibGFjayUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          text:
            "As an old developer, I bought the first version of design+code on its release date, and 1 month after... I literally quit my company. It was such an eye-opener and comprehensive book, I couldn’t continue to work as before and had an urge for disruption and reinvention. Thanks for being a true lever for my personal career. ",
        },
      ];
      // select items
      const img = document.getElementById("person-img");
      const author = document.getElementById("author");
      const job = document.getElementById("job");
      const info = document.getElementById("info");
      
      const prevBtn = document.querySelector(".prev-btn");
      const nextBtn = document.querySelector(".next-btn");
     
      
      // set starting item
      let currentItem = 0;
      
      // load initial item
      window.addEventListener("DOMContentLoaded", function () {
        const item = reviews[currentItem];
        img.src = item.img;
        author.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
      });
      
      // show person based on item
      function showPerson(person) {
        const item = reviews[person];
        img.src = item.img;
        author.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
      }
      // show next person
      nextBtn.addEventListener("click", function () {
        currentItem++;
        if (currentItem > reviews.length - 1) {
          currentItem = 0;
        }
        showPerson(currentItem);
      });
      // show prev person
      prevBtn.addEventListener("click", function () {
        currentItem--;
        if (currentItem < 0) {
          currentItem = reviews.length - 1;
        }
        showPerson(currentItem);
      });
    //  menu js
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})
// modal js
// Grabs all the Elements by their IDs which we had given them
    let modal = document.getElementById("modal");

    let btn2 = document.getElementById("open-btn");
    let btn3 = document.getElementById("open-btn2");

    let button = document.getElementById("close-btn");

  // We want the modal to open when the Open button is clicked
  btn2.onclick = function() {
    modal.style.display = "block";
    }
  btn3.onclick = function() {
    modal.style.display = "block";
    }
    // We want the modal to close when the OK button is clicked
    button.onclick = function() {
    modal.style.display = "none";
    }
    // The modal will close when the user clicks anywhere outside the modal
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
      }
  