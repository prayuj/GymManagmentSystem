<?php
    header("Access-Control-Allow-Origin: *");
    $conn = new mysqli("localhost","root","","gym");

    if($conn->connect_error){
        echo $conn->connect_error;
    }

    $username = $_POST["username"];
    $password = $_POST["password"];

    $check = "SELECT username, password FROM profile WHERE username='$username' AND password='$password'";

    $result = $conn->query($check);


    if($result->num_rows>0){
        echo "success";
    }else{
        echo "failed";
    }
    
?>