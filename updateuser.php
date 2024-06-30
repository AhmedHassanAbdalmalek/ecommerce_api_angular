<?php

include "connectiondb.php"; 
$data = json_decode(file_get_contents("php://input"), true);


//$result=$conn->query($sql);
if(isset($data['description'])&&isset($data['category'])&&isset($data['price']))
{
    // $sql="select * from employee";
    // $stm=$conn->prepare("SELECT * FROM employee where $cond");
    // $stm->execute();
    $id=$_GET['id'];
    $description=$data['description'];
    $price=$data['price'];
    $category=$data['category'];
    $sql="update product set description=' $description' , price='$price' , category_id_prod_fk=' $category'  where product_id= $id";
    $stm=$conn->prepare($sql);
    // $stm->bind_param("i", $id);
    // $stm->execute();
if($stm->execute())
{
    echo json_encode(array(" record update success"));
}
else
{
    echo json_encode(array(" failed record update"));
}


}

?>
