"use strict";
var Home;
(function (Home) {
    class Head {
        constructor() {
            const elem = document.createElement("header");
            elem.innerText = "This is Header";
            document.body.appendChild(elem);
        }
    }
    Home.Head = Head;
    class Content {
        constructor() {
            const elem = document.createElement("div");
            elem.innerText = "This is content";
            document.body.appendChild(elem);
        }
    }
    Home.Content = Content;
    class Page {
        constructor() {
            new Head();
            new Content();
        }
    }
    Home.Page = Page;
})(Home || (Home = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFVLElBQUksQ0FzQmI7QUF0QkQsV0FBVSxJQUFJO0lBQ1osTUFBYSxJQUFJO1FBQ2Y7WUFDRSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7WUFDbEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQztLQUNGO0lBTlksU0FBSSxPQU1oQixDQUFBO0lBQ0QsTUFBYSxPQUFPO1FBQ2xCO1lBQ0UsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDO1lBQ25DLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLENBQUM7S0FDRjtJQU5ZLFlBQU8sVUFNbkIsQ0FBQTtJQUVELE1BQWEsSUFBSTtRQUNmO1lBQ0UsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNYLElBQUksT0FBTyxFQUFFLENBQUM7UUFDaEIsQ0FBQztLQUNGO0lBTFksU0FBSSxPQUtoQixDQUFBO0FBQ0gsQ0FBQyxFQXRCUyxJQUFJLEtBQUosSUFBSSxRQXNCYiJ9