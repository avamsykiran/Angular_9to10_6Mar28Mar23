Angular 11
---------------------------------------------------------------------------------------------------

    Pre-Requisites
        Html 5      Typography, tables, lists, forms, validation attributes, event attributes
                    html 5 api
        
        CSS 3      Selectors, Selector Operators, the regular css-proeprties

        JavaScript (ECMAScript 6)
                Object, Math, String, Date, docuemnt, window
                functions   closures, maxims, call backs, arrow functions
                arrays and array prototype function like reduce, map , filter ..etc.,
                ES6 concepts like   spread operators, template literals, classes,
                objects, json, inheretence, modules, asynchronosu programming (Promise, async
                and await)

    Lab Setup

        VSCode      IDE
        NodeJS      Development Environment
        Chrome      Browser

        Angular CLI     npm install -g @angular/cli@15.2.1
                        ng version
    
    Introduction

        Angular is a typescript based SPA framework.


        SPA -   Single Page Application

                WebSite (static) ------> Dynamic Web Application    ------------> SPA

                Dynamic Web Application
                    Jsp/asp/php ..etc to dynamically generate html content
                    based on some data and bussienss logic on a server
                    and presen the dynamically generated html content to
                    the client.

                Single Page Application

                    Web-Server                                          Client / Browser
                        spa-bundle              <----------------REQ----
                            index.html +       ----RESP (spa-bundle)------>    receive the entire
                            *.js and *.css                                         spa-bundle

                                                                            index.html and the
                                                                            assosiated JS is laoded
                                                                            on to the browser.

                                                                            And for then onwards
                                                                            absolutly no
                                                                            server interaction needed.

                                                                            All events and bussiness
                                                                            logic are execute on the 
                                                                            client itself by the JS.

                                                                            the required dynamic html is
                                                                            also generated on the client
                                                                            and is replaces the old
                                                                            content of index.html
                                                                            when needed.

                        rest-api           <---data operations----------> in xml or json format.

        typescript?

            is a microsoft product.

            typescript = javascript + type safty.

            converting typescript into javascript is called transpelling 
            and tools like 'babel' is used to do so.

            Employee.js

                class Employee {
                    constructor(empId,name,doj,skills,isContractBased,basic){
                        this.empId=empId;
                        this.name=name;
                        this.doj=doj;
                        this.skills=skills;
                        this.isContractBased=isContractBased;
                        this.basic=basic;
                    }

                    ta(){
                        return this.basic*0.20;
                    }
                }

            Employee.ts

                class Employee {
                    
                    private empId:number;
                    private name:string;
                    private doj:Date;
                    private skills:string[];
                    private isContractBased:boolean;
                    private basic:number;

                    constructor(empId:number,name:string,doj:Date,skills:string[],isContractBased:boolean,basic:number){
                        this.empId=empId;
                        this.name=name;
                        this.doj=doj;
                        this.skills=skills;
                        this.isContractBased=isContractBased;
                        this.basic=basic;
                    }

                    ta():number{
                        return this.basic*0.20;
                    }
                }

        NodeJS ?

            For an application, we have to 

                compose                 IDE                 VSCode
                compile                 transpeller         babel       .ts into .js
                bundle/package          build tool          npm
                test                    testing lib         jasmine and karma
                host                    dev-server          angular live development server
                execute                 client/browser      chrome

                tools like babel, npm, karma, angular cli ..etc are JS based tools and these
                tools have to run in nodejs, because we do not run them on the browser.


    Archetecture

        Angular offeres html extendability. That means we can create our own elements(tags) and attributes apart from 
        thsoe that are built-in in html.

        what does an angular app contain ?

            Modules
            Component Directives
            Attribute Directives
            Pipes
            Services
            Gaurds
            Interceptors ..etc.,

            1. Each resourece is an typescript class.
            2. Each resource is amrked witha decorator is identify its job.
            3. Each decorator is passed a json object called 'meta-data'. The meta-data has the
                    config., of that resourece

        Modules
            
            Angular Modules and Javascript Modules are different and we see both side-by-side in our apps.

            An angular module is a unit containing components,directives,pipes,service ..etc., and sub-modules.

            Each angular app is contained in a top-level module called 'ROOT MODULE'.

            All other sub-modules are called 'FEATURE MODULE'.

            @NgModule({
                declarations:[],
                imports:[],
                exports:[],
                providers:[],
                bootstrap:[]
            })
            class AppModule{}

        Component Directive

            Each component directive is an html element(tag) defined through angular.

            @Component({
                selector:'tag-name',
                templateUrl:'./app.component.html',
                styleUrls:['./app.component.css']
            })
            class AppComponent{}

        Attribute Directive

            Each attribute directive is an html attribute defined through angular.

            @Directive({
                selector:'attribute-name'
            })
            class HihlightDirective {}

        Pipe

            A pipe is a transfor used to trnasform data just before rendering.

            @Pipe({
                name:'to-words'
            })
            class ChnageToWordsPipe {}

        Service

            A service offers bussiness logic like computations/ rest-api communication ..etc.,

            @Injectable({
                providedIn:'root'
            })
            class EmployeeService {}

    Angular CLI

        is a command line interface offering commands to execute
        various steps or phases of our app dfevelopment.

        npm install -g @angular/cli
        ng version

        ng new proj-name            creating a new angular app.
                                        1. create a folder called proj-name.
                                        2. it is initialized as a node project.
                                        3. standard project strucutre is copied.
                                        4. all needed dependencies are installed via 'npm install'.

        cd proj-name

            ng build                        build the app, and the target files are stroed in 'dist'.
            ng test                         build the app, and execute the test cases
            ng serve                        build the app, host it on a development server @ 4000 port
            ng serve --port 8989 -o         build the app, host it on a development server @ a givne port.

        ng generate module ModuleName
        ng g module ModuleName
        ng g component ComponentName --skip-tests
        ng g c ComponentName --skip-tests
        ng g directive DirectiveName --skip-tests
        ng g service ServiceName --skip-tests
        ng g pipe PipeName --skip-tests
        ng g guard GuardName --skip-tests
        ng g interceptor InterceptorName --skip-tests
        ng g class ClassName --skip-tests
        ng g interface InterfaceName

    Angular Module

        is a unit of composition having components, directives, services, pipes, guards,interceptros and other sub-modules.

        each angular app has a top-level moduel called root module.

            @NgModule({
                declarations:[],            is a list of components, directives, pipes that belong to this module
                imports:[],                 is a list of sub-modules to be used in this module
                exports:[],                 is a list of components, directives, pipes that belong to this module and are 
                                            allowed to be accessed in another module, this is absent for root-module
                providers:[],               is a list of services, guards and interceptros that belong to this module.
                bootstrap:[]                is a list of top-level components of this module. this is present only for 
                                            root-modules
            })
            class SalesModule{}

    Angular Components (Component Directives)

        Angular offers html extendability. We can create our own html elements (tag) and attributes.

        Elements created in angular are called Component Directives or Components in short.
        Attributes created in angular are called Attribute Directives or Directives in short.

        Component       =       a class     +       a tempalte      +   a style sheet

        <app-dashboard></app-dashbord>

                            dashboard.component.ts  +   dashboard.component.html    +   dashboard.component.css

            dashboard.component.ts

                @Component({
                    selector:'app-dashboard',
                    templateUrl:'./dashbord.component.html',
                    styleUrls:['./dashbord.component.css']
                })
                class DashboardComponent{

                    userName:string;
                    shoppingCartCount:number;

                    constructor(){
                        this.userName="Somebody";
                        this.shoppingCartCount=0;
                    }

                    //methods used to handle events.
                }

            dashboard.component.html

                <section>
                    <h3>{{userName}}</h3>
                    <p> You have {{shoppingCartCount}} items in your shopping cart </p>
                </section>

    Data Binding

        is to use the fields and method of a component class in the component template.

        each field when bound is observed for changes and on changing any field its updated value
        is reflected whereever needed in the template (the template is re-rendered).

        Interpolation

            syntax: {{angular-expression}}
            eg:     {{ (p*t*r)/100 }}           //provided p,t and r are the fields of that component class

        Two-Way Data Binding

            is used to bind the form-elements of the template with the field in the component class.

            we use an attribute directive 'ngModel' from 'FormsModule' from '@angular/forms'.

            <input type="text" name="tb1" [(ngModel)]="field" />

        One-Way Data Binding
            Attribute Binding

                we bind a field with an attribute, means the attribute value is controlled by the field.

                <table border="1"></table>
                <table [border]="myField"></table>

            Event Binding

                is to bind a method to an event attribute, so that the boudn mehtod gets invoekd 
                on that event.

                <element (eventDirective)="method()"></element>

                eventDirectives are angular defiend attributes representing event.

                    html event attribute            event directive
                        onSubmit                        ngSubmit
                        onClick                         click
                        onDblClick                      dblclick
                        onmouseover                     mouseover
                        onchange                        change
                            ...etc.,
                
            Style Binding

                is used to bind a field to a css-property.

                <p [style.backgroundColor]="bgc"></p>   //where bgc is a field.

            Css-Class Binding

                is used to attach/detach a css class to an element.

                <element [class.className]="booleanField"></element>
            
    Pipe

        is a angular resource that is used to tranform the data just before it is rendered.

        in-built

            lowercase           uppercase           titlecase
            number              currency            percent
            json                async               date

        custom

            @Pipe({
                name:'toWords'
            })
            class ChnageToWordsPipe implements PipeTransform {
                transform(value:any) : any {
                    //....
                    return theTransformedValue;
                }
            }

    Directives / Attribute Directives

        built-in Attribute Directives

                ngModel from FormsModule
                formControlName from ReactiveFormsModule
                routerLink  from RouterModule
                    ...etc.,

        Event Attribute Directives

                click,dblclick,mouseover,mouseleave,keyup,keydown,ngSubmit,change,focus,blur ..etc.,

        Structral Directives

                *ngIf
                *ngFor
                )
        Custom Attribute Directives

            @Directive({
                selector:'[attribute-name]'
            })
            class HihlightDirective {}

    Integrating Bootstrap

        npm i bootstrap --save

        node_modules/bootstrap/dist/css/bootstrap.min.css
        node_modules/bootstrap/dist/js/bootstrap.min.js

        include these file in the 'styles' and 'scripts' section of angular.json file 

    Service

        is used to hold the application logic, like computtion or a rest-api communication ..etc.,

        Angular Services are injectables via angular dependency injection.

        A service object can be injected into a component or a directive or a pipe or even into
        another service.

        The service is injected through the constructor of a resource that needs it.

        The service objects are maintained by 'angular providers'.

        Each resource has access to its own provider and the provider of its module and
        the provider of the root-module.

        by default each service is marked as "providedIn:'root'" me3aning tha service is
        managed by root-module. To alter this behavior we will maek "providedIn:'any'" and
        include the service in the 'providers:[]" list of each resource meta-data.

    Inter Component Communication - Hirarchial Component Design.

        Attributes are used to pass data from parent ot child component.
        To put an attribute in a child component, the child component field is to be
        marked with '@Input()' decorator.

        Custom Events, are events that can be emitted by a component so that
        its parent component can handle it. 
            1. EventEmitter<dataType> is used to declare our own events.
            2. To fire an event EventEmitter has 'emit()' method.
            3. Each EventEmitter must be marked with '@Output()' so that the parent can handle.

    Angular Forms

        Template Driven Forms

            FormsModule from '@angular/forms'
                ngModel
                ngForm

            the form is developed in html, the form validations are also
            controlled by html and only data from the form is bound to a few fields.

            such are simple to write and difficult to control and test, as it has
            more html and less javascript.

            these forms are used mostly in a simpler context like a senario having
            not more than two fields.

        Model Driven Forms / Reactive Forms

            ReactiveFormsModule from '@angular/forms'
                formControlName
                formGroup

                FormGroup
                FormControl

            The form strucutre is designed in the javascript and that is called form model.
            The form model controls the validations as well.
            this model is bound to the html resulting lesser html and more javascript.

            thus thee forms are controllable and testable and offer comlicatiod
            senarios like nested forms.

    Assignment # 1

        Develop an SPA in angular to perform CRUD operations
        on 'Employee' model. Employee can have (id,name,basic,mailId) as fields.
        This app msut be in hirarichial component design.

    Routing

        enables us to provide client side navigation across the components.

        RouterModule    from    '@angular/router'

            Route               {path:'',component:Component1,pathMatch:'full|startsWith',redirect:'',
                                        children:[],canActive:[],canDeactive:[],canLoad:[]}

            Routes              Route[]

            forRoot()           is method sued to load Routes into RouterModule.

            router-outlet       is a component that reserve space in the top-level component, and is
                                repalced by the component that the router moduels picks for the givne path.

            routerLink          is a attribute directive used isntead of 'href' attribute of 'a' tag.

            routeLinkActive     is an attribute directive that takes a css-class and applies it when that 'a'
                                is visited.

            ActivedRoute        is a service used to extract info like url, path variables, 
                                query string etc., from the current path.

            Router              is a service offer the 'navigate' and 'navigateByUrl' methods to navigate programatically.

    RxJS (Reactive JavaScript)

        'rxjs' is an independent library gets installed in every angular application.
        rxjs offer reactive programming in javascript.

        rxjs offers a class called Observable.

        const bgJob = (observer:Observer) => {
            
            observer.next(val); //is used to emit an intermidiate value while the bgJob is in progress.
            observer.complete();    //is used to indicate that the assigned job is done successfully.
            observer.error(err);    //is used to indicate that the assigned job aborted due to an error.

        };

        let ob = new Observable(bgJob);

        ob.subscribe({
            next: val => { /*consuem the value emited by observer.next*/ },
            complete: () => { /*do soemthing once the job is done */ },
            error: err => { /* handle the error emited by observer.error */ }
        });

     
    Integrate rest-api calls into angular application using 'HttpClient'

        @angular/commons/http
            HttpClientModule
                HttpClient
                    get(url) : Observable
                    post(url,reqBody) : Observable
                    put(url,reqBody) : Observable
                    delete(url) : Observable

    json-server to generate fake rest api

        md rest-api
        cd rest-api
        npm init -y
        npm i json-server --save

        rest-api
            |- node_modules
            |- data.json            //the hypothetical data
            |- package.json         "start":"json-server --port 9999 --watch ./data.json"

        

