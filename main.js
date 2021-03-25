document.addEventListener("DOMContentLoaded", function(event) {
    if (window.location.href.includes('about')){
        document.getElementById('topnav').innerHTML = "\t<a href=\"./index.html\" style='padding: 0px'><img src=\"./logo.png\" alt=\"Logo\" style=\"width:150px;height: 75px\"></a><a  href=\"./index.html\">Home</a>\n" +
            "\t<a href=\"./about.html\" class=\"active\">About</a>\n" +
            "\t<a href=\"./hairstyle.html\">Hair Styles</a>\n" +
            "\t<a href=\"./contact.html\">Contact</a>";
    }
    else if (window.location.href.includes('hairstyle')){
        document.getElementById('topnav').innerHTML = "\t<a href=\"./index.html\" style='padding: 0px'><img src=\"./logo.png\" alt=\"Logo\" style=\"width:150px;height: 75px\"></a><a  href=\"./index.html\">Home</a>\n" +
            "\t<a href=\"./about.html\">About</a>\n" +
            "\t<a href=\"./hairstyle.html\"  class=\"active\">Hair Styles</a>\n" +
            "\t<a href=\"./contact.html\">Contact</a>";
    }
    else if (window.location.href.includes('contact')){
        document.getElementById('topnav').innerHTML = "\t<a href=\"./index.html\" style='padding: 0px'><img src=\"./logo.png\" alt=\"Logo\" style=\"width:150px;height: 75px\"></a><a  href=\"./index.html\">Home</a>\n" +
            "\t<a href=\"./about.html\">About</a>\n" +
            "\t<a href=\"./hairstyle.html\">Hair Styles</a>\n" +
            "\t<a href=\"./contact.html\"  class=\"active\">Contact</a>";
    }else{
        document.getElementById('topnav').innerHTML = "\t<a href=\"./index.html\" style='padding: 0px'><img src=\"./logo.png\" alt=\"Logo\" style=\"width:150px;height: 75px\"></a><a class=\"active\" href=\"./index.html\">Home</a>\n" +
            "\t<a href=\"./about.html\">About</a>\n" +
            "\t<a href=\"./hairstyle.html\">Hair Styles</a>\n" +
            "\t<a href=\"./contact.html\">Contact</a>";
    }

    document.getElementById('footer').innerHTML = '\t<p style="text-align: center">Copyright © Mirage Barbershop 2021. All rights reserved.</p>\n';
});
