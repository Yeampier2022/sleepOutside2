function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error(`Bad Response`);
  }
}

export default class Alert  {

  constructor() {
    this.path = `../json/alert.json`;
  }

  async getData() {
    const response = await fetch(this.path);
    const data = await convertToJson(response);
    return data.Result;
    
  
  }
}
