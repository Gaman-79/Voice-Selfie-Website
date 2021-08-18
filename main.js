var SpeechRecognition=window.webkitSpeechRecognition;
recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function (event){
    console.log(event);
    content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if (content=="take my selfie"){
    console.log("taking Selfie");    
    speak();
}}// It Will Recognize The Voice
function speak(){
    synt=window.speechSynthesis;
    speakdata="Taking Your Selfie in 2 seconds";
    weirdman=new SpeechSynthesisUtterance(speakdata);
    synt.speak(weirdman);
    Webcam.attach("camera");
    setTimeout(function(){
        takesnapshot();
        save();
    },2000);
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 camera=document.getElementById("camera");
function takesnapshot(){
Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML='<img id="selfieimg" src="'+data_uri+'">';
});
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfieimg").src;
    link.href=image;
    link.click();
}