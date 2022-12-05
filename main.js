import "./style.css";
import runSpiralWorldScript from "./js/script";

const loadFileAsText = () => {
  const preview = document.getElementById("fileOutput");
  const uploadedFile = document.getElementById("uploadedFile").files[0];
  const textFile = /text.*/;

  const fileReader = new FileReader();

  if (uploadedFile.type.match(textFile)) {
    fileReader.onload = function (event) {
      const result = event.target.result.trim();
      preview.innerHTML = runSpiralWorldScript(result);
    };
    fileReader.readAsText(uploadedFile);
  } else {
    alert("Wrong file type, please upload a text file");
  }
};

window.onload = () => {
  document.getElementById("uploadedFile").onchange = (event) => {
    loadFileAsText(event);
  };
};
