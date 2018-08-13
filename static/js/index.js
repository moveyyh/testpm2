const ajax = (url, {
  data,
  type
}) => {
  const xhr = new XMLHttpRequest();
  let _data = null;
  let _url = '';

  type = type.toLocaleUpperCase();

  xhr.onreadystatechange = function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
      console.log(xhr);
    }
  }

  if (type === 'GET') {
    let datas = [];
    let dataStr = '';
    for (let key in data) {
      datas.push(`${key}=${data[key]}`);
    }
    dataStr = datas.join('&');

    const urlArr = url.split('#');
    _url = `${urlArr[0]}?${dataStr}${urlArr[1] ? `#${urlArr[1]}` : ''}`;
    xhr.open(type, _url);
    xhr.send();
  } else if (type === 'POST') {
    xhr.open(type, url);
    xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    xhr.send(JSON.stringify(data));
  }
}

let n = 0;
function intervalFn () {
  n++;
  console.log(n);
}

ajax('/asdfasdfdsf?name=yyh', {
  data: {
    a: 1,
    b: 2
  },
  type: "POST"
})