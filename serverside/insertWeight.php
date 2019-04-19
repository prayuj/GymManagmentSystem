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
    $weight = $_POST["weight"];

    $insert = "INSERT INTO weight(loginID, dateTaken, weight) VALUES ('$loginID','$dateTaken','$weight')";

    if($conn->query($insert)){
        echo "success";
    }else{
        echo "failed";
    }

?>