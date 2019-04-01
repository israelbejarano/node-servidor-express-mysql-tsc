import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';

const server = Server.init(3000);
server.app.use(router);

// mysql instance para ver el patron singleton
// MySQL.instance;

server.start(() => {
    console.log('Servidor corriendo en puerto 3000');
});