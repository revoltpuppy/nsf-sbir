
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:72842,hjsv:5};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
</script>
<script language="javascript" type="text/javascript">
    function findSearchResults() {
        var searchType = document.getElementsByName('rdSearchType');
        var searchKeyword = document.getElementById('txtSearchKeyword');
     if (!String.prototype.trim) {
String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g, '');
}
}
if (!(searchKeyword.value.trim()).match(/\S/)) {
            alert('Enter Search Keyword!')
            searchKeyword.focus();
        }
        else {
            var i;
            var value;
            var keyWord = '{{keyword}}';
            var currentAwards = 'http://www.nsf.gov/awardsearch/advancedSearchResult?PIId=&PIFirstName=&PILastName=&PIOrganization=&PIState=&PIZip=&PICountry=&ProgOrganization=&ProgEleCode=5373%2C+1591%2C+5371%2C+1505&BooleanElement=Any&ProgRefCode=&BooleanRef=All&Program=&ProgOfficer=&Keyword=' + keyWord + '&AwardNumberOperator=&AwardAmount=&AwardInstrument=&ActiveAwards=true&OriginalAwardDateOperator=&StartDateOperator=&ExpDateOperator=';
            var allAwards     = 'http://www.nsf.gov/awardsearch/advancedSearchResult?PIId=&PIFirstName=&PILastName=&PIOrganization=&PIState=&PIZip=&PICountry=&ProgOrganization=&ProgEleCode=5373%2C+1591%2C+5371%2C+1505&BooleanElement=Any&ProgRefCode=&BooleanRef=All&Program=&ProgOfficer=&Keyword=' + keyWord + '&AwardNumberOperator=&AwardAmount=&AwardInstrument=&ActiveAwards=true&ExpiredAwards=true&OriginalAwardDateOperator=&StartDateOperator=&ExpDateOperator=';
            var searchResultUrl = '';
            for (i = 0; i < searchType.length; i++) {
                if (searchType[i].checked) {
                    value = searchType[i].value;
                    if (value == "current") {
                        searchResultUrl = currentAwards.replace(keyWord, searchKeyword.value);
                    } else {
                        searchResultUrl = allAwards.replace(keyWord, searchKeyword.value);
                    }
                    if (searchResultUrl != null || searchResultUrl != '') {
                        window.open(searchResultUrl);
                    }
                }
            }
        }
    }

    function searchKeyPress(e) {
        if (typeof e == 'undefined' && window.event) { e = window.event; }
        if (e.keyCode == 13) {
    e = $.event.fix(e);
            e.preventDefault();
            document.getElementById('btnSearch').click();
        }
    }
