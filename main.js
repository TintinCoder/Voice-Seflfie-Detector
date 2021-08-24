console.log('Class 98');
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    var textbox = document.getElementById('textbox');
    textbox.innerHTML = "";
    recognition.start();
}
var textbox = document.getElementById('textbox');
recognition.onresult = function(event) {
    console.log(event);
    var spokenText = event.results[0][0].transcript;
    console.log(spokenText);
    var str = "selfie";
    document.getElementById('textbox').innerHTML = spokenText;
    if (spokenText.includes(str)) {
        console.log(str);
        speak();
    }
}

function speak() {
    var speakSynthesis = window.speechSynthesis;
    var words = "Taking your selfie in 5 seconds";
    console.log(words);
    var utterThis = new SpeechSynthesisUtterance(words);
    speakSynthesis.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function() {
        take_snapshot();
        save();
    }, 5000);
}
// Doing Webcam
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
});
var camera = document.getElementById("camera");
function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = '<img id="selfie" src="'+data_uri+'">';
    });
}
function save() {
    let link = document.getElementById("link");
    let image = document.getElementById("selfie").src;
    console.log(image);
    link.href = image;
    link.click();
}
console.log(camera);