<?php

define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'barber');

$conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD);


$tablename = "contacts";

if ($_SERVER['REQUEST_METHOD'] == "POST") {

    $sql = "USE barber;";
    $conn->query($sql);
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];

    $stmt = $conn->prepare("INSERT INTO $tablename(fname,lname,email,subject) " . "VALUES ('$fname','$lname','$email','$subject');");
    if (!$stmt) {
        echo "Error preparing statement " . htmlspecialchars($conn->error);
    }
    $stmt->execute();
    $stmt->close();

}
header("location:contact.html");
?>
