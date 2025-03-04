<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cars";

// Connection banayen
$conn = new mysqli($servername, $username, $password, $dbname);

// Connection ki jaanch karen
if ($conn->connect_error) {
    die("Connection nakam: " . $conn->connect_error);
}

$car_name = $_POST['car_name'];
$model = $_POST['model'];
$price = $_POST['price'];

// Tasveer upload karen
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["image"]["name"]);
move_uploaded_file($_FILES["image"]["tmp_name"], $target_file);
$image_path = $target_file;

$sql = "INSERT INTO cars (car_name, model, image, price) VALUES ('$car_name', '$model', '$image_path', $price)";

if ($conn->query($sql) === TRUE) {
    echo "Naya record kamyabi se ban gaya";
} else {
    echo "Ghalti: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>