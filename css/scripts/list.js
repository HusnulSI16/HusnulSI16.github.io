(function(){
  function c(a){this.t=a}function l(a,b){for(var e=b.split(".");
    e.length;){if(!(e[0]in a))return!1;a=a[e.shift()]}return a}
  function d(a,b){return a.replace(h,function(e,a,i,f,c,h,k,m){var f=l(b,f),j="",g;
      if(!f)return"!"==i?d(c,b):k?d(m,b):"";
      if(!i)return d(h,b);
      if("@"==i){e=b._key;a=b._val;
        for(g in f)f.hasOwnProperty(g)&&(b._key=g,b._val=f[g],j+=d(c,b));b._key=e;
          b._val=a;return j}}).replace(k,function(a,c,d){return(a=l(b,d))||0===a?"%"==c?(new Option(a)).innerHTML.replace(/"/g,"&quot;"):a:""})}
var h=/\{\{(([@!]?)(.+?))\}\}(([\s\S]+?)(\{\{:\1\}\}([\s\S]+?))?)\{\{\/\1\}\}/g,k=/\{\{([=%])(.+?)\}\}/g;c.prototype.render=function(a){return d(this.t,a)};window.t=c})();
// end of 't';

var app = {

  pengguna : [
      {
        "ID" : "1",
        "username" :"paijo"
        "alamat" : "L. Kalimantan No. 34",
        "Status" : "Aktif",
      },
      {
        "ID" : "1",
        "username" :"paijo"
        "alamat" : "L. Kalimantan No. 34",
        "Status" : "Aktif",
      },
      {
        "ID" : "1",
        "username" :"paijo"
        "alamat" : "L. Kalimantan No. 34",
        "Status" : "Aktif",
      },
      {
        "ID" : "1",
        "username" :"paijo"
        "alamat" : "L. Kalimantan No. 34",
        "Status" : "Aktif",
      }
    ],

  renderTemplates: function () {
    "use strict";

    var pengguna = app.pengguna,
        content = [],
        template = new t( $("#pengguna--list-item-template").html() );

    for (var i = 0; i < pengguna.length; i += 1) {
      content[i] = template.render(pengguna[i]);
    }

    $("#pengguna--list").html(content.join(""));
  }

};

app.renderTemplates();