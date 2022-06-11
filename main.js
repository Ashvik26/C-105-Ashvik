Webcam.set({
    width:350,
    height:300,
    image_format:"jpeg",
    jpeg_quality:100
});
var cam=document.getElementById("camera");
Webcam.attach(cam);
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="photo" src="'+data_uri+'">';
    });
}
console.log("ml5 version",ml5.version);
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vThXHLOc2/model.json",model_loaded);
function model_loaded(){
    console.log("model has loaded");
}
function identify(){
    var image=document.getElementById("photo");
    classifier.classify(image,got_result);
}
function got_result(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("objectname").innerHTML=results[0].label;
    document.getElementById("decimalaccuracy").innerHTML=results[0].confidence.toFixed(3);
}
}