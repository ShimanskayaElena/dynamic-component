# DynamicComponent
The demo version of this application can be seen from the link - https://shimanskayaelena.github.io/dynamic-component/

Test( Typescript/Angular 2 )

Formulation of the problem:

The model is supplied in a json file:
{
    "tag": "div",
    "content": [
        {
            "tag": "span",
            "attributes": {
   		       "style": "color: red"
   		    },
            "content": [
               { "text": "Enter value:" } 
            ]
   	    },
        {   "tag": "input",
            "attributes": {
               "type": "text",
               "value": "test",
   	    	   "style": "color: green"
            }
        }
    ]
}

It is necessary to develop a component which, based on the transferred model, creates and loads an angular component, i.e. it is necessary in runtime (after the angular-application is already loaded, and the bootstrap procedure was executed):

1. upload an HTTP request to the json file (the path is passed by the input parameter of the component);
2. create a valid HTML template for the loaded model;
3. create an angular component with the resulting template and compile it;
4. download the component.

Please pay special attention to the third and fourth point of TK. The job is not considered to be executed if somehow manipulation of the DOM's of the existing component is used. Ie the component should be created by the Component directive in runtime (after the bootstrapModule procedure is executed).

test - https://docs.google.com/document/d/1wCj5J9NYCyRprZM9hQrv0zNjLtQzHX8aaPg0Qb_qj_U/edit
job vacancy - https://hh.ru/vacancy/23021591

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
