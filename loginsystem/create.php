<?php
    include 'db_connection.php';

    $conn = OpenCon();

    $user = $_POST['username'];
    $pass1 = $_POST['password1'];
    $pass2 = $_POST['password2'];

    $query = "INSERT INTO users (username, pass) VALUES ('$user', md5('$pass1'))";

    if($_POST['password1'] == $_POST['password2'])
    {
        if($_POST['password1'] != '')
        {
            $results = mysqli_query($conn, $query);
            echo $user;
            echo " New Account Created Successfully";
        }
        else
        {
            echo "Password Cannot be blank";
        }
    }
    else
    {
        echo "Passwords did not match";
    }

    // CloseCon($conn);
?>