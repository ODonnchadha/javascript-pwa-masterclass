- And you can "progressively" enhance existing Websites.
1. Technical Overview:
2. Lesson Structure:
    - Latest Chrome. Mobile layout. Simply static file server.

- Service Workers:
    1. Proxy object. Intercept requests and respond accordingly.
    2. Secure connection. Always. Only exception is localhost.
    3. fetch method. And promises, not callbacks.
    4. If a browser supports a service worker, it will support fetch and promises.

- Promises:
    1. Classic callback:
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
    2. Promise. JavScript class, not a strategy, that will deliver an outcome at some given time.
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
    3. Fetch. Part of the browser's Window object.
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
    4. Lifecycle:
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
    4. FetchEvent:
        - Matching requests. Author likes 'endsWith.'
        - e.g.: .endsWith('css');