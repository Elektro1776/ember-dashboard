var nowDate = new Date(),
    tomorrow = new Date().setDate(nowDate.getDate() + 1),
    next3Days = new Date().setDate(nowDate.getDate() + 3),
    next4Days = new Date().setDate(nowDate.getDate() + 4),
    next6Days = new Date().setDate(nowDate.getDate() + 6),
    events = [
        { title: 'First Date', start: Date.now() },
        { title: 'Movies', start: tomorrow },
        { title: 'Dinner', start: next3Days },
        { title: 'Dinner', start: next4Days },
        { title: 'Dinner', start: next6Days }
    ];

export default Ember.Controller.extend({
    breadCrumb: 'Calendar',
    events: events,
    header: {
        left:   'title',
        center: 'month,agendaWeek,agendaDay',
        right:  'today prev,next'
    },
    actions: {
        /* jshint unused:false */
        clicked: function(event, jsEvent, view) {
             console.log(`${event.title} was clicked!`);
            // Prints: Hackathon was clicked!
        }
    }
});
