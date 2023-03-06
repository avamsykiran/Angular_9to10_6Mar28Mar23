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

        
        
