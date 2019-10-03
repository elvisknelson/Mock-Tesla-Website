<?php
    function OpenCon()
    {
        $dbhost = "localhost";
        $dbuser = "root";
        $dbpass = "Y6iJEw6XXqG5CgDo";
        $db = "accounts";
        $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
        
        return $conn;
    }
        
    function CloseCon($conn)
    {
        $conn -> close();
    }
?>