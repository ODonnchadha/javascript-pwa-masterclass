## Overview:
- Smooth online and offline experiences. Indistinguishable from an app.
- And you can "progressively" enhance existing Websites.
- The future of apps as we know it.
- Technical Overview:
    - Websites as we know them.
    - Service Workers:
        1. Proxy object. Intercept requests and respond accordingly.
        2. Secure connection. Always. Only exception is localhost.
        3. Fetch method. And promises, not callbacks.
        4. If a browser supports a service worker, it will support fetch and promises.
    - App shell:
        - Abstracting content. Load dynamic content.
    - App Manifest:
        - From webpage to entity.
- Lesson Structure:
    - Latest Chrome browser as it offers the best development tools.
    - Mobile layout. Simple static file server. Turn on device frame.
    - Chrome webserver extension.
    
## Service Worker:
- Service Worker API.
- Proxy object that sits between the application the the network.
- They require a secure connection as we constantly modify service requests. 
- BUT... an usecure localhost is allowed. Use Fetch and Promise.


- Promises:
    - Classic callback:
    ```javascript
        function addExtra(price, callback) {
            setTimeout(function() {
                callback(price + 1);
            }, 300);

            addExtra(1, function(newPrice) {
                console.log(newPrice);
            });
        }
    ```

-  Promise. JavScript class, not a strategy, that will deliver an outcome at some given time.
    - It will be resolved. Three states: Pending. Resolved. Rejected.
    ```javascript
        function addExtra(price) {
            return new Promise(function(resolve, reject) {
                if (prive > 2) reject("Price cannot exceed three.");
                setTimeout(function() {
                    callback(price + 1);
                }, 300);
            });
        }

        addExtra(1).then(function(newPrice) { 
            console.log(newPrice); 
            }).catch(function(error) { 
                console.log(error); 
        });
    ```

- Fetch: Part of the browser's Window object.
    - Response body is of type ReadableStream. 
    - Streams are 'consumable.' They can be read only once.
    - To read the stream as JSON, use the response object's .json().
    ```javascript
        fetch('./template.html').then(function(response) {
            response.text().then(function(html) {
                console.log(html);
            });
        });
    ```

- Lifecycle:
    - Registering, Installing, and Updating.
        1. Browser 'reads' the file and parses it.
        2. Installation.
        3. Activation.
    ```javascript
        self.addEventListenet('install', (e) => {
            let installPromise = new Promise((resolve) => {
                setTimeout(resolve, 3000);
            })
            e.waitUntil(installPromise);
        });
        self.addEventListenet('activate', (e) => {
            console.log('activate ', e);
        });
    ```
- FetchEvent: Key feature.
    - Listens for events of the page running the service worker.
    - Matching requests. Author likes 'endsWith.' e.g.: .endsWith('css');

- Scope:
    - Cannot have access to anything 'above' the application.

- Service Worker Registration: .onupdatefound(), .onstatechange()

- Service Worker Event Messaging:
    - Main context and service worker. Standard HTML5 messaging API.
    - Why? Prompt user to update the app: .onupdatefound()

- Event Push event.
    - Data from a remote server without a 'request.'
    - So... push notifications/event.
    ```javascript
        self.addEventListenet('push', () => {
        });
    ```