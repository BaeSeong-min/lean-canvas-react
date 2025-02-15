import axios from 'axios';

function create(baseURL, options) {
  const instacne = axios.create(Object.assign({ baseURL }, options)); // axios 객체 생성, baseURL: baseURL
  return instacne;
}

export const canvases = create('http://localhost:8000/canvases/');
