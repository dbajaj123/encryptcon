var facingMode = "user";
var constraints = {
  audio: false,
  video: {
   facingMode: facingMode
  }
};
var canvas = document.getElementById("preview");
var video = document.getElementById('cam');
navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
  console.log(stream);
    window.stream = stream;
    video.srcObject = stream;
    video.onloadedmetadata = function(e) {
            $("#capture").click(function() {
                var context = canvas.getContext('2d');
                context.drawImage(video, 0, 0, 320, 240);
            });
    };
});


$("#submit").click(function() {
 $.ajax({
        type: "POST",
        url: "../Face/main.py",
        data: { param: "" },
        success: callbackFunc
    });
   });

 function callbackFunc(response) {
    // do something with the response
    console.log(response);
}




Promise.all([
  faceapi.nets.faceRecognitionNet.loadFromUri('/public'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/public'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('/public')
]).then(start)