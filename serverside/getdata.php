<?php
    header("Access-Control-Allow-Origin: *");
    $conn = new mysqli("localhost","root","","gym");

    if($conn->connect_error){
        echo $conn->connect_error;
    }

    $username = $_POST["username"];

    $get = "SELECT loginID, username, name, emailID, dob, address, gender, login_role FROM profile WHERE username='$username'";

    $result = $conn->query($get);

    $res_array = array();

    if($result->num_rows>0){
        while($row = $result->fetch_assoc()){
            array_push($res_array,$row);
        }
    } 
    
    echo json_encode($res_array);

?>