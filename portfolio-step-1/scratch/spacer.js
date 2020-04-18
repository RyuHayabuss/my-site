var imgSizer = {
    Config : {
        spacer: "img/giphy (3).gif",
        imgCache: []
    }
    ,collate : function(oScope) {
        if (document. all &&! window. opera) {
            var c = imgSizer;
            var imgCashe = c.Config.imgCache;

            var images = (oScope && oScope.length)?
                oScope: document.getElementsByTagName("img");
            for (var i = 0; < images.length; i++)
            {
                images [i].origWidth = images [i]. offsetWidth;
                images [i].origHeight = images [i]. offsetHeight;

                imgCashe.push(images [i]);
                c.ieAlpha(images [i]);
                images[i].style.width = "100%";
            }
            if (imgCashe.length) {
                c.resize(function() {
                    for (var i = 0; i < imgCache. length; i++) {
                        var ratio = (imgCache [i]. offsetWidth / imgCache[i]. origWidth);
                        imgCache[i].style.height = (imgCache[i].origHeight * ratio) + "px";
                    }
                });
            }
        }
    }
    ,ieAlpha: function(img) {
        var c = imgSizer;
        if (img. oldSrc) {
            img.src = img.oldSrc;
        }
        var src = img.src;
        img.style.width = img.offsetWidth + "px";
        img.style.height = img.offsetHeight + "px";
        img.style.filter = "progid: DXImageTransform.Microsoft.AlphaImageLoader (src='" + src + "', sizingMethod='scale')"
        img.oldSrc = src;
        img.src = c.Config.spacer;
    }
    ,resize: function(func) {
        var oldonresize = window. onresize;
        if (typeof window. onresize! = 'function')
        {
            window. onresize = func;
        } else {
            window. onresize = function() {
                if (oldonresize) {
                    oldonresize();
                }
                func ();
            }
        }
    }
}