import got from 'got';

const handleReceivedResponse = (response) => {
  console.log(JSON.parse(response.body));
}
got('https://api.github.com/repos/sinatra/sinatra').then(handleReceivedResponse);
