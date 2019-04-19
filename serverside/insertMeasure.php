<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $conn = new mysqli("localhost","root","","gym");

    if($conn->connect_error){
        echo $conn->connect_error;
    }

    $dateTaken=$_POST["dateTaken"];
    $loginID = $_POST["loginID"];
    $chest = $_POST["chest"];
    $shoulder = $_POST["shoulder"];
    $arms = $_POST["arms"];
    $waist = $_POST["waist"];
    $hips = $_POST["hips"];
    $thigh = $_POST["thigh"];
    $calf = $_POST["calf"];

    $insert = "INSERT INTO measurments(loginID, dateTaken, chest, shoulder,arms, waist, hips, thigh, calf) VALUES ('$loginID','$dateTaken', '$chest','$shoulder','$arms','$waist','$hips','$thigh','$calf')";

    if($conn->query($insert)){
        echo "success";
    }else{
        echo "failed";
    }

?>