namespace Home {
  // prevent global variables
  export class Page {
    constructor() {
      new Components.Head();
      new Components.Content();
    }
  }
}
