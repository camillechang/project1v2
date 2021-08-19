// Pure javascript
function createNav() {
    var previous = "";
    var current = "PROJECTS";
  
    changePage();
    changeNavItem();
    // console.log("----line8---------");
    document.querySelectorAll(".navbar_item").forEach(function (element) {
      // navbar click event
      element.onclick = function (event) {
        event.preventDefault();
        var to = event.target.getAttribute("href");
        // console.log(to);
        push(to);
      };
    });
  
    function push(to) {
      previous = current;
      current = to;
  
      changePage();
      changeNavItem();
    }
  
    function changePage() {
      var className = "page--active";
  
      if (previous) {
        var previousPage = document.querySelector("#" + previous);
        previousPage.classList.remove(className);
        // console.log(previousPage);
      }
  
      var page = document.querySelector("#" + current);
      page.classList.add(className);
      // console.log(page);
    }
  
    function changeNavItem() {
      var className = "navbar_item--active";
      if (previous) {
        var previousNavItem = document.querySelector('[href="' + previous + '"]');
        previousNavItem.classList.remove(className);
      }
  
      var navItem = document.querySelector('[href="' + current + '"]');
      navItem.classList.add(className);
    }
  }
  
  function main() {
    createNav();
  }
  
  main();