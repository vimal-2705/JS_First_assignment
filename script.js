function upDate(previewPic) {
    // Select the div with id="image"
    let imageDiv = document.getElementById("image");
    // Select the div with id="description"
    let descriptionDiv = document.getElementById("description");
    
    // Update the background image of the #image div
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    
    // Update the text content of the #description div with the alt text
    descriptionDiv.innerHTML = previewPic.alt;
  }
  
  function undo() {
    // Select the div with id="image"
    let imageDiv = document.getElementById("image");
    // Select the div with id="description"
    let descriptionDiv = document.getElementById("description");
    
    // Reset the background image of the #image div
    imageDiv.style.backgroundImage = "url('')";
    
    // Reset the text content of the #description div
    descriptionDiv.innerHTML = "Description of the image will appear here.";
  }  