<?php 
include "connectiondb.php"; 
$data = json_decode(file_get_contents("php://input"), true);
$sql="select * from user";
$result=$conn->query($sql);
if(!empty($data['username'])&&!empty($data['password']))
{
    $username=$data['username'];
    $password=$data['password'];
    $stm=$conn->prepare("SELECT * FROM user where u_username='$username' and u_password='$password'");
    $stm->execute();
    $result=$stm->get_result();
   // var_dump($result);
   
    if($result->num_rows>0){
        
        echo json_encode(array("messege"=>"login success"));
    }
    else
    {echo json_encode(array("messege"=>"login failed"));}
}






 



    
