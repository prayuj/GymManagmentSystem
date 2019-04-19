<?php
    header("Access-Control-Allow-Origin: *");
    $conn = new mysqli("localhost","root","","gym");

    if($conn->connect_error){
        echo $conn->connect_error;
    }

    $loginID = $_POST["loginID"];

    $get = "SELECT * from member A JOIN( SELECT loginID,weight current_wt from weight where dateTaken = ( SELECT max(dateTaken) FROM weight WHERE loginID = '$loginID') and loginID = '$loginID')B on A.loginID = B.loginID";

    $result = $conn->query($get);

    $res_array = array();

    if($result->num_rows>0){
        while($row = $result->fetch_assoc()){
            array_push($res_array,$row);
        }
    }

    $get = "SELECT max(date) date from (SELECT date FROM `attendance` WHERE loginID = '$loginID' and status = 1) A" ;
    
    $result = $conn->query($get);       

    if($result->num_rows>0){
        while($row = $result->fetch_assoc()){
            array_push($res_array,$row);
        }
    }

    $get = "SELECT A.P_name FROM (SELECT member.LoginID, package.P_NAME from member left outer join package on member.p_id = package.P_ID) A WHERE loginID = '$loginID'" ;
    
    $result = $conn->query($get);       

    if($result->num_rows>0){
        while($row = $result->fetch_assoc()){
            array_push($res_array,$row);
        }
    }




    echo json_encode($res_array);

?>