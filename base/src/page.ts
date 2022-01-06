namespace Home {
  // prevent global variables
  export class Head {
    constructor() {
      const elem = document.createElement("header");
      elem.innerText = "This is Header";
      document.body.appendChild(elem);
    }
  }
  export class Content {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is content";
      document.body.appendChild(elem);
    }
  }

  export class Page {
    constructor() {
      new Head();
      new Content();
    }
  }
}
