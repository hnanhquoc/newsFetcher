var url = window.location.href.split('?url=%22').length == 2 ? window.location.href.split('?url=%22')[1].slice(0, -3) : "https://vnexpress.net/rss/tin-moi-nhat.rss";
var xpath = "/rss/channel/item";
var items = [];
var icons = [];


function Item(title, description, pubDate, link) {
    this.title = title;
    this.description = description;
    this.pubDate = pubDate;
    this.link = link;
}

function Icon(url, title, link) {
    this.url = url;
    this.title = title;
    this.link = link;
}

function SwapWebsite(name) {
    document.getElementById("website").innerHTML = name;
    switch (name) {
        case "vnExpress":
            url = "https://vnexpress.net/rss/tin-moi-nhat.rss";
            break;
        case "24h":
            url = "http://www.24h.com.vn/upload/rss/trangchu24h.rss";
            break;
    }
    CreateMenu(url);
}

function GetWebsCategories(webPage) {
    GetRssName(webPage);
    switch (GetRssName(webPage).split("-")[0]) {
        case "24h":
            return null;
        case "vnExpress":
            return [["tinmoinhat", "Tin mới nhất", "https://vnexpress.net/rss/tin-moi-nhat.rss"],
                ["thoisu", "Thời sự", "https://vnexpress.net/rss/thoi-su.rss"],
                ["thegioi", "Thế giới", "https://vnexpress.net/rss/the-gioi.rss"],
                ["kinhdoanh", "Kinh doanh", "https://vnexpress.net/rss/kinh-doanh.rss"],
                ["startup", "Startup", "https://vnexpress.net/rss/startup.rss"],
                ["giaitri", "Giải trí", "https://vnexpress.net/rss/giai-tri.rss"],
                ["thethao", "Thể thao", "https://vnexpress.net/rss/the-thao.rss"],
                ["phapluat", "Pháp luật", "https://vnexpress.net/rss/phap-luat.rss"],
                ["giaoduc", "Giáo dục", "https://vnexpress.net/rss/giao-duc.rss"],
                ["suckhoe", "Sức khỏe", "https://vnexpress.net/rss/suc-khoe.rss	"],
                ["giadinh", "Gia đình", "https://vnexpress.net/rss/gia-dinh.rss"],
                ["dulich", "Du lịch", "https://vnexpress.net/rss/du-lich.rss"],
                ["khoahoc", "Khoa học", "https://vnexpress.net/rss/khoa-hoc.rss"],
                ["sohoa", "Số hóa", "https://vnexpress.net/rss/so-hoa.rss"],
                ["otoxemay", "Ôtô xe máy", "https://vnexpress.net/rss/oto-xe-may.rss"],
                ["congdong", "Cộng đồng", "https://vnexpress.net/rss/cong-dong.rss"],
                ["tamsu", "Tâm sự", "https://vnexpress.net/rss/tam-su.rss"],
                ["cuoi", "Cười", "https://vnexpress.net/rss/cuoi.rss"]];
    }
}

function CreateMenu(path) {
    var list = "";
    try {
        GetWebsCategories(path).forEach(function (category) {
            list += '<li><a onclick="GetRss(this.id)" id="' + category[0] + '" href=?url="' + category[2] + '">' + category[1] + '</a></li>';
        });

        document.getElementById("menu").innerHTML = list;
    } catch (error) {
        document.getElementById("menu").innerHTML = '<li><a>Đang phát triển</a></li>';
    }
}

