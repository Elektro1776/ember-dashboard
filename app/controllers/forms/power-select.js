import Ember from 'ember';


    const users = [
      { name: 'John Dremel',   imgUrl: 'images/people/woman-4.jpg', age: 23 },
      { name: 'David Garcia',  imgUrl: 'images/people/woman-4.jpg', age: 12 },
      { name: 'James Spencer',  imgUrl: 'images/people/woman-4.jpg', age: 17 },
      { name: 'Robert Jones', imgUrl: 'images/people/woman-4.jpg', age: 30 }
    ];


export default Ember.Controller.extend({
      breadCrumb: 'Power Select',
      cities: ['Barcelona', 'London', 'New York', 'Porto'],
      destination: 'London',
      selectedCities: [],
      user: null,
      users: users,

      groupedNumbers: [
        { groupName: 'North America', options: ['US', 'Canada', 'Mexico'] },
        { groupName: 'South America', options: ['Argentina', 'Brasil', 'Chile'] },
        { groupName: 'Europe', options: [
            { groupName: 'West Europe', options: ['Spain', 'England', 'France'] },
            { groupName: 'East Europe', options: [ 'Hungary', 'Russia', 'Ukraine' ] },
            'Australia'
          ]
        },
        'Japan'
      ],

      actions: {
        chooseDestination(city) {
            this.set('destination', city);
        },
        handleKeydown(dropdown, e) {
            if (e.keyCode !== 13) { return; }
            let text = e.target.value;
            if (text.length > 0 && this.get('cities').indexOf(text) === -1) {
                this.get('selectedCities').pushObject(text);
            }
        },
        submit: function() {
          this.toast.info('Submit');
        }
    }
});
