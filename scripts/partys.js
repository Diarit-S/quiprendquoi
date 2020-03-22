const list = document.querySelector('.itemsList');
if (typeof party !== 'undefined') {
  localStorage.setItem(location.href, party.name);
  if (window.fetch) {
    setInterval(() => {
      if (!document.hidden) {
        fetchApi()
      }
    }, 5000);
  }
}

function fetchApi() {
  fetch(`${apiUrl}/party/${party._id}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      if (areDifferences(data)) {
        writeItems(data)
      }
    })
    .catch(err => {
      console.log('err' + err)
    })
}

function areDifferences(data) {
  // Of course we have to check if items propertys have the same value or not
  // But for simplcity, we just check if the length between arrays is different
  return data.items.length !== party.items.length;
}

function writeItems(data) {
  list.innerHTML = '';
  data.items.forEach(item => {
    const htmlItem = document.createElement('li');
    const deleteForm = document.createElement('form');
    deleteForm.method='POST';
    deleteForm.action = `/removeItem/${eventId}/${item._id}`;
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'Submit';
    deleteBtn.innerHTML = 'X';
    deleteForm.appendChild(deleteBtn);
    htmlItem.innerHTML = `${item.name} : ${item.user}`;
    list.appendChild(htmlItem);
    list.appendChild(deleteForm)
  });
}