function GetRss(id) {
    switch (id) {
        case "tinmoinhat":
            url = GetWebsCategories(url)[0][2];
            GetRssItems(url, xpath);
            break;
        case "thoisu":
            url = GetWebsCategories(url)[1][2];
            GetRssItems(url, xpath);
            break;
        case "thegioi":
            url = GetWebsCategories(url)[2][2];
            GetRssItems(url, xpath);
            break;
        case "kinhdoanh":
            url = GetWebsCategories(url)[3][2];
            GetRssItems(url, xpath);
            break;
        case "startup":
            url = GetWebsCategories(url)[4][2];
            GetRssItems(url, xpath);
            break;
        case "giaitri":
            url = GetWebsCategories(url)[5][2];
            GetRssItems(url, xpath);
            break;
        case "thethao":
            url = GetWebsCategories(url)[6][2];
            GetRssItems(url, xpath);
            break;
        case "phapluat":
            url = GetWebsCategories(url)[7][2];
            GetRssItems(url, xpath);
            break;
        case "giaoduc":
            url = GetWebsCategories(url)[8][2];
            GetRssItems(url, xpath);
            break;
        case "suckhoe":
            url = GetWebsCategories(url)[9][2];
            GetRssItems(url, xpath);
            break;
        case "giadinh":
            url = GetWebsCategories(url)[10][2];
            GetRssItems(url, xpath);
            break;
        case "dulich":
            url = GetWebsCategories(url)[11][2];
            GetRssItems(url, xpath);
            break;
        case "khoahoc":
            url = GetWebsCategories(url)[12][2];
            GetRssItems(url, xpath);
            break;
        case "sohoa":
            url = GetWebsCategories(url)[13][2];
            GetRssItems(url, xpath);
            break;
        case "otoxemay":
            url = GetWebsCategories(url)[14][2];
            GetRssItems(url, xpath);
            break;
        case "congdong":
            url = GetWebsCategories(url)[15][2];
            GetRssItems(url, xpath);
            break;
        case "tamsu":
            url = GetWebsCategories(url)[16][2];
            GetRssItems(url, xpath);
            break;
        case "cuoi":
            url = GetWebsCategories(url)[17][2];
            GetRssItems(url, xpath);
            break;
    }
}

function SideNav() {
    if (document.getElementById("mysidenav").offsetWidth == "300") {
        CloseNav();
    }
    else if (document.getElementById("mysidenav").offsetWidth == "0") {
        OpenNav();
    }
}

function OpenNav() {
    document.getElementById("mysidenav").style.width = "300px";
    $('#overlay').show();
}

function CloseNav() {
    document.getElementById("mysidenav").style.width = "0";
    $('#overlay').hide();
}

function GetRssItems(path, xpath) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            GetResultVnExpress(xhttp.responseXML, path, xpath);
            document.getElementById("title").innerHTML = "Bản tin nhiều chuyện";
        } else if (xhttp.statusText == "Not Found") {
            GetRssItemsFromFile(GetRssName(path) + ".xml", xpath);
        }
    };
    xhttp.open("GET", path + "a", true);
    xhttp.send();
}

function GetRssItemsFromFile(path, xpath) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            GetResultVnExpress(xhttp.responseXML, path, xpath);
            document.getElementById("title").innerHTML = "Bản tin nhiều chuyện";
        } else if (this.status == 0) {
            console.log(path);
            document.getElementById("title").innerHTML = "Không thể kết nối đến dữ liệu";
        }
    };
    xhttp.open("GET", path, false);
    xhttp.send();
}

