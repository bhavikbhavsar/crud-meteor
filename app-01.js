emp = new Meteor.Collection("Employees");

if (Meteor.isClient){ 
 Template.form.events({
     'submit #insert-form':function(e,t){
        e.preventDefault();
        var name=t.find('#name').value;
        var sal=t.find('#salary').value;
         
        emp.insert({name:name,salary:sal});
     }
 });
 
 Template.form.helpers({
     'records':function(){
         return emp.find({});
         
     }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    
  });
}
