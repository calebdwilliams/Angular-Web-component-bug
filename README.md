# Angular Web Components bug

This repository servers as a demonstration that the latest version of Angular (4.3.6) prevents the immediate execution of a W3C custom element's connectedCallback method if the element is the application's root component (although it _does_ work properly inside a routed component). You can see a reproduction of the issue [on GitHub pages](https://calebdwilliams.github.io/Angular-Web-component-bug/).
