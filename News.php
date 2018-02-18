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
		<ul id="menu">
		</ul>
	</form>
</div>
<div id="main">
	<div id="overlay" class="overlay"></div>
	<nav class="navbar fixed-top navbar-expand-lg navbar-dark" style="background-color: darkgreen;">
	  	<a class="navbar-brand" href="#">iNews</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		   <span class="navbar-toggler-icon"></span>
		</button>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav mr-auto">
	      <li class="nav-item dropdown active">
	        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          vnExpress
	        </a>
	        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
	          <a class="dropdown-item" href="#" onclick="SwapWebsite(this.text)">vnExpress</a>
	          <a class="dropdown-item" href="#" onclick="SwapWebsite(this.text)">24h</a>
	          <a class="dropdown-item" href="#" onclick="SwapWebsite(this.text)">Tuổi trẻ Online</a>
	        </div>
	      </li>
	    </ul>
	    <form class="form-inline my-2 my-lg-0">
	      <input id="input" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
	      <button class="btn btn-outline-light my-2 my-sm-0" type="button" onclick="SideNav()">Xem danh mục</button>
	    </form>
	  </div>
	</nav>

	<div class="jumbotron text-center">
		<h1 id="title">Bản tin nhiều chuyện</h1>
	</div>

	<hr>

	<div class="container">
		<div class="row" id="content"></div>
	</div>
</div>
</body>
</html>
<script id="item-template" type="text/template">
<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
	<div class="news-item">
		<div style="margin: 0 20px;">
			<div  style="cursor: pointer;" >
				<span class="image">
					{{image}}
				</span>
			<span class="title">
				{{title}}
			</span>
			<p class="price-sale">
				{{description}}                                 
				<span class="sale-tag sale-tag-square" hidden>NEW</span>
			</p>
			</div>
		</div>
	</div>
</div>
</script>
<script src="Javascript.js">
</script>
