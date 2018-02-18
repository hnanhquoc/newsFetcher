<?php
class Functions{	
    private static function GetRssName($path){
        $result = explode("//", $path)[1];
        switch(explode(".", $result)[0]) {
            case "www":
                switch(explode(".", $result)[1]){
                    case "24h":
                        return "24h";
                }
            case "vnexpress":
                switch(explode("/", $result)[2]){
                    case "tin-moi-nhat.rss":
                        return "vnExpress-Mainpage";
                    case "thoi-su.rss":
                        return "vnExpress-News";
                    case "the-gioi.rss":
                        return "vnExpress-World";
                    case "kinh-doanh.rss":
                        return "vnExpress-Bussiness";
                    case "startup.rss":
                        return "vnExpress-Startup";
                    case "giai-tri.rss":
                        return "vnExpress-Entertainment";
                    case "the-thao.rss":
                        return "vnExpress-Sport";
                    case "phap-luat.rss":
                        return "vnExpress-Law";
                    case "giao-duc.rss":
                        return "vnExpress-Education";
                    case "suc-khoe.rss":
                        return "vnExpress-Health";
                    case "gia-dinh.rss":
                        return "vnExpress-Family";
                    case "du-lich.rss":
                        return "vnExpress-Travel";
                    case "khoa-hoc.rss":
                        return "vnExpress-Science";
                    case "so-hoa.rss":
                        return "vnExpress-Digital";
                    case "oto-xe-may.rss":
                        return "vnExpress-Car";
                    case "cong-dong.rss":
                        return "vnExpress-Community";
                    case "tam-su.rss":
                        return "vnExpress-Confidential";
                    case "cuoi.rss":
                        return "vnExpress-Fun";        
                }
            default:
                return "Unknown";
        }
    }
	
	static function GetMonth($month){
		switch($month){
			case "Jan":
				return 1;
			case "Feb":
				return 2;
			case "Mar":
				return 3;
			case "Apr":
				return 4;
			case "May":
				return 5;
			case "Jun":
				return 6;
			case "Jul":
				return 7;
			case "Aug":
				return 8;
			case "Sept":
				return 9;
			case "Oct":
				return 10;
			case "Nov":
				return 11;
			case "Dec":
				return 12;
		}
	}
	
	static function PubDate($str) {
		$pieces = explode(' ', $str);
		 $day = $pieces[1];
		 $month = $pieces[2];
		 $year = $pieces[3];
		 $time = $pieces[4];
		 $hour = explode(':', $time)[0];
		 $min = explode(':', $time)[1];
		 $sec = explode(':', $time)[2];
		 $datetime = new DateTime($year+"-"+$month+"-"+$day+" "+$time);
//		$datetime = new DateTime();
		return $datetime;
	}	
	
    function GetItemRss($path){	
		echo $path;
		try{
			$xmlRss = new SimpleXMLElement($path, LIBXML_NOCDATA, true);
			try{
				$xmlFile = new SimpleXMLElement(Functions::GetRssName($path).".xml", LIBXML_NOCDATA, true);
			}catch(Exception $e){
				$xmlRss->asXML(Functions::GetRssName($path).".xml");
				return;
			}
		
			$resultsRss = $xmlRss->xpath("/rss/channel/item");
//			print_r($resultsRss);
			$resultsFile = $xmlFile->xpath("/rss/channel/item");
//			print_r($resultsFile);		
			$pubDatesFile = $xmlFile->xpath("/rss/channel/item/pubDate");
//			print_r($pubDatesFile);
			$pubDates = [];
		echo '1';
			foreach($pubDatesFile as $pubDateFile){
				$pubDates[] = Functions::PubDate((string)$pubDateFile);
			}
			$max = $pubDates[0];
			$hang = 0;
			for($i = 1; $i < sizeof($pubDates)-1; $i++){
				if($pubDates[$i]->format("Y") > $max->format("Y")){
					if($pubDates[$i]->format("m") > $max->format("m")){
						if($pubDates[$i]->format("d") > $max->format("d")){
							if($pubDates[$i]>$max){
								$max = $pubDates[$i];
								$hang = $i;
							}else{
								continue;
							}
						}else{
							continue;
						}
					}else{
						continue;
					}
				}else{
					continue;
				}
			}
		echo '2';
			for($i = 0; $i < sizeof($resultsRss); $i++){
//				print 'test';
//				if(collator_compare(collator_create('fr_FR.utf8'),(string)$resultsFile[$hang]->title, (string)$resultsRss[$i]->title) === 0){
//					break;
//				}
				$item = $xmlFile->xpath("/rss/channel")[0]->addChild("item");
				$item->addChild("title", (string)$resultsRss[$i]->title);
				$item->addChild("description", (string)$resultsRss[$i]->description);
				$item->addChild("pubDate", (string)$resultsRss[$i]->pubDate);
				$item->addChild("link", (string)$resultsRss[$i]->link);
				$item->addChild("slash:comments", (string)$resultsRss[$i]->comments);			
			}
			print 'test';
			$xmlFile->asXML(Functions::GetRssName($path).".xml");
		} catch(Exception $e){
			
		}
    }
}
?>