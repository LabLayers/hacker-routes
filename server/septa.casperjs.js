var system = require('system'),
    casper = require('casper').create(),
    format = require('utils').format,
    source = casper.cli.get('source') || 'auto',
    from   = casper.cli.get('from') || 'Drexel University',
    to     = casper.cli.get('to') || 'City Hall',
    date   = casper.cli.get('date') || '1/20/16',
    time   = casper.cli.get('time') || '10:40 PM',
    text   = casper.cli.get(0),
    result;

if (!from) {
    casper.warn('The --from option is mandatory.').exit(1);
}

console.log(from);
console.log(to);

casper.start(format('http://airs1.septa.org/bin/query.exe/en?S=%s&SALL=1&Z=%s&ZALL=1&getstop=1&date=%s&time=%s&', from, to, date, time), function() {
  var typeaheadFrom = this.getElementsInfo('[name="REQ0JourneyStopsS0K"]');
  for(var index in typeaheadFrom) {
      var attr = typeaheadFrom[index];
      console.log(attr.text);
  }
  var typeaheadTo = this.getElementsInfo('[name="REQ0JourneyStopsZ0K"]');
  for(var index in typeaheadTo) {
      var attr = typeaheadTo[index];
      console.log(attr.text);
  }

    // this.fill('form#gt-form', {text: text});
}); // .waitForSelector('span.hps', function() {
    // this.echo(this.fetchText("#result_box"));
// });

casper.run();
