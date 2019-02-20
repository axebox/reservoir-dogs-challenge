<?php

// DON'T REMOVE THIS: Used to simulate up to 1 second network latency
usleep(rand(0, 1000000));

// HINT: PDO connection string
$dsn = 'sqlite:' . __DIR__ . '/../../data/database.sqlite';

if (isset($_GET["alias"])) {

  $alias = $_GET["alias"];

  $dbh  = new PDO($dsn) or die("cannot open the database");
  $query =  "SELECT * FROM robber WHERE alias='" . $alias . "'";

  $stmt = $dbh->query($query);

  $fetch = $stmt->fetch(\PDO::FETCH_ASSOC);

  $data = [
    'alias' => $fetch['alias'],
    'name' => $fetch['name']
  ];

  header('Content-Type: application/json');
  echo json_encode($data);

}

$dbh = null;
