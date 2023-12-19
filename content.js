//Version 0.2
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "showGallery") {
      var discussions = document.getElementsByClassName("discussion");
      if (discussions.length > 0) {
        var gallery = document.createElement("div");
        gallery.id = "gallery";
        gallery.style.position = "fixed";
        gallery.style.top = "0";
        gallery.style.left = "0";
        gallery.style.width = "100%";
        gallery.style.height = "100%";
        gallery.style.backgroundColor = "black";
        gallery.style.zIndex = "9999";
  
        var currentIndex = 0;
        var contentDiv = document.createElement("div");
        contentDiv.className = "galleryContent"
        /*style.position = "absolute";
        contentDiv.style.top = "10%";
        contentDiv.style.left = "15%";
        contentDiv.style.transform = "translate(-15%, -10%)";
        contentDiv.style.backgroundColor = "white";
        contentDiv.style.padding = "20px";
        contentDiv.style.overflow = "auto";
        contentDiv.style.maxHeight = "90vh";  // Adjust the maximum height as needed
        contentDiv.style.fontSize = "20px";  // Adjust the font size as needed*/
        
        var discussionContent = discussions[currentIndex].innerHTML;
        contentDiv.innerHTML = discussionContent;
        gallery.appendChild(contentDiv);
  
        var previousButton = document.createElement("button");
        previousButton.innerText = "Previous";
        previousButton.style.position = "fixed";
        previousButton.style.top = "50%";
        previousButton.style.left = "10px";
        previousButton.style.transform = "translateY(-50%)";
        previousButton.addEventListener("click", function() {
          currentIndex = (currentIndex - 1 + discussions.length) % discussions.length;
          discussionContent = discussions[currentIndex].innerHTML;
          contentDiv.innerHTML = discussionContent;
        });
        gallery.appendChild(previousButton);
  
        var nextButton = document.createElement("button");
        nextButton.innerText = "Next";
        nextButton.style.position = "fixed";
        nextButton.style.top = "50%";
        nextButton.style.right = "10px";
        nextButton.style.transform = "translateY(-50%)";
        nextButton.addEventListener("click", function() {
          currentIndex = (currentIndex + 1) % discussions.length;
          discussionContent = discussions[currentIndex].innerHTML;
          contentDiv.innerHTML = discussionContent;
        });
        gallery.appendChild(nextButton);
  
        var exitButton = document.createElement("button");
        exitButton.innerText = "Exit";
        exitButton.style.position = "fixed";
        exitButton.style.top = "10px";
        exitButton.style.right = "10px";
        exitButton.addEventListener("click", function() {
          gallery.remove();
        });
        gallery.appendChild(exitButton);
  
        document.body.appendChild(gallery);
      }
    }
  });