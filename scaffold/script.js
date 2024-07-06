const InputFile = document.getElementById("fileInput");
const DropArea = document.getElementById("dropzone");
const ImgView = document.getElementById("fileList")
const Max_file = 5;
const Max_MB = 1;
const ImgLinks = [];


InputFile.addEventListener("change", UploadImg)


function UploadImg (){

  
  const ImgUrl = URL.createObjectURL(InputFile.files[0])
  ImgLinks.push(ImgUrl)
  
  if(ImgLinks.length > 5 ){
    alert("You can upload a maximum of 5 images.")
    return;
  }
// creating the Img Element 
  

// This is to diplay the uploaded img
  const fileItem = document.createElement("div");
  fileItem.className = 'file-item';

  const Img = document.createElement("img");
  Img.src = ImgUrl;
  Img.alt = "Jagadeesh";
  Img.className = "thumbnail";
  // ImgView.appendChild(Img)

  const Input = document.createElement("textarea");
  Input.value= 'description';
  // ImgView.appendChild(Input); 
  
  const actions = document.createElement('div');
  actions.className= "actions";


  const checkIcon = document.createElement('span');
  checkIcon.className= "check-Icon";

  checkIcon.textContent= '✔️';
  checkIcon.addEventListener('click', ()=>{
    alert("Description Has been added.")
    textarea.disabled = true;
  });

  const deleteIcon = document.createElement('span');
        deleteIcon.className = 'delete-icon';
        deleteIcon.textContent = '❌';
        deleteIcon.addEventListener('click', () => {
            fileItem.remove();
        });

        // adding the action buttons to the action div element
        actions.appendChild(checkIcon);
        actions.appendChild(deleteIcon);

        // adding the img and actions to the parent 
        fileItem.appendChild(Img);
        fileItem.appendChild(Input);
        fileItem.appendChild(actions)

        // adding the fileItems to the fileList
        ImgView.appendChild(fileItem);
}

DropArea.addEventListener("dragover", (event)=>{
  event.preventDefault();
});


DropArea.addEventListener("drop", (event)=>{
  event.preventDefault();

  InputFile.files = event.dataTransfer.files;
  console.log(InputFile.files)
  UploadImg();
})






// document.addEventListener("DOMContentLoaded", function () {
//   const dropzone = document.getElementById("dropzone");
//   const fileInput = document.getElementById("fileInput");
//   const fileList = document.getElementById("fileList");
//   const MAX_IMAGES = 5;

//   //Write the code of all the dropzone functionality here

//   function displayFile(file) {
//     const reader = new FileReader();

//     reader.onload = function (e) {
//       const div = document.createElement("div");
//       div.className = "file-name";

//       const img = document.createElement("img");
//       img.src = e.target.result;
//       img.alt = file.name;
//       img.className = "thumbnail";
//       div.appendChild(img);

//       //Complete the function here
//     };
//   }

//   //Function to load the data from localStorage
//   function loadFromLocalStorage() {
//     const storedImagesData = JSON.parse(
//       localStorage.getItem("storedImagesData") || "[]"
//     );
//     console.log("Loaded from localStorage:", storedImagesData);
//     storedImagesData.forEach((data) => {
//       const div = document.createElement("div");
//       div.className = "file-name";

//       const img = document.createElement("img");
//       img.src = data.src;
//       img.className = "thumbnail";
//       div.appendChild(img);

//       // Write rest of the code here
//     });
//   }
// });
