<?php
    header("Access-Control-Allow-Origin: *");
    $conn = new mysqli("localhost","root","","gym");

    if($conn->connect_error){
        echo $conn->connect_error;
    }

    $loginID = $_POST["loginID"];

    $get = "SELECT * FROM payment WHERE loginID='$loginID'";

    $result = $conn->query($get);

    $res_array = array();

    if($result->num_rows>0){
        while($row = $result->fetch_assoc()){
            array_push($res_array,$row);
        }
    } 
    
    echo json_encode($res_array);

?>
