<?php 
include "connectiondb.php"; 
$sql="select * from product";
$result=$conn->query($sql);
if(isset($_GET['cond'])&&!empty($_GET['cond']))
{
    $cond=$_GET['cond'];
    $stm=$conn->prepare("SELECT * FROM product where $cond");
}
else
{
    $stm=$conn->prepare("SELECT * FROM product");
}
$stm->execute();
$result=$stm->get_result();

if($result->num_rows>0)
{
    echo json_encode($result->fetch_all(MYSQLI_ASSOC));
}
else
{
    echo "no data";
}





?>