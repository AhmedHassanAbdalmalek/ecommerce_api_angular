<?php
include "connectiondb.php";
$data=json_decode(file_get_contents("php://input"),true);
//var_dump($data);
$username=$data['username'];
$password=$data['password'];
$usertype=$data['usertype'];
if(!isset($username)||!isset($password)||!isset($usertype))
{
    echo json_encode(['status'=>"error",'message'=>'parameter missing']);
}
if(empty($username)||empty($password)||empty($usertype))
{
    echo json_encode(['status'=>"error",'message'=>'parameter empty']);
}
else{

    $sql="INSERT INTO `user`(`u_username`, `u_password`, `user_type`) VALUES ('$username','$password','$usertype')";
    $result=$conn->query($sql);
    if($result)
    {
        echo json_encode(['status'=>"success",'message'=>'data inserted']);
    }
    else
    {
        echo json_encode(['status'=>"error",'message'=>'data not inserted']);
    }
}


?>