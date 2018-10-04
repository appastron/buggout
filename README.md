# Buggout

in this app we use a debugger to step through the code.

This app assumes that you have a Mongo Database installed locally or on a server or in the cloud. You must configure a .env file with the following parameters :
MONGODB_LOCAL_URL=<mongo url>
MONGODB_CLOUD_URL=<mongo cloud url>

to initiate the app first click the debug sidebar icon and then press the Play button on bugapp program to start the debugger which launches Node server with Express and Handlebars with the Mongo and Mongoose database backend

after you see "connection successful" in your DEBUG CONSOLE open a browser and type in http://http://localhost:3000/
and you will get our index page to see the events page http://localhost:3000/events/. 

We can now navigate back and forth through our code between the browser dev tools debugger and our own debugger in our  Visual Studio IDE. 

[Need to do next is finish the rest of the CRUD operations routes Create, Read, Update and Delete. As well as several views to display different sets of our data. (PUT AND DELETE) ]