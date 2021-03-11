import fetch from 'node-fetch';

export function sms () {


    const token = '359909011b5929eeb74a934a6f42d240515cf6ae0434274a05616ea1a6a0d22e00cc44381b8262ecc1969e3939dcbb130d7177c212c120b00450fca8c5d9c3f2';

// Ниже опеределяется запрос как multi-line string
// Также, возможно хранение запросов отдельно от кода
    const query = `
mutation ($message: String!, $chat_id: ID!) { # Определение переменных, используемых в запросе (input)
    newMessages2(chat_id: $chat_id, input: { text_message: { message: $message } })  # Передача переменных в аргументы поля (input)
  {  
 edges{node{id}} 
  }
}`;
// Определение переменных, которые будут использоваться далее в запросе
    const variables = {
        chat_id: "bc350289-4e98-4d5d-8a94-f2e78603769f",
        message: `hello world`
    };

// Определение параметров XHR запроса
    const url = 'https://api-dev.ppl.do/graphql',
        options = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        };

// Выполнение XHR запроса
    fetch(url, options).then(handleResponse)
        .then(handleData)
        .catch(handleError);

    function handleResponse(response) {
        return response.json().then(function (json) {
            return response.ok ? json : Promise.reject(json);
        });
    }


    function handleData(data) {
        console.log(data);
        console.log("id last message =", data.data.newMessages2.edges);
    }

    function handleError(error) {
        console.log('Ошибка, результат в консоли');
        console.error(error);
    }
}

