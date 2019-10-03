<?php
    include 'db_connection.php';
    $conn = OpenCon();

    $user = $_POST['username'];
    $pass = $_POST['password'];

    $query = "SELECT * FROM users WHERE username='$user' AND pass = md5('$pass')";
    $results = mysqli_query($conn, $query);
    
    if(mysqli_num_rows($results) == 1)
    {
        echo "Logged in as: ";
        echo $_POST['username'];

        //header('location: ../index.html');
    }
    else
    {
        echo "No User Found";
    }

    // CloseCon($conn);
?>