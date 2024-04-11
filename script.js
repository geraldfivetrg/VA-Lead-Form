var detailsBox = document.getElementById('details-box');
var firstPage = document.getElementById('first-page'); // Add this id to your first page element
var secondPage = document.getElementById('second-page'); // Add this id to your iframe element

// Initially hide the second page
secondPage.style.display = 'none';

document.addEventListener('mouseover', function (e) {
  if (e.target.tagName == 'path') {
    var content = e.target.dataset.name;
    detailsBox.innerHTML = content;
    detailsBox.style.opacity = "100%";
  }
  else {
    detailsBox.style.opacity = "0%";
  }
});

window.onmousemove = function (e) {
  var x = e.clientX,
      y = e.clientY;
  detailsBox.style.top = (y + 20) + 'px';
  detailsBox.style.left = (x) + 'px';
};

document.addEventListener('click', function (e) {
  if (e.target.tagName === 'path') {
    // Hide the first page and show the second page
    firstPage.style.display = 'none';
    secondPage.style.display = 'block';
  }
});

