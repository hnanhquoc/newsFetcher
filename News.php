<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
<link rel="stylesheet" type="text/css" href="MyCSS.css">
<title>My Project</title>
</head>
<?php
$url = (isset($_GET["url"])) ? substr($_GET["url"], 1, -1) : "https://vnexpress.net/rss/tin-moi-nhat.rss";
include('Functions.php');
$f = new Functions();
$f->GetItemRSS($url);
?>
<body>
<div id="mysidenav" class="sidenav">
	<span onclick="SideNav()" class="closebtn" style="cursor:pointer;color: white">&times;</span>
	<form method="POST" id="navform">
	<ul style="list-style-type:none" id="menu">
	</ul>
	</form>
</div>
<div id="main">
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
			<a class="navbar-brand" href="#" data-toggle="dropdown" id="website" style="color:black">vnExpress</a>
			<ul class="dropdown-menu">
				<li><a href="#" onclick="SwapWebsite(this.text)" style="padding-left:15px;line-height:2;color:black">vnExpress</a></li>
				<li><a href="#" onclick="SwapWebsite(this.text)" style="padding-left:15px;line-height:2;color:black">24h</a></li>
				<li><a href="#" onclick="SwapWebsite(this.text)" style="padding-left:15px;line-height:2;color:black">Tuổi trẻ Online</a></li>
			</ul>
    </div>
	<ul class="nav navbar-nav">
		<li><input class="form-control" id="input" type="text" placeholder="Search.."></li>
		<li class="active"><a onclick="SideNav()" style="cursor:pointer;">&equiv; Xem danh mục</a></li>
	</ul>
  </div>
</nav>
<div class="jumbotron text-center">
	<h1 id="title">Bản tin nhiều chuyện</h1>
</div>
<div class="container" id="content">
</div>
</div>
</body>
</html>
<script src="Javascript.js">
</script>
