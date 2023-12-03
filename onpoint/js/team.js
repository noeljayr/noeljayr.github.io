const teamContainer = document.querySelector(".team-container");
const team = [
  {
    id: 1,
    name: "Develious Chiuye",
    position: "Managing Director",
    img: "t-1.jpg",
  },
  {
    id: 2,
    name: "Rossana Chembezi",
    position: "Chief Operations Officer",
    img: "t-2.jpg",
  },
  {
    id: 3,
    name: "Name",
    position: "Finance Operations Officer",
    img: "",
  },
  {
    id: 4,
    name: "Name",
    position: "Customer Support  Officer",
    img: "",
  },
  {
    id: 5,
    name: "Name",
    position: "Customer Support  Officer",
    img: "",
  },
  {
    id: 6,
    name: "Name",
    position: "Business Consultant Supervisor",
    img: "",
  },
];

if (page == "Home" || page == "Profile") {
  function diplayTeam() {
    team.forEach((member) => {
      var memberDiv = document.createElement("div");
      memberDiv.className = "member";

      if (member.img == "" || member.img == null) {
        memberDiv.classList.add("no-img");
        member.img = "default.svg";
      }
      memberDiv.innerHTML = `

            <span class="img">
              <img src="public/images/${member.img}" alt="" />
            </span>
            <span class="info">
              <span class="name">${member.name}</span>
              <span class="position">${member.position}</span>
            </span>
          `;

      teamContainer.appendChild(memberDiv);
    });
  }

  diplayTeam();
}else if(page == "Dashboard"){
    team.forEach((member) => {
      var memberDiv = document.createElement("div");
      memberDiv.className = "card";
      memberDiv.id = member.id;

      if (member.img == "" || member.img == null) {
        memberDiv.classList.add("no-img");
        member.img = "default.svg";
      }
      memberDiv.innerHTML = `

           <div class="img">
              <img src="../public/images/${member.img}" alt="" />
            </div>
            <span class="name">${member.name}</span>
            <span class="position">${member.position}</span>
            <div class="btn-container">
              <span class="cta edit-btn"><i class="bi bi-pencil-square"></i></span>
              <span class="cta delete"><i class="bi bi-trash3-fill"></i></span>
            </div>


          `;

      teamContainer.appendChild(memberDiv);
    });
}


const editBtns = document.querySelectorAll(".edit-btn")
const deleteBtns = teamContainer.querySelectorAll(".delete")

if(editBtns){
  editBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      initilalizeEditModal(btn, editMemberForm);
    });
  });
}

if (deleteBtns) {
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      initilalizeDeleteModal(btn, deleteMemberForm);
    });
  });
}