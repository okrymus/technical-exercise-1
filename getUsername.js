function getUsernameRequest(){
  var resultElement = document.getElementById('getResult');
  resultElement.innerHTML = '';

  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      resultElement.innerHTML = generateSuccessUsernameOutput(response);
    })
    .catch(function (error) {
      resultElement.innerHTML = generateErrorUsernameOutput(error);
    });
}

function generateSuccessUsernameOutput(response) {
  return  '<h4>Result:</h4>' + '<h5>Status:</h5>' +
          '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
          '\t' + '<h5> Data:</h5>' +
          '<pre>' + JSON.stringify(response.data, replacer, '\t') + '</pre>';
}

function replacer(key,value){
    if (key=="id" || key=="name" || key =="phone" || key == "website" || key == "company") return undefined;
	else return value;
}

function generateErrorUsernameOutput(error) {
  return  '<h4>Result:</h4>' +
          '<h5>Message:</h5>' +
          '<pre>' + error.message + '</pre>' +
          '<h5>Status:</h5>' +
          '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
          '<h5>Data:</h5>' +
          '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';	
}
		  
function clearOutput() {
    var resultElement = document.getElementById('getResult');
    resultElement.innerHTML = '';
}