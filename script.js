  // Handler when the DOM is fully loaded
  var flag = true;
  // browsers limit the number of concurrent audio contexts, so you better re-use'em
  function initAlarm() {
      if (document.getElementById("audioAlarm") == null) {
          var x = document.createElement("AUDIO");
          x.id = "audioAlarm";
          x.src = "ocean.mp3";
          document.getElementById("body").appendChild(x);

          x.loop = true;
          x.autoplay = true;
      }
      if (flag) {
          document.getElementById("audioAlarm").play();
          flag = false;
      } else {
          document.getElementById("audioAlarm").pause();
          flag = true;
      }
  }