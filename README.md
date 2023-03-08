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
        is reflected whereever needed in the template (the tempalte is re-rendered).

        Interpolation

            syntax: {{angular-expression}}
            eg:     {{ (p*t*r)/100 }}           //provided p,t and r are the fields of that component class

        Two-Way Data Binding
        One-Way Data Binding
            Attribute Binding
            Event Binding
            Style Binding
            Css-Class Binding

            

