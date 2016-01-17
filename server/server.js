var phantom = require('phantom'),
    source = 'auto',
    from   = 'Drexel University',
    to     = 'City Hall',
    date   = '1/20/16',
    time   = '10:40 PM';

/*
casper.cli.get('source') ||
casper.cli.get('from')   ||
casper.cli.get('to')     ||
casper.cli.get('date')   ||
casper.cli.get('time')   ||
text   = casper.cli.get(0),
*/

phantom.create(function (ph) { ph.createPage(function (page) {
  page.open("http://airs1.septa.org/bin/query.exe/en?S="+from+"&SALL=1&Z="+to+"&ZALL=1&getstop=1&date="+date+"&time="+time, function (status) {
    page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js", function() {
      // list all the a.href links in the hello kitty etsy page
      page.evaluate(function() {
        console.log("foo");
        var typeaheadFrom = $("[name=REQ0JourneyStopsS0K]").text();
        return typeaheadFrom + "\n";
        /* var typeaheadTo = $('[name=REQ0JourneyStopsZ0K]').text();
        console.log(typeaheadTo);
        return typeaheadTo; */
        }, function (result) {
          console.log(typeaheadFrom);
        ph.exit();
      });
      // });
      // ph.exit();
    });
  });
}); });
