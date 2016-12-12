$(document).ready(function() {
    $("#btnTranslate").on("click", function() {
        
        var sourceText = $('#in').val;

        var sourceLang = 'auto';

        var targetLang = 'ja';

        var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" 
            + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
  
        var result = JSON.parse(UrlFetchApp.fetch(url).getContentText());
  
        translatedText = result[0][0][0];

        $('#out').html = translatedText;
    });
    
    function insertReply(content) {
        document.getElementById('output').innerHTML = content;
    }

}); 
