export default Ember.Controller.extend({
    breadCrumb: 'Models Table',
    columns: [
      {
        'propertyName': 'id',
        'title': 'ID'
      },
      {
        'propertyName': 'firstName',
        'title': 'First Name'
      },
      {
        'propertyName': 'lastName',
        'title': 'Last Name'
      },
      {
        'propertyName': 'city',
        'title': 'City'
      },
      {
        'title': 'Delete',
        'template': 'models-table/delete'
      }
    ],
    data: [
        { id:10,  firstName: 'Chester '  , lastName: 'Khan'    , city: 'Dhaka'  },
        { id:9 ,  firstName: 'Billi   '  , lastName: 'Roberts' , city: 'Moscow'  },
        { id:8 ,  firstName: 'Chasity '  , lastName: 'Thomas'  , city: 'Mumbai'  },
        { id:7 ,  firstName: 'Wendell '  , lastName: 'Taylor'  , city: 'Guangzhou'  },
        { id:6 ,  firstName: 'Otilia  '  , lastName: 'Johnson' , city: 'Lagos'  },
        { id:5 ,  firstName: 'Wei     '  , lastName: 'Williams', city: 'Istanbul'  },
        { id:4 ,  firstName: 'Ian     '  , lastName: 'Jones'   , city: 'Tianjin'  },
        { id:3 ,  firstName: 'Rigoberto' , lastName: 'Patel'   , city: 'Beijing'  },
        { id:2 ,  firstName: 'Jim     '  , lastName: 'Smith'   , city: 'Karachi'  },
        { id:1 ,  firstName: 'Ingeborg'  , lastName: 'Brown'   , city: 'Shanghai'  }
    ],
    actions: {
      deleteRecord: function(record) {
        var content = this.get('data');
        this.set('data', content.without(record));
      }
    }
});