function GetRssName(path) {
    if (path.split(".")[1] != "xml") {
        result = path.split("//")[1];
        switch (result.split(".")[0]) {
            case "www":
                switch (result.split(".")[1]) {
                    case "24h":
                        return "24h";
                }
            case "vnexpress":
                switch (result.split("/")[2]) {
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
    else {
        return path.split(".")[0];
    }
}

function GetResultVnExpress(xml, path, xpath) {
    var txt = "";
    items[GetRssName(path)] = [];

    if (xml.evaluate) {
        var nodesTitles = xml.evaluate(xpath + "/title", xml, null, XPathResult.ANY_TYPE, null);
        var titles = nodesTitles.iterateNext();
        var nodesDescriptions = xml.evaluate(xpath + "/description", xml, null, XPathResult.ANY_TYPE, null);
        var descriptions = nodesDescriptions.iterateNext();
        var nodesPubDates = xml.evaluate(xpath + "/pubDate", xml, null, XPathResult.ANY_TYPE, null);
        var pubDates = nodesPubDates.iterateNext();
        var nodesLinks = xml.evaluate(xpath + "/link", xml, null, XPathResult.ANY_TYPE, null);
        var links = nodesLinks.iterateNext();
        while (titles) {
            try {
                var title = titles.firstChild.nodeValue;
                var description = descriptions.firstChild.nodeValue;
                var pubDate = pubDates.firstChild.nodeValue;
                var link = links.firstChild.nodeValue;

                items[GetRssName(path)].push(new Item(title, description, pubDate, link));

                titles = nodesTitles.iterateNext();
                descriptions = nodesDescriptions.iterateNext();
                pubDates = nodesPubDates.iterateNext();
                link = nodesLinks.iterateNext();
                QuickSort(items[GetRssName(path)], 0, items[GetRssName(path)].length - 1);
                CreatePath(url);
            } catch (error) {
                titles = nodesTitles.iterateNext();
                descriptions = nodesDescriptions.iterateNext();
                pubDates = nodesPubDates.iterateNext();
                link = nodesLinks.iterateNext();
            }
        }
    } else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            txt += nodes[i].childNodes[0].nodeValue + "<br>";
        }
    }
}


function QuickSort(items, left, right) {
    var len = items.length,
        pivot,
        partitionIndex;


    if (left < right) {
        pivot = right;
        partitionIndex = Partition(items, pivot, left, right);

        QuickSort(items, left, partitionIndex - 1);
        QuickSort(items, partitionIndex + 1, right);
    }
    return items;
}

function Partition(items, pivot, left, right) {
    var pivotValue = items[pivot],
        partitionIndex = left;

    for (var i = left; i < right; i++) {
        if (PubDate(items[i].pubDate).getTime() > PubDate(pivotValue.pubDate).getTime()) {
            Swap(items, i, partitionIndex);
            partitionIndex++;
        }
    }
    Swap(items, right, partitionIndex);
    return partitionIndex;
}

function Swap(items, i, j) {
    var temp = items[i];
    items[i] = items[j];
    items[j] = temp;
}

function PubDate(date) {
    var pieces = date.toString().split(' '),
        offsetTime = pieces[5].match(/[-+]\d{4}/),
        offset = (offsetTime) ? offsetTime : pieces[5],
        parts = [
            pieces[0].split(",")[0] + ',',
            pieces[2],
            pieces[1],
            pieces[3],
            pieces[4],
            offset
        ];

    return new Date(pieces[3], GetMonth(pieces[2]), pieces[1], pieces[4].split(":")[0], pieces[4].split(":")[1], pieces[4].split(":")[2]);
}

function GetMonth(month) {
    switch (month) {
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

function CreatePath(path) {
    var list = "";
    var count = 0;
    var template = $("#item-template").html();

    items[GetRssName(path)].forEach(function (item) {
        var data = {
            image: item.description.match(/<a[^]+a>/)[0].replace("<img ", "<img alt='" + item.title + "'"),
            title: item.title,
            description: item.description.split("</br>")[1],

        }
        var html = template.replace('{{image}}', data.image).replace('{{title}}', data.title).replace('{{description}}', data.description);

        list += html;

        // if(count % 3 == 0){
        // 	if (count != 0){
        // 		list += "<hr>";
        // 	}
        // 	list += "<div class='row justify-content-md-center'>";
        // }
        // list += "<div class='col-sm-4'>";
        // list += "<div class='row'>";
        // list += "<div class='col-sm'>";
        // list += "<h4>";
        // list += item.description.match(/<a[^]+.html">/)[0];
        // list += item.title;
        // list += "</a>";
        // list += "</h4>";
        // list += "</div>";
        // list += "</div>";
        // list += "<div class='row justify-content-md-center'>";
        // list += "<div class='col-sm-5'>";
        // list += item.description.match(/<a[^]+a>/)[0].replace("<img ","<img alt='"+item.title+"'");
        // list += "</div>";
        // list += "<div class='col-sm-7'>";
        // list += item.description.split("</br>")[1];
        // list += "</div>";
        // list += "</div>";
        // list += "</div>";
        // count++;
        // if(count % 3 == 0){
        // 	list += "</div>";
        // }
    });

    // if(count % 3 != 0){
    // 	list += "</div>";
    // }

    document.getElementById("content").innerHTML = list;
}

GetRssItems(url, xpath);
CreateMenu(url);

$(document).ready(function () {
    $("#input").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        var lines = document.getElementsByTagName("hr");
        if (value.length > 1) {
            for (var i = 0; i < lines.length; i++) {
                lines[i].style.visibility = "hidden";
            }
        } else {
            for (var i = 0; i < lines.length; i++) {
                lines[i].style.visibility = "visible";
            }
        }
        $("#content div").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            var alt = $(this).find('img').attr('alt');
            //console.log(alt);
            if (alt != undefined) {
                $(this).toggle(alt.toLowerCase().indexOf(value) > -1)
            }
        });
    });
});