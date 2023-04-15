function showBox(id) {
    // Hide all boxes
    var boxes = document.getElementsByClassName('box');
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].classList.remove('active');
    }
  
    // Show the selected box
    var box = document.getElementById(id);
    box.classList.add('active');
  
    // Update active button
    var buttons = document.getElementsByClassName('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
    var activeButton = document.querySelector('button[data-id="' + id + '"]');
    activeButton.classList.add('active');
  }
  
  // Set the first box as active by default
//   document.getElementById('box1').classList.add('active');
//   document.querySelector('button[data-id="box1"]').classList.add('active');