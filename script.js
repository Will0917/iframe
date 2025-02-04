function changeBackground() {
        var checkBox = document.querySelector("input[type=checkbox]");
        if (checkBox.checked == true) {
          document.body.style.backgroundImage = "url('253B6CCC-3E8A-40F1-AE73-3C1A4611636D.jpeg')";
          document.querySelectorAll("#buttons-container button, #sidebar, #search-container button").forEach(function(elem) {
            elem.style.backgroundColor = "#908d9e";
          });
        } else {
          document.body.style.backgroundImage = "url('5E4F2962-8125-477E-965F-6FD590C2129E.jpeg')";
          revertColors();
        }
      }

      function revertColors() {
        document.querySelectorAll("#buttons-container button, #sidebar, #search-container button").forEach(function(elem) {
          elem.style.backgroundColor = elem.id == "menu-btn" ? "transparent" : "#bfbfbf";
        });
      }

 function loadIframe(url) {
        const iframeContainer = document.getElementById("iframe-container");
        iframeContainer.innerHTML = "";
        const iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.style.width = "100%";
        iframe.style.height = (window.innerHeight - 50) + "px";
        iframeContainer.appendChild(iframe);
      }
      localStorage.setItem("sLink", sLink);

 // Add the toggleSidebar function
      function toggleSidebar() {
        const sidebar = document.getElementById("sidebar");
        const menuBtn = document.getElementById("menu-btn");
        const isOpen = sidebar.style.right === "0px";
        sidebar.style.right = isOpen ? "-300px" : "0px";
        menuBtn.innerHTML = isOpen ? "&#9776;" : "&#x2715;";
        if (checkBox.checked == true) {
          sidebar.style.backgroundColor = "#908d9e";
        } else {
          sidebar.style.backgroundColor = "#bfbfbf";
        }
      }

 const sLink = localStorage.getItem('sLink');
      const iframe = document.querySelector('iframe');
      iframe.src = sLink;
      let isDragging = false;
      let currentX;
      let currentY;
      let initialX;
      let initialY;
      let xOffset = 0;
      let yOffset = 0;
      const button = document.querySelector('.moveable-button');
      button.addEventListener("touchstart", dragStart, false);
      button.addEventListener("touchend", dragEnd, false);
      button.addEventListener("touchmove", drag, false);

      function dragStart(e) {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
        if (e.target === button) {
          isDragging = true;
        }
      }

      function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
      }

      function drag(e) {
        if (isDragging) {
          e.preventDefault();
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
          xOffset = currentX;
          yOffset = currentY;
          setTranslate(currentX, currentY, button);
        }
      }

      function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
      }
