const users = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Software Developer",
    info: "Experienced in full-stack development with a focus on React and Node.js.",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Project Manager",
    info: "Skilled in project management and agile methodologies with a track record of successful project delivery.",
  },
  {
    id: 3,
    name: "Carol Williams",
    role: "UI/UX Designer",
    info: "Passionate about creating user-friendly interfaces and enhancing user experiences through design.",
  },
  {
    id: 4,
    name: "David Brown",
    role: "Data Scientist",
    info: "Expert in data analysis and machine learning, with experience in Python and R.",
  },
  {
    id: 5,
    name: "Eva Green",
    role: "Marketing Specialist",
    info: "Specializes in digital marketing strategies, content creation, and social media management.",
  },
];

// selcting items from html

let author = document.getElementById("author");
let role = document.getElementById("role");
let info = document.getElementById("info");
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");

let curentItem = 0;

function setUser(user) {
  author.textContent = users[user].name;
  role.textContent = users[user].role;
  info.textContent = users[user].info;
}

window.addEventListener('DOMContentLoaded', setUser(curentItem))

nextBtn.addEventListener("click", () => {
    curentItem++;
    if (curentItem>users.length-1) {
        curentItem=0
    }
  setUser(curentItem);
});

prevBtn.addEventListener("click", () => {
  curentItem--;
  if (curentItem < 0) {
    curentItem = users.length-1;
  }
  setUser(curentItem);
});

// console.log(users);